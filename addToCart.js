import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage
// --------------------------------------------------------
getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  //this function is to get data from loacl storage
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`); // to get the particular product Id
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  price = price.replace("₹", "");

  // In this if id value is already present in local stroage then it will set existingProd value as true
  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );
  // in this if quantity is greater than 1 then we have to set that value of quantity and price in local storage
  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };
    // this will check if id is present in local stoage then update the existing obj of LS to updatedCart else keep existing obj as it is
    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    //show toast when product added to the cart
    // showToast("add", id);
  }
  if (existingProd) {
    // alert id is already presnet in Local stoage;
    return false;
  }

  console.log(quantity, price);
  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  // this is varaible for local stoage - cartProductLS so now we are pussing data(id,quantity,price) in local stoage
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update the cart button value
  updateCartValue(arrLocalStorageProduct);
};
