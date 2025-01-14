import React from 'react'

export default function Header(){
  return (
    <div className="flex items-center justify-around py-3 bg-black text-white">
      <h1 className="text-lg font-bold cursor-pointer hover:text-gray-400 transition">
        VERSACE
      </h1>
      <h1 className="text-lg font-bold cursor-pointer hover:text-gray-400 transition">
        ZARA
      </h1>
      <h1 className="text-lg font-bold cursor-pointer hover:text-gray-400 transition">
        GUCCI
      </h1>
      <h1 className="text-lg font-bold cursor-pointer hover:text-gray-400 transition">
        PRADA
      </h1>
      <h1 className="text-lg font-bold cursor-pointer hover:text-gray-400 transition">
        Calvin Klein
      </h1>
    </div>
  );
};