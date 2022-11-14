import React from "react";
import Image from "../Image/Image";
import FooterLogo from "../images/FooterLogo.svg";
import facebookicon from "../images/facebookicon.svg"
import instagramicon from "../images/instagramicon.svg"
import twittericon from "../images/twittericon.svg"

import "./Footer.css"
export default function Footer(){
    return (
        <div className="footer md:grid grid-cols-4 gap-4 text-white p-8">
            <div>
        <Image
          images={FooterLogo}
          alt={"Logo"}
        />
        <div className="icons flex mt-16">
        <Image
          images={facebookicon}
          alt={"facebookicon"}
          className={"mr-5"}
        />
        <Image
          images={instagramicon}
          alt={"instagramicon"}
          className={"mr-5"}
        />
        <Image
          images={twittericon}
          alt={"twittericon"}
          className={"mr-5"}
        />
        </div>
        <p className="my-5">&copy; 2022 Metabnb</p>
        </div>
        <div>
            <p className="font-bold mb-3 text-lg footerheading">Community</p>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
        </div>
        <div>
            <p className="font-bold mb-3 text-lg footerheading">Places</p>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
        </div>
        <div>
            <p className="font-bold mb-3 text-lg footerheading">About us</p>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>
        </div>
      </div>
    );
}