import React from "next/image";
import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero"
import Header from "../app/components/Header"
import NewArrivals from "../app/components/newArrivals"
import TopSelling from "../app/components/topSelling"
import Category from "../app/components/category"
import Youmightalsolike from "../app/components/Youmightalsolike"
import Footer from "../app/components/footer" 


export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Header/>
      <NewArrivals/>
      <TopSelling/>
      <Category/>
      <Youmightalsolike/>
      <Footer/>
    </div> 
 )
}

