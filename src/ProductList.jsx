import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';
import { money } from './plants.js';

const categories = [
  {
    "name": "Easy-care favorites",
    "slug": "easy-care",
    "description": "Easygoing plants for everyday spaces.",
    "plants": [
      {
        "id": 1,
        "name": "Snake Plant",
        "price": 1800,
        "description": "Upright leaves with a sculptural silhouette.",
        "tag": "Easy living",
        "image": "./plant-1.svg"
      },
      {
        "id": 2,
        "name": "ZZ Plant",
        "price": 2200,
        "description": "Glossy green leaves and an easygoing nature.",
        "tag": "Easy living",
        "image": "./plant-2.svg"
      },
      {
        "id": 3,
        "name": "Golden Pothos",
        "price": 1600,
        "description": "Trailing golden-green foliage for shelves.",
        "tag": "Easy living",
        "image": "./plant-3.svg"
      },
      {
        "id": 4,
        "name": "Spider Plant",
        "price": 1400,
        "description": "Arching striped leaves with playful offshoots.",
        "tag": "Easy living",
        "image": "./plant-4.svg"
      },
      {
        "id": 5,
        "name": "Jade Plant",
        "price": 2000,
        "description": "A compact succulent with rich green leaves.",
        "tag": "Easy living",
        "image": "./plant-5.svg"
      },
      {
        "id": 6,
        "name": "Aloe Vera",
        "price": 1700,
        "description": "Sculptural succulent leaves for a sunny spot.",
        "tag": "Easy living",
        "image": "./plant-6.svg"
      }
    ]
  },
  {
    "name": "Statement foliage",
    "slug": "foliage",
    "description": "Bold shapes. Beautiful living focal points.",
    "plants": [
      {
        "id": 7,
        "name": "Monstera Deliciosa",
        "price": 3400,
        "description": "Iconic split leaves with a tropical feel.",
        "tag": "Bold foliage",
        "image": "./plant-7.svg"
      },
      {
        "id": 8,
        "name": "Fiddle Leaf Fig",
        "price": 4200,
        "description": "Large violin-shaped leaves for a bright corner.",
        "tag": "Bold foliage",
        "image": "./plant-8.svg"
      },
      {
        "id": 9,
        "name": "Rubber Plant",
        "price": 2900,
        "description": "Deep glossy foliage and strong upright growth.",
        "tag": "Bold foliage",
        "image": "./plant-9.svg"
      },
      {
        "id": 10,
        "name": "Bird of Paradise",
        "price": 4600,
        "description": "Expansive leaves with an architectural presence.",
        "tag": "Bold foliage",
        "image": "./plant-10.svg"
      },
      {
        "id": 11,
        "name": "Areca Palm",
        "price": 3800,
        "description": "Feathery fronds for a relaxed tropical touch.",
        "tag": "Bold foliage",
        "image": "./plant-11.svg"
      },
      {
        "id": 12,
        "name": "Philodendron Brasil",
        "price": 2400,
        "description": "Heart-shaped leaves with lime-green markings.",
        "tag": "Bold foliage",
        "image": "./plant-12.svg"
      }
    ]
  },
  {
    "name": "Small-space greens",
    "slug": "small-space",
    "description": "Small in size. Full of character.",
    "plants": [
      {
        "id": 13,
        "name": "Peperomia",
        "price": 1500,
        "description": "Rounded leaves on a neat compact plant.",
        "tag": "Small & lovely",
        "image": "./plant-13.svg"
      },
      {
        "id": 14,
        "name": "Fittonia",
        "price": 1200,
        "description": "Delicate foliage traced with vivid veins.",
        "tag": "Small & lovely",
        "image": "./plant-14.svg"
      },
      {
        "id": 15,
        "name": "Haworthia",
        "price": 1300,
        "description": "A petite rosette with striped pointed leaves.",
        "tag": "Small & lovely",
        "image": "./plant-15.svg"
      },
      {
        "id": 16,
        "name": "Pilea Peperomioides",
        "price": 2300,
        "description": "Coin-shaped leaves on graceful stems.",
        "tag": "Small & lovely",
        "image": "./plant-16.svg"
      },
      {
        "id": 17,
        "name": "Boston Fern",
        "price": 2100,
        "description": "Soft cascading fronds with lush texture.",
        "tag": "Small & lovely",
        "image": "./plant-17.svg"
      },
      {
        "id": 18,
        "name": "Calathea Orbifolia",
        "price": 2800,
        "description": "Rounded leaves brushed with silvery stripes.",
        "tag": "Small & lovely",
        "image": "./plant-18.svg"
      }
    ]
  }
];

export function Navbar({ showCart, totalQuantity, onHomeClick }) {
  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={onHomeClick}>✳ Paradise Nursery</a>
      <nav aria-label="Main navigation">
        <a href="#home" onClick={onHomeClick}>Home</a>
        <a href="#plants" aria-current={!showCart ? 'page' : undefined}>Plants</a>
        <a className="cart-link" href="#cart" aria-current={showCart ? 'page' : undefined}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M3 3h2l3 13h11l2-9H6M9 21h.01M18 21h.01" strokeLinecap="round" />
          </svg>
          Cart <span className="badge cart-quantity" aria-label={`${totalQuantity} items in cart`}>{totalQuantity}</span>
        </a>
      </nav>
    </header>
  );
}

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCart, setShowCart] = useState(window.location.hash === '#cart');
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleNavigation = () => setShowCart(window.location.hash === '#cart');
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    window.location.hash = 'plants';
  };

  return (
    <>
      {/* This shared navbar remains visible on both Plants and Cart. */}
      <Navbar showCart={showCart} totalQuantity={totalQuantity} onHomeClick={onHomeClick} />
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <main className="catalog product-grid">
          <div className="page-heading">
            <span className="eyebrow">THE GREEN COLLECTION</span>
            <h1>Find your kind of green.</h1>
            <p>Little companions for every corner of your home.</p>
          </div>
          <div className="category-links">
            {categories.map(category => (
              <a key={category.name} href={`#category-${category.slug}`} onClick={event => {
                event.preventDefault();
                document.getElementById(category.slug).scrollIntoView({ behavior: 'smooth' });
              }}>
                {category.name} <span>{category.plants.length}</span>
              </a>
            ))}
          </div>
          {categories.map(category => (
            <section id={category.slug} key={category.name}>
              <div className="section-heading">
                <h2>{category.name}</h2><p>{category.description}</p>
              </div>
              <div className="plant-grid">
                {category.plants.map(plant => {
                  // Derive disabled state from Redux, so deleting an item enables it again.
                  const added = cartItems.some(item => item.id === plant.id);
                  return (
                    <article className="plant-card product-card" key={plant.id}>
                      <div className="plant-image">
                        <img className="product-image" src={plant.image} alt={plant.name} loading="lazy" />
                        <span className="plant-tag">{plant.tag}</span>
                      </div>
                      <div className="plant-info">
                        <div className="plant-title">
                          <h3 className="product-title">{plant.name}</h3>
                          <strong className="product-price">{money(plant.price)}</strong>
                        </div>
                        <p className="product-description">{plant.description}</p>
                        <button className="product-button" disabled={added} onClick={() => handleAddToCart(plant)}>
                          {added ? '✓ Added to Cart' : 'Add to Cart'}
                          {!added && <span aria-hidden="true">+</span>}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </>
  );
}

export default ProductList;
