import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
  //this we are fetcching data from local storage
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }

  cartProducts = JSON.parse(cartProducts);
  //update the cart button value
  updateCartValue(cartProducts);

  return cartProducts;
};
