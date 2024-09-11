import React from "react";
import redstar from "./assets/images/redstar.jpg";

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) {
  console.log(img, rating, reviewCount, location, title, price, openSpots);
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {/* {openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      <img src={img} className="card--image" />

      <div className="card--stat">
        <img src={redstar} className="card--star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) . </span>
        <span className="grey">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">From ${price}</span>/ persons
      </p>
    </div>
  );
}
