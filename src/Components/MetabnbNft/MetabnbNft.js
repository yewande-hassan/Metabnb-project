import React from "react";
import Image from "../Image/Image";
import NftImage from "../images/NftImage.svg"
import "./MetabnbNft.css"

export default function MetabnbNft(){
    return(
        <div className="nftSection lg:flex justify-around p-16 ">
        <div className="basis-2/5 sm:w-full">
            <h1 className="heroHeading md:text-left sm:text-center">Metabnb NFTs</h1>
            <p className="heroParagraph">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <label className="block">
            <input class="placeholder:normal placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for location..." type="text" name="search"/>
            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" type="submit">Message</button>
            </label>
        </div>
        <div>
        <Image images={NftImage} alt={'NftImage'} className={'basis-3/5 image'}/>
        </div>
        </div>
    )
}