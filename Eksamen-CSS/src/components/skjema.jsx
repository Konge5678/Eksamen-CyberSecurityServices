import React from 'react';

function KontaktSkjema() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 text-white" >
      <div style={{ width: '100%', maxWidth: '600px' }}> 
        <form className="space-y-4 mx-auto w-full max-w-md">
          <label className="block text-center">
            Navn:
            <input type="text" name="name" className="mt-1 block mx-auto w-1/2 rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block text-center">
            Email:
            <input type="email" name="email" className="mt-1 block mx-auto w-1/2 rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block text-center">
            Melding:
            <textarea name="message" className="mt-1 block mx-auto w-1/2 rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <div className="text-center">
            <input type="submit" value="Send" className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--500" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default KontaktSkjema;