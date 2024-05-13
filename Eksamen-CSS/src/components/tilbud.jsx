import React from "react";
import { FaCloudDownloadAlt, FaUserSecret} from "react-icons/fa";
import { BsShieldShaded } from "react-icons/bs";
import { FaUserShield, FaArrowRightLong } from "react-icons/fa6";

function Tilbud() {
    const cards = [
    { icon: <FaCloudDownloadAlt color="#3dd0e0" size="2em" />, header: "Administrert deteksjon og respons", text: "Vi tar nummer 1 programvaren for forebygging av brudd, CrowdStrike, og kobler den sammen med 100 % amerikanske trusseljakt- og responstjenester 24x7x365..." },
    { icon: <FaUserSecret color="#3dd0e0" size="2em"/>, header: "Virtuell CISO", text: "Vi kan fungere som din virtuelle Chief Information Security Officer (vCISO), og bringe spesialisert cybersikkerhetsekspertise til organisasjonen din, utforme et modent cybersikkerhetsprogram, og spesielt reduserer risikoen." },
    { icon: <FaUserShield color="#3dd0e0" size="2em"/>, header: "Penetrasjonstesting", text: "Vårt team for penetrasjonstesting kan identifisere cybersikkerhetssårbarheter før en inntrenger får muligheten til å infiltrere nettverket eller datasystemet ditt. Vi vil avdekke svakheter på" },
    { icon: <BsShieldShaded color="#3dd0e0" size="2em"/>, header: "Cybersikkerhet", text: "Vårt team for penetrasjonstesting kan identifisere cybersikkerhetssårbarheter før en inntrenger får muligheten til å infiltrere nettverket eller datasystemet ditt. Vi vil avdekke svakheter på og innenfor ikke-likeringer" },
];

return (
    <div className="flex flex-wrap justify-center gap-4 mt-20" style={{backgroundImage: 'url("path-to-your-image.jpg")'}}>
        {cards.map((card, i) => (
            <div key={i} className="border border-gray-300 rounded-lg p-4 w-80 h-80 flex flex-row" style={{background: 'linear-gradient(to bottom, #102c30, #0b161a)', opacity: 0.8}}>
                <div className="bg-gray-700 rounded-full p-2 h-12 w-12 flex items-center justify-center mb-4 mr-4">
                    {card.icon}
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-xl text-white font-bold mb-2">{card.header}</h2>
                        <p className="text-white mb-4">{card.text}</p>
                    </div>
                    <a href="#" className="flex justify-between text-blue-500 hover:underline">
                        Read more 
                        <FaArrowRightLong />
                    </a>
                </div>
            </div>
        ))}
    </div>
);
}

export default Tilbud;