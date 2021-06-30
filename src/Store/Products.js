const products = "products";

const Products = [
  {
    id: 1,
    name: "denim trousers",
    slug: "denim-trousers",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/1.jpg",
    category: "denim",
    price: 200,
    discountPrice: 100,
    stars: 4,
    bestSeller: true,
    new: true,
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
  },
  {
    id: 2,
    name: "high heels",
    slug: "high-heels",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/2.jpg",
    category: "shoes",
    price: 100,
    discountPrice: null,
    stars: 3,
    bestSeller: false,
    new: true,
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
  },
  {
    id: 3,
    name: "shirt",
    slug: "shirt",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/3.jpg",
    category: "blouses",
    price: 50,
    discountPrice: null,
    stars: 3,
    bestSeller: false,
    new: true,
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
  },
  {
    id: 4,
    name: "brown coat",
    slug: "brown-coat",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/4.jpg",
    category: "outwear",
    price: 250,
    discountPrice: 220,
    stars: 5,
    bestSeller: true,
    new: true,
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
  },
  {
    id: 5,
    name: "red trousers",
    slug: "red-trousers",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/5.jpg",
    category: "denim",
    price: 100,
    discountPrice: null,
    stars: 2,
    bestSeller: false,
    new: false,
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
  },
  {
    id: 6,
    name: "white joggings",
    slug: "white-joggings",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/6.jpg",
    category: "outwear",
    price: 200,
    discountPrice: null,
    stars: 5,
    bestSeller: true,
    new: true,
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
  },
  {
    id: 7,
    name: "sweater",
    slug: "sweater",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
    category: "outwear",
    price: 100,
    discountPrice: 75,
    stars: 3,
    bestSeller: false,
    new: true,
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
  },
  {
    id: 8,
    name: "black shirt",
    slug: "black-shirt",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
    category: "shirt",
    price: 100,
    discountPrice: 75,
    stars: 3,
    bestSeller: false,
    new: true,
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit."
  },
]

const getAllProducts = () => {
  let p = localStorage.getItem(products);
  if (p !== null && p !== undefined) {
    return JSON.parse(p);
  } else {
    let p = JSON.stringify(Products);
    localStorage.setItem(products, p);
    return Products;
  }
}

const getProduct = (slug) => {
  let p = localStorage.getItem(products);
  if (p !== null && p !== undefined) {
    let parseP = JSON.parse(p);
    p = parseP.filter((product) => product.slug === slug)[0];
    return p;
  }
  return null;
}

const commands = {
  getAllProducts,
  getProduct,
};

export default commands;