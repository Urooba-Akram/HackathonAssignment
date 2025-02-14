import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

type TopSellerData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const TopSeller = () => {
  const card: TopSellerData[] = [
    {
      id: 1,
      image: "/PolowithContrastTrims.png",
      title: "Polo with Contrast Trims",
      price: "$212",
      priceWas: "$242",
      rating: 4.0,
    },
    {
      id: 2,
      image: "/GradientGraphicT-shirt.png",
      title: "Gradient Graphic T-shirt",
      price: "$145",
      priceWas: "",
      rating: 3.5,
    },
    {
      id: 3,
      image: "/PolowithTippingDetails.png",
      title: "Polo with Tipping Details",
      price: "$180",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 4,
      image: "/BlackStripedT-shirt.png",
      title: "Black Striped T-shirt",
      price: "$120",
      priceWas: "$160",
      rating: 5.0,
    },
  ];

  // Function to calculate the discount percentage
  const calculateDiscount = (price: string, priceWas: string) => {
    if (priceWas) {
      const discount =
        ((parseFloat(priceWas.replace("$", "")) -
          parseFloat(price.replace("$", ""))) /
          parseFloat(priceWas.replace("$", ""))) *
        100;
      return Math.round(discount);
    }
    return 0;
  };

  return (
    <div>
      {/* You might also like Heading */}
      <div className="text-center mt-12 mb-6">
        <h1
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center"
          style={{ textUnderlinePosition: "from-font" }}
        >
          You might also like
        </h1>
      </div>

      {/* Card Section */}
      <div className="w-[90%] border-b-2 border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto">
        {card.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-2 hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="responsive"  // Used layout="responsive" for better image scaling
                width={400}           // Added width for responsiveness
                height={300}          // Added height for responsiveness
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoMdStar
                    key={index}
                    className={`${
                      index < Math.round(item.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    } text-lg`}
                  />
                ))}
              </div>
              <span className="text-sm">{item.rating}/5</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">{item.price}</span>
              {item.priceWas && (
                <>
                  <span className="text-sm line-through text-gray-500">
                    {item.priceWas}
                  </span>
                  <button className="bg-pink-100 text-red-600 text-xs py-1 px-2 rounded-full">
                    {calculateDiscount(item.price, item.priceWas)}% OFF
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Centered View All Button Inside Card Section */}
        <div className="col-span-full flex justify-center mt-8 mb-12">
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;