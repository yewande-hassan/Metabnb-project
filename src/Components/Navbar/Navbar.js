import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image.js";
import MetaLogo from "../images/MetaLogo.svg"
import "./Navbar.css"
export default function Navbar(){
    return(
        <div className="flex flex-row justify-around">
        <Image images={MetaLogo} alt={'metabnb Logo'} height={100} width={100} className={'basis-1/12'}/>
        <div className="links flex flex-row justify-around my-auto basis-1/2">
       <Link to="/" className="">Home</Link>
        <Link to="/place-to-stay">Place to stay</Link>
        <Link to="/nft">NFTs</Link>
        <Link to="/community">Community</Link>
        </div>
        <button className= "text-white button p-3 basis-2/12">Connect wallet</button>
        </div>
    )
}