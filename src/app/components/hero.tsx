import React from "next/image";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-auto bg-white px-6 pt-10">
      {/* Text Section */}
      <div className="max-w-lg text-left">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Clothes That Matches Your Style
        </h1>
        <p className="text-gray-600 mb-6">
          Browse through our diverse range of meticulously crafted garments, 
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="ml-10 mt-[-50px] relative w-[1000px] h-[400px]">
        <Image 
          src="/clothes-model.png" 
          alt="Stylish clothing models" 
          layout="fill" // This ensures the image fills the container
          objectFit="cover" // This ensures the image covers the container while maintaining its aspect ratio
          className="rounded-lg"
        />
      </div>
    </div>
  );
}