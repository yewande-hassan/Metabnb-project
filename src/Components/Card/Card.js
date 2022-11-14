import React from "react";
import Image from "../Image/Image";
import "./Card.css";
export default function Card({
  location,
  cost,
  distance,
  availability,
  frame,
  star,
}) {
  return (
    <div className="card p-2 border-solid border-2 border-gray-300 m-2 rounded-lg">
      <Image images={frame} alt={"picture of location"} className={"w-full"} />
      <div className="grid grid-cols-2 gap-2 py-3">
        <p>{location}</p>
        <p className="font-bold">{cost}</p>
        <p>{distance}</p>
        <p>{availability}</p>
        <Image images={star} alt={"5 star"} />
      </div>
    </div>
  );
}
