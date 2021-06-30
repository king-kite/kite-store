import { Products } from "../Store";

const WISHLIST = "wishlist";
const messages = {
  success: "SUCCESS",
  error: "ERROR",
};

const getItem = (slug) => {
  const products = Products.getAllProducts();
  return products.filter((product) => product.slug === slug)[0];
};

const getWishlistItems = () => {
  const wishlist = localStorage.getItem(WISHLIST);
  return wishlist ? JSON.parse(wishlist) : null;
};

const createWishlist = (slug) => {
  const item = getItem(slug);
  const wishlist = [
    {
      id: item.id,
      slug: item.slug,
      name: item.name,
      image: item.image,
      description: item.description,
      price: item.discountPrice ? item.discountPrice : item.price,
    },
  ];
  localStorage.setItem(WISHLIST, JSON.stringify(wishlist));
  return messages.success;
};

const addWishlistItem = (slug) => {
  const wishlist = getWishlistItems();
  if (wishlist) {
    let item = wishlist.filter((item) => item.slug === slug)[0];
    if (item) return messages.error;
    else {
      item = getItem(slug);
      wishlist.push({
        id: item.id,
        slug: item.slug,
        name: item.name,
        image: item.image,
        description: item.description,
        price: item.discountPrice ? item.discountPrice : item.price,
      });
    }
    localStorage.setItem(WISHLIST, JSON.stringify(wishlist));
    return messages.success;
  }
  return createWishlist(slug);
};

const removeWishlistItem = (slug) => {
  const wishlist = getWishlistItems();
  if (wishlist) {
    const newCart = wishlist.filter((item) => slug !== item.slug);
    localStorage.setItem(WISHLIST, JSON.stringify(newCart));
    return messages.success;
  }
  return messages.error;
};

const commands = {
  getWishlistItems,
  addWishlistItem,
  removeWishlistItem,
};

export default commands;
