import "./style.css";
import products from "./api/product.json";
import { showProductContainer } from "./homeProductCards"; // this function is define in /homeProductCards so get the data deom this particular file

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);
