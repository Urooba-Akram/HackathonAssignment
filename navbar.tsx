import React from "react";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";


export default function navbar(){
    return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
    <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full">
        <div className='text-center flex-1'>
        Sign up and get 20% off to your first order. 
<a href="#" className='underline hover-text-slate-300'>
    {"  "} 
    Sign Up Now {" "}
     </a>
  </div>

  <div className="flex items-center gap-[2px]">
    <div className="text-white text-sm font-normal leading-[21px]">
    </div>
    <RxCross2  className="text-white text-3x1" />
  </div>
  </div>
{/* Main navigation*/}
  <div className="flex justify-between items-center px-8 py-4">
    <h1 className="text-2xl font-bold text-black px-16">SHOP.CO</h1>

    <nav className="hidden md:flex space-x-8 items-center">
        <a href="#" className="text-slate-600 hover:text-black"> Shop</a>
        <a href="#" className="text-slate-600 hover:text-black"> On Sale</a>
        <a href="#" className="text-slate-600 hover:text-black"> New Arrivals</a>
        <a href="#" className="text-slate-600 hover:text-black"> Brands</a>
    </nav>

{/* search icons*/}

<div className="flex items-center space-x-6">
    <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
         <CiSearch />
        <input type="text"
        placeholder="Search for products..." 
        className="bg-slate-100 outline-none text-sm"/>
          </div>
        <IoCartOutline />
        <IoIosContact />
</div>

</div>
        </header>
    )
}