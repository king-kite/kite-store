import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => (
  <div
    className="p-5 text-center bg-image"
    style={{
      backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')",
      height: 400,
    }}
  >
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Find your next Product</h1>
          <h4 className="mb-3">
            Kite Store has a variety of products just for you. We are available
            anytime and anywhere.
          </h4>
          <NavLink className="btn btn-outline-light btn-lg" to="/products">
            Check out our Products
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
