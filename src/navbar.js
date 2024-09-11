import React from "react";
import airbnblogo from "./assets/images/airbnblogo.svg";

export default function Navbar() {
  return (
    <nav>
      <img src={airbnblogo} alt="Airbnb" className="Nav--logo" />
    </nav>
  );
}
