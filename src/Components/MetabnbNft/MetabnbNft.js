import React from "react";
import Image from "../Image/Image";
import NftImage from "../images/metabnbimage.webp"
import "./MetabnbNft.css"

export default function MetabnbNft(){
    return (
      <div className="nftSection items-center sm:w-full md:w-full lg:flex lg:justify-around lg:p-16">
        <div className="basis-2/5 md:px-7">
          <h1 className="metabnbHeading md:text-left sm:text-center">
            Metabnb NFTs
          </h1>
          <p className="metabnbParagraph mb-3">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
            <button
              class="btns w-auto my-5 px-4 py-3 text-sm text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              type="submit"
            >
              Learn More
            </button>
        </div>
        <div className="">
          <Image
            images={NftImage}
            alt={"NftImage"}
            className={"basis-3/5 image"}
            width={500}
            height={500}
          />
        </div>
      </div>
    );
}