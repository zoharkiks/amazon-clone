import React from "react";
import { Button } from "../components";
import { images } from "../constants";


const Hero = () => {
  return (
    <div className="mt-10 w-full px-4 font-proxima md:ml-[25%] lg:ml-[15%] ">
      <div className="flex grid-cols-2 flex-col rounded-lg bg-gray px-6  py-10 lg:grid  lg:px-20">
        <div className="flex flex-col space-y-5  lg:space-y-10 ">
          <h1 className=" font-proximaSemibold text-2xl text-black">Shop</h1>
          <h1 className=" font-proximaExtrabold text-3xl lg:text-[4rem]">Toys & Games</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat,
            architecto esse quae ipsa adipisci.
          </p>
          <Button background="bg-orange" title="Shop Now"  />
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <img
            className="h-1/2 w-1/2 lg:h-full "
            src={images.hero1.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
