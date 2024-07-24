const cartValue = document.querySelector("#cartValue"); // id of cart iem in header
// In cart products we are getting complete array of object that we have set in local storage
export const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`);
};
