import React from 'react';
import Hero from "../../components/Hero";
import homehero from "../../assets/images/homehero.png";
import BenchmarksSec from "./sections/BenchmarksSec";
import AboutHome from "./sections/AboutHome";
import HandSelected from "./sections/HandSelected";
import Strategic from "./sections/Strategic";
import Future from "./sections/Future";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero 
        bg={homehero}
        title={"Redefining the Horizon of Modern Luxury Living"}
        desc={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"}
        btncontent={"Explore"}
        btn={true}
        icons={true}
      />

      <div className="w-full">
        <BenchmarksSec/>
        <AboutHome/>
        <HandSelected/>
        <Strategic/>
        <Future/>
      </div>
    </div>
  );
}