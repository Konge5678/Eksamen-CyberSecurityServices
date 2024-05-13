import React from "react";
import CSSLogo from "/CSSLogo.png";
import { SocialIcon } from 'react-social-icons';

function Navbar() {
    return (
        <nav className="flex items-center justify-between p-6 px-32 bg-black">
            <div className="ml-5">
                <img className="w-36" src={CSSLogo} alt="Logo" />
            </div>
            <ul className="flex space-x-4">
                <li><a href="#ansatte" className="text-white hover:text-blue-300">Ansatte</a></li>
                <li><a href="#om-oss" className="text-white hover:text-blue-300">Om oss</a></li>
                <li><a href="#kart" className="text-white hover:text-blue-300">Kart</a></li>
            </ul>
            <ul className="flex space-x-4">
                <li><SocialIcon url="http://instagram.com/" bgColor="transparent" fgColor="#00FFCC" style={{ height: 25, width: 25, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://facebook.com/" bgColor="transparent" fgColor="#00FFCC" style={{ height: 25, width: 25, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://twitter.com/" bgColor="transparent" fgColor="#00FFCC" style={{ height: 25, width: 25, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://linkedin.com/" bgColor="transparent" fgColor="#00FFCC" style={{ height: 25, width: 25, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
            </ul>
        </nav>
    )
}

export default Navbar;