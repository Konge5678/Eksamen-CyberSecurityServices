import React from "react";
import BgImage from "/waves.jpg";

function Background() { 
    return (
        <div className="absolute w-full h-full inset-0 z-negative">
            <img src={BgImage} alt="" className="object-cover w-full h-full" />
        </div>
    )
}

export default Background;