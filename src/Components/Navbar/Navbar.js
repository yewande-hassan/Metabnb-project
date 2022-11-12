import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image.js";
import MetaLogo from "../images/MetaLogo.svg"
import "./Navbar.css"
export default function Navbar(){
    return(
        // <div className="flex flex-row justify-around lg:px-16 lg:py-8">
        // <Image images={MetaLogo} alt={'metabnb Logo'} height={100} width={100} className={'basis-1/12'}/>
        // <div className="links flex lg:flex-row justify-around my-auto basis-1/2">
        // <Link to="/" className="">Home</Link>
        // <Link to="/place-to-stay">Place to stay</Link>
        // <Link to="/nft">NFTs</Link>
        // <Link to="/community">Community</Link>
        // </div>
        // <button className= "text-white button lg:p-3 lg:basis-2/12">Connect wallet</button>
        // </div>
        <nav class="flex items-center justify-between flex-wrap bg-white-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Image images={MetaLogo} alt={'metabnb Logo'} height={100} width={100} className={'basis-1/12'}/>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow links flex justify-around my-auto basis-1/2">
          <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4">
            Home
          </Link>
          <Link to="/place-to-stay" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4">
            Place to stay
          </Link>
          <Link to="/nft" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4">
            NFTs
          </Link>
          <Link to="/community" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white">
            Community
          </Link>
        </div>
        <div>
        <button className= "text-white button lg:p-3 lg:basis-2/12 hover:opacity-70">
          <Link to="/" class="inline-block text-sm px-4 py-2 leading-none rounded hover:text-black-500 mt-4 lg:mt-0">Connect wallet</Link>
          </button>
        </div>
      </div>
    </nav>
    )
}