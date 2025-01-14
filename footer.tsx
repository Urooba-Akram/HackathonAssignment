import React from "react";
import { IoMdStar } from "react-icons/io";

const HappyCustomers = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      review:
        "Absolutely love the products! The quality is outstanding, and delivery was super fast. Highly recommend this store.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mark S.",
      review:
        "Great service and amazing prices. I've ordered multiple times and have never been disappointed.",
      rating: 4,
    },
    {
      id: 3,
      name: "James K.",
      review:
        "Customer support was helpful and resolved my issue quickly. Products are top-notch as well.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      {/* Testimonials Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">OUR HAPPY CUSTOMERS</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoMdStar
                    key={index}
                    className={`${
                      index < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    } text-lg`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{testimonial.review}</p>
            <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white mt-12 py-8 px-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-2 rounded-lg focus:outline-none text-black"
          />
          <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold">
          Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 py-8 bg-gray-100">
        <div className="flex flex-wrap justify-between items-center gap-8 px-4 sm:px-8 lg:px-16">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-2">SHOP.CO</h3>
            <p className="text-sm text-gray-600">
              The best platform for finding quality products at unbeatable
              prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-2">Support</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Order Status</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Payment Options</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <button className="bg-gray-200 p-2 rounded-full">
                <img
                  src="/facebook-icon.png"
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <img
                  src="/twitter-icon.png"
                  alt="Twitter"
                  className="w-4 h-4"
                />
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <img
                  src="/instagram_icon.png.webp"
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HappyCustomers;