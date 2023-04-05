import { createContext, useState } from "react";
export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
/* product será : {
  qty: Number
  product:{}
} */
  const addProductToCart = (product) => {
    !cart.length ? setCart([product]) : setCart([...cart, product]);
  };
  const deleteProductFromCart = (idProduct) => {
    setCart(
      cart.filter((cartItem) => {
        cartItem.product.id !== idProduct;
      })
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        deleteProductFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
