import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white p-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto" />
        <div className="flex flex-col justify-center">
          <p className="text-[#2980b9] text-left font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-3xl font-bold py-4">Manage Data Analytics Centrally</h1>
          <p className="pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex
            deserunt fuga?
          </p>
          <button className="bg-black text-[#2980b9] py-2 w-[160px] mx-auto rounded-xl font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
