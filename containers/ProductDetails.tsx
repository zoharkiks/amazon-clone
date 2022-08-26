import React from "react";
import { Button } from "../components";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const ProductDetails = () => {
  return (
    <div className="bg-lightGray px-4 font-proxima ">
      <h1 className=" font-proximaExtrabold">My Amazing Product</h1>
      <div className="">
        <img src={images.hero1.src} alt="" />
      </div>

      <div className="flex flex-col bg-white px-6 space-y-3 py-8 rounded-lg mt-10">
        <h2 className=" font-proximaBold text-2xl">$122.00</h2>
        <div className="flex items-end text-sm ">
        <h3 className="">$6.88 Shipping</h3>
<span className="ml-8 text-deepBlue font-proximaBold">Details</span>
        </div>
        <span className="text-sm opacity-50">Sales tax may apply at checkout</span>
        <div className="flex text-sm items-center space-x-2 " >
          <span className="opacity-50">Delivery</span>
          <span className=" font-proximaBold">Thursday, August 03</span>
        </div>
        <Button
          title="Add To Cart"
          background="!mt-6 bg-white text-orange border-2 border-orange hover:bg-orange transition hover:text-white cursor-pointer w-full text-center px text-white px-3 py-2 rounded-lg font-proximaSemibold"
        />

        <div className="flex items-center justify-between">
          <Button title="Buy Now" background="bg-orange text-white w-[75%] text-center" />
          <Icon
            icon="carbon:favorite"
            className="h-6 w-6 cursor-pointer text-orange"
          />
        </div>
        <div className="flex items-center text-sm justify-between  border-b border-gray w-full " >
          <div className="flex items-center justify-center space-x-1  font-proximaBold opacity-60">
            <Icon icon="ant-design:lock-filled" />
            <span className="">Secure Transaction</span>
          </div>
          <span className="font-proximaBold text-deepBlue">Return Policy</span>
        </div>
        <div className="flex items-center text-sm space-x-4">
          <span className=" opacity-50">Ships From</span>
          <span>Amazon</span>
        </div>
        <div className="flex  text-sm space-x-9" >
          <span className=" opacity-50" >Sold By</span>
          <span>Appario Retailers</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
