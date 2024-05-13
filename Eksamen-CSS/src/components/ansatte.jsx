import React from "react";


function Ansatte() {

    const cards1 = [
        { image: './image.jpeg', name: 'Person', job: 'Tittel' },
        { image: './image.jpeg', name: 'Person', job: 'Tittel' },
        { image: './image.jpeg', name: 'Person', job: 'Tittel' },
        { image: './image.jpeg', name: 'Person', job: 'Tittel' },
    ];

    const cards2 = [
        { image: './image.jpeg', name: 'Person', job: 'Tittel' },
        { image: './image.jpeg', name: 'Person', job: 'Tittel' },
        { image: './image.jpeg', name: 'Person', job: 'Tittel' },
    ];
    
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl text-white font-bold text-center mt-20">Ansatte</h1>
            <p className="text-2xl text-gray-300 text-center max-w-2xl mx-auto leading-snug mt-12">Våre ansatte er eksperter innen Cyber Security og vil gi deg veiledingen og verktøyene du trenger for å holde
            bedriften din trygg på nett.</p>
        </div>
            <div className="flex flex-wrap justify-center space-x-7 mt-20">
                {cards1.map((card, i) => (
                    <div key={i} className="border border-gray-300 bg-black rounded-lg p-4 w-80 h-80 flex flex-col items-center m-4" style={{background: 'linear-gradient(to bottom, #102c30, #0b161a)', opacity: 0.8}}>
                        <div className="w-48 h-48 relative mb-4">
                            <img src={card.image} alt={card.name} className="absolute top-0 left-0 w-full h-full rounded-full object-cover"/>
                        </div>
                        <h2 className="text-xl text-white font-bold mb-2">{card.name}</h2>
                        <p className="text-white mb-4">{card.job}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center space-x-7 mt-10">
                {cards2.map((card, i) => (
                    <div key={i} className="border border-gray-300 bg-black rounded-lg p-4 w-80 h-80 flex flex-col items-center m-4" style={{background: 'linear-gradient(to bottom, #102c30, #0b161a)', opacity: 0.8}} >
                        <div className="w-48 h-48 relative mb-4">
                            <img src={card.image} alt={card.name} className="absolute top-0 left-0 w-full h-full rounded-full object-cover"/>
                        </div>
                        <h2 className="text-xl text-white font-bold mb-2">{card.name}</h2>
                        <p className="text-white mb-4">{card.job}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    }

export default Ansatte;