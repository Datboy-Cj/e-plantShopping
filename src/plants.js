export const money=cents=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(cents/100);
export const categories=[
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
