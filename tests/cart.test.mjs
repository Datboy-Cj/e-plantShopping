import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { buildSync } from 'esbuild';

// Compile the actual production modules, rather than a copy of the cart logic.
buildSync({
  entryPoints: { cart: 'src/CartItem.jsx', slice: 'src/CartSlice.jsx' },
  outdir: '.test-build', outExtension: { '.js': '.cjs' },
  bundle: true, platform: 'node', format: 'cjs', packages: 'external', logLevel: 'silent',
});
const require = createRequire(import.meta.url);
const { calculateTotalAmount, calculateTotalCost, calculateTotalQuantity } = require('../.test-build/cart.cjs');
const { default: reducer, addItem, updateQuantity, removeItem } = require('../.test-build/slice.cjs');
const snake = { id: 1, name: 'Snake Plant', price: 1800 };
const zz = { id: 2, name: 'ZZ Plant', price: 2200 };

test('empty cart totals are zero', () => {
  assert.equal(calculateTotalAmount([]), 0);
  assert.equal(calculateTotalQuantity([]), 0);
});
test('item total multiplies unit price by quantity exactly', () => {
  assert.equal(calculateTotalCost({ price: 1299, quantity: 3 }), 3897);
});
test('total amount and quantity reflect all plants', () => {
  const cart = [{ ...snake, quantity: 2 }, { ...zz, quantity: 1 }];
  assert.equal(calculateTotalAmount(cart), 5800);
  assert.equal(calculateTotalQuantity(cart), 3);
});
test('add, increment, decrement, and delete update actual Redux cart totals', () => {
  let state = reducer(undefined, addItem(snake));
  state = reducer(state, addItem(zz));
  assert.equal(calculateTotalAmount(state.items), 4000);
  state = reducer(state, updateQuantity({ id: 1, quantity: 2 }));
  assert.equal(calculateTotalAmount(state.items), 5800);
  state = reducer(state, updateQuantity({ id: 1, quantity: 1 }));
  assert.equal(calculateTotalAmount(state.items), 4000);
  state = reducer(state, removeItem(2));
  assert.equal(calculateTotalAmount(state.items), 1800);
});
test('duplicate add is ignored and quantity zero removes the plant', () => {
  let state = reducer(undefined, addItem(snake));
  state = reducer(state, addItem(snake));
  assert.equal(calculateTotalQuantity(state.items), 1);
  state = reducer(state, updateQuantity({ id: 1, quantity: 0 }));
  assert.deepEqual(state.items, []);
});
test('invalid and unknown quantity updates leave the cart unchanged', () => {
  const state = reducer(undefined, addItem(snake));
  for (const quantity of [-1, 1.5, NaN]) {
    assert.deepEqual(reducer(state, updateQuantity({ id: 1, quantity })), state);
  }
  assert.deepEqual(reducer(state, updateQuantity({ id: 999, quantity: 4 })), state);
});
