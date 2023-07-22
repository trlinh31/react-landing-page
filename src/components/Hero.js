import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen text-center flex flex-col justify-center mx-auto">
        <p className="text-[#2980b9] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">Grow with data.</h1>
        <div>
          <p className="md:text-3xl sm:text-2xl text-xl pt-5 font-semibold">
            Fast, flexible financing for
            <Typewriter
              options={{
                strings: ["BTB", "BTC", "SASS"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="py-5 text-gray-600">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
          </p>
          <button className="bg-[#2980b9] px-8 py-2 rounded-md">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
