import React from "react";
import Image from "../Image/Image";
export default function Card({location, cost, distance, availability,frame, star}){
    return(
        <div className="p-3 border-solid border-2 border-gray-300 m-5 rounded-lg">
                    <Image images={frame} alt={'picture of location'} className={'w-full'}/>
            <div className="grid grid-cols-2 gap-4 py-3">
                <p>{location}</p>
                <p className="font-bold">{cost}</p>
                <p>{distance}</p>
                <p>{availability}</p>
                <Image images={star} alt={'5 star'}/>
            </div>
        </div>
    )
}