import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <>
  <Link to="/">Home</Link>
  <Link to="/login">Login</Link>
  <Link to="/Signup">Signup</Link>
  <Link to="/products">Products</Link>
  <Link to="/product">Product</Link>
  </>
);
};

export default Navbar;
