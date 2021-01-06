import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
