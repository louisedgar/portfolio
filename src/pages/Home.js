import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 bg-opacity-50">
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
