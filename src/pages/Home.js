import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
