import React from "react";
import Image from "../Image/Image";
import MBToken from "../images/MBToken.svg"
import MetaMask from "../images/MetaMask.svg"
import OpenSea from "../images/OpenSea.svg"
import "./LandingPageLocation.css";
import locations from "../Location/locations"
import Card from "../Card/Card";
export default function LandingPageLocation(){
    return(
        <div className="">
            <div className="flex flex-col p-3 md:flex-row header">
                <span className={'flex m-auto p-3'} ><Image images={MBToken} alt={'MBToken'} height={50} width={50}/>
                <p className="paragraph">MBToken</p></span>
                <span className={'flex m-auto p-3'} ><Image images={MetaMask} alt={'MBToken'}  height={50} width={50}/> 
                <p className="paragraph">MetaMask</p>
                </span>
                <span className={'flex m-auto p-3'} ><Image images={OpenSea} alt={'MBToken'} className={'m-auto'} height={50} width={50}/>
                <p className="paragraph">OpenSea</p>
                </span>
            </div>
            <div>
                <h3 className="heading">Inspiration for your next adventure</h3>
                <div className=" md:grid grid-cols-2 gap-4 lg:grid-cols-4 gap-1">
                {locations.map((frames,index)=>{
                    return(
                        <Card key={index} location={frames.location} frame={frames.image} cost={frames.cost} availability={frames.availability} distance={frames.distance} star={frames.stars}/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}