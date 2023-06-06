import React from "react";
import img from "../assets/Header.png";

function Header() {
  return (
    <div className="fixed-top">
      <figure class="figure">
        <img className="h-1" src={img} class="figure-img img-fluid rounded" alt="..." />
      </figure>
    </div>
  );
}

export default Header;
