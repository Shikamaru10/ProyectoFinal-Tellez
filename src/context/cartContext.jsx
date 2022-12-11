import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const saludoContext = "ola";

  const [cart, setCart] = useState([]);

  function addToCart(product, count) {

    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {

      product.count = count;
      newCart.push(product);

      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }
  
  function removeItem(idRemove) {
    console.log("Eliminando el item:", idRemove);
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
  }

  function priceInCart() {
    let totalPrice = 0
    cart.forEach( (producto) => (totalPrice = totalPrice + (producto.price*producto.cantidad)))
    return totalPrice
  }

  return (
    <cartContext.Provider
      value={{ cart, addToCart, saludoContext, itemsInCart, removeItem, priceInCart }}>
      {children}
    </cartContext.Provider>
  );
}
