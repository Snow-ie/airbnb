import React from "react";
import grid from "./assets/images/grid-1.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={grid} alt="grid-pic" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interative activities led by one-of-a-kind host-all without
        leaving home.
      </p>
    </section>
  );
}
