import React from "react";
import CSSLogo from "/CSSLogo.png";
import { SocialIcon } from 'react-social-icons';

function Navbar() {
    return (
        <nav className="flex items-center justify-between p-6 px-36 bg-black">
            <div className="ml-5">
                <img className="w-36" src={CSSLogo} alt="Logo" />
            </div>
            <ul className="flex space-x-4">
                <li><a href="#Om-oss" className="text-gray-300 hover:text-blue-300">Om oss</a></li>
                <li><a href="#Ansatte" className="text-gray-300 hover:text-blue-300">Ansatte</a></li>
                <li><a href="#Finn-oss" className="text-gray-300 hover:text-blue-300">Finn oss</a></li>
            </ul>
            <ul className="flex space-x-4">
                <li><SocialIcon url="http://instagram.com/" bgColor="transparent" fgColor="#39ecf3" style={{ height: 35, width: 35, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://facebook.com/" bgColor="transparent" fgColor="#39ecf3" style={{ height: 35, width: 35, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://twitter.com/" bgColor="transparent" fgColor="#39ecf3" style={{ height: 35, width: 35, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
                <li><SocialIcon url="http://linkedin.com/" bgColor="transparent" fgColor="#39ecf3" style={{ height: 35, width: 35, border: "1px solid #00FFCC", borderRadius: "50%" }} /></li>
            </ul>
        </nav>
    )
}

export default Navbar;  