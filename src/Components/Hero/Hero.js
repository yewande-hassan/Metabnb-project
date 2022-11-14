import React from "react";
import Image from "../Image/Image";
import HeroImage from "../images/HeroImage.svg"
import "./Hero.css"
export default function Hero(){
    return (
      <div className="hero sm:m-4 lg:flex lg:justify-around lg:p-8 items-center">
        <div className="basis-2/5 lg:w-3/5">
          <h2 className="heroHeading text-4xl font-bold mb-5">
            Rent a <span className="heroHeadingColored">Place</span> away from{" "}
            <span>Home</span> in the{" "}
            <span className="heroHeadingColored">Metaverse</span>
          </h2>
          <p className="heroParagraph mb-5">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className=" block flex my-4">
            <input
              className=" input placeholder:normal placeholder:text-slate-400 block bg-white w-full border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for location..."
              type="text"
              name="search"
            />
            <button
              className="btn w-1/2 px-4 py-3 text-sm text-white-600 font-semibold border border-slate-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <Image
            images={HeroImage}
            alt={"Hero Image"}
            className={"basis-3/5 image md:m-auto"}
          />
        </div>
      </div>
    );
}