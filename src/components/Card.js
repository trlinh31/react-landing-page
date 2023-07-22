import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Card() {
  return (
    <div className="bg-white w-full px-4 py-[10rem]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full flex flex-col shadow-xl rounded-lg p-4 hover:scale-105 duration-150">
          <img className="w-20 mx-auto mt-[3rem] bg-white" src={Single} alt="/" />
          <h2 className="text-center text-2xl font-bold py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium mt-8">
            <p className="py-2 mx-8">500 GB Storage</p>
            <p className="py-2 mx-8">1 Granted User</p>
            <p className="py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#2980b9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
        </div>
        <div className="w-full flex flex-col shadow-xl rounded-lg p-4 hover:scale-105 duration-150">
          <img className="w-20 mx-auto mt-[3rem] bg-white" src={Double} alt="/" />
          <h2 className="text-center text-2xl font-bold py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium mt-8">
            <p className="py-2 mx-8">500 GB Storage</p>
            <p className="py-2 mx-8">1 Granted User</p>
            <p className="py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#2980b9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
        </div>
        <div className="w-full flex flex-col shadow-xl rounded-lg p-4 hover:scale-105 duration-150">
          <img className="w-20 mx-auto mt-[3rem] bg-white" src={Triple} alt="/" />
          <h2 className="text-center text-2xl font-bold py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium mt-8">
            <p className="py-2 mx-8">500 GB Storage</p>
            <p className="py-2 mx-8">1 Granted User</p>
            <p className="py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#2980b9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
