import React from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import location from "../Location/placetostay";
import Image from "../Image/Image";
import setting5 from "../images/setting5.svg";
import Navbar from "../Navbar/Navbar";
import "./PlacetoStay.css"
export default function PlacetoStay(){
    return(
       <div>
        <Navbar/>
        <div className="option flex flex-row justify-around my-16 items-center">
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>Fantast City</p>
            <p>Beach</p>
            <p>Cabins</p>
            <p>Off-grid</p>
            <p>Farm</p>
            <button className="border-solid border-2 border-gray-300 px-5 py-1 rounded-lg">Location
            <Image
                  images={setting5}
                  alt={"setting5"}
                  height={20}
                  width={20}
                  className={"inline ml-3"}
                /></button>
        </div>
        <div className=" m-10 md:grid grid-cols-2 gap-4 lg:grid-cols-4 gap-1">
        {location.map((locations,index)=>{
            return(
                <Card
                key={index}
                location={locations.location}
                frame={locations.image}
                cost={locations.cost}
                availability={locations.availability}
                distance={locations.distance}
                star={locations.stars}
              />
            )
        })}
        </div>
        <Footer/>
       </div> 
    )
}