import React from "react";
import { NavLink } from "react-router-dom";
import { MDBCol } from "mdb-react-ui-kit";

const Similars = ({ similars }) =>
  similars.map((similar) => (
    <MDBCol
      key={similar.slug}
      md={6}
      lg={4}
      className="d-flex justify-content-center my-2"
    >
      <div className="bg-image hover-overlay" style={{ maxWidth: "24rem" }}>
        <img src={similar.image} className="img-fluid" alt={similar.name} />
        <NavLink to={`/product/${similar.slug}`}>
          <div
            className="mask overlay"
            style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
          ></div>
        </NavLink>
      </div>
    </MDBCol>
  ));

export default Similars;
