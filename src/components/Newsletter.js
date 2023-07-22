import React from "react";

function Newsletter() {
  return (
    <div className="w-full bg-black py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
        <div className="my-4">
          <h1 className="font-bold sm:text-xl text-xl md:text-2xl pb-1">Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              className="outline-none rounded-md p-2 text-black w-full"
              placeholder="Enter your email"
            />
            <button className="my-2 ml-4 bg-[#2980b9] w-[160px] py-2 px-5 rounded-md">Notify Me</button>
          </div>
          <p>
            We care bout the protection of your data. Read our <span className="text-[#2980b9]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
