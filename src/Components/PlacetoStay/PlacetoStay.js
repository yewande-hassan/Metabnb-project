import React from "react";
import Card from "../Card/Card";
import location from "../Location/placetostay";
import Navbar from "../Navbar/Navbar"
export default function PlacetoStay(){
    return(
       <div>
        <Navbar/>
        <div className="flex flex-row justify-around my-10">
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>Fantast City</p>
            <p>Beach</p>
            <p>Cabins</p>
            <p>Off-grid</p>
            <p>Farm</p>
            <button className="border-solid border-2 border-gray-300 px-5 py-1 rounded-lg">Location</button>
        </div>
        <div className=" md:grid grid-cols-2 gap-4 lg:grid-cols-4 gap-1">
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
       </div> 
    )
}