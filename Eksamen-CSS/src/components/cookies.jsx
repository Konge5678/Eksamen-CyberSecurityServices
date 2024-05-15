import React, { useState, useEffect } from 'react';

function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem('cookieConsentStatus');
    if (consentStatus === 'accepted') {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsentStatus', 'accepted');
    setAccepted(true);
  };

  const handleDecline = () => {
    // for å avvise cookies
    setAccepted(true); 
  };

  const handleManage = () => {
    // for redigering av cookies
  };

  if (accepted) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 p-2">
      <div className="bg-white p-8 rounded shadow-lg text-center w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className='text-4xl mb-6 mt-4'>Vi bruker informasjons­kapsler</h1>
        <p className="mb-4 text-lg">
          For å gi deg en god opplevelse og sørge for at alt fungerer som det skal på nettsidene våre, bruker vi informasjonskapsler. På denne måten kan vi forbedre nettsidene og vise deg mer relevant innhold og markedsføring. Du kan alltid endre valgene dine og lese mer om informasjonskapsler <a href="https://www.gjensidige.no/godtforberedt/content/cookies" className="text-blue-500 hover:underline">her</a>.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center mx-4">
          <button 
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded flex-grow mb-2 sm:mb-0"
            onClick={handleManage}
          >
            Endre
          </button>
          <button 
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded flex-grow mx-2 mb-2 sm:mb-0 sm:mx-2"
            onClick={handleDecline}
          >
            Avslå
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-grow"
            onClick={handleAccept}
          >
            Godta
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;