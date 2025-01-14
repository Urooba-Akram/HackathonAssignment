import React from "next/image";
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Header from "./components/Header"
import NewArrivals from "./components/newArrivals"
import TopSelling from "./components/topSelling"
import Category from "./components/category"
import Footer from "./components/footer"
import Youmightalsolike from "./components/Youmightalsolike" 

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

