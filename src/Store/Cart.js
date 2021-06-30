import { Products } from "../Store";

const CART = "cart";
const messages = {
  success: "SUCCESS",
  error: "ERROR",
};

const getItem = (slug) => {
  const products = Products.getAllProducts();
  return products.filter((product) => product.slug === slug)[0];
};

const getCartItems = () => {
  const cart = localStorage.getItem(CART);
  return cart ? JSON.parse(cart) : null;
};

const createCart = (slug, quantity) => {
  const item = getItem(slug);
  const cart = [
    {
      id: item.id,
      slug: item.slug,
      name: item.name,
      image: item.image,
      description: item.description,
      quantity: quantity || 1,
      price: item.discountPrice ? item.discountPrice : item.price,
    },
  ];
  localStorage.setItem(CART, JSON.stringify(cart));
  return messages.success;
};

const addCartItem = (slug, quantity) => {
  const cart = getCartItems();
  if (cart) {
    const item = cart.filter((item) => item.slug === slug)[0];
    if (item) {
      if (quantity) item.quantity = parseInt(item.quantity) + quantity;
      else item.quantity = item.quantity + 1;
    } else {
      const cartItem = getItem(slug);
      cart.push({
        id: cartItem.id,
        slug: cartItem.slug,
        name: cartItem.name,
        image: cartItem.image,
        quantity: quantity || 1,
        price: cartItem.discountPrice ? cartItem.discountPrice : cartItem.price,
      });
    }
    localStorage.setItem(CART, JSON.stringify(cart));
    return messages.success;
  }
  return createCart(slug, quantity);
};

const removeCartItem = (slug) => {
  const cart = getCartItems();
  if (cart) {
    const newCart = cart.filter((item) => slug !== item.slug);
    localStorage.setItem(CART, JSON.stringify(newCart));
    return messages.success;
  }
  return messages.error;
};

const removeSingleCartItem = (slug, operation) => {
  const cart = getCartItems();
  if (cart) {
    const item = cart.filter((item) => slug === item.slug)[0];
    if (item.quantity <= 1) {
      removeCartItem(slug);
    } else {
      item.quantity = item.quantity - 1;
    }
    localStorage.setItem(CART, JSON.stringify(cart));
    return messages.success;
  }
  return messages.error;
};

const commands = {
  getCartItems,
  addCartItem,
  removeSingleCartItem,
  removeCartItem,
};

export default commands;
