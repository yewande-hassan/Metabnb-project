import React from "react";

export default function Image({className, images, alt, height, width}){
    return(
        <>
        <img 
        className={className} 
        src={images} 
        alt={alt} 
        height={height} 
        width={width}/>
        </>
    )
}