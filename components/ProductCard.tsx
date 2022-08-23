import React, { useState } from "react";
import { images } from "../constants";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { addItem, addToCart } from "../redux/cartSlice";

const ProductCard = ({
  desc,
  price,
  image,
  id,
  title,
  quantity
}: {
  desc: string;
  price: string;
  image: string;
  id: string;
  title: string;
  quantity:number
}) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-6 flex flex-col rounded-lg bg-white px-6 py-4 font-proxima lg:mt-8">
      <div className="my-4 flex justify-center">
        <img className=" h-20 w-20" src={image} alt="" />
      </div>
      <div className="flex flex-col space-y-2">
        <span className=" font-proximaExtrabold text-2xl">{price}</span>
        <span className=" font-proximaSemibold text-lg">{title}</span>
        <span className="w-[12rem] truncate   ">{desc}</span>

        <span className="font-proximaBold text-deepBlue">100 Reviews</span>
        <span>
          Get it as soon as{" "}
          <span className="font-proximaBold">Sat, Aug 20</span>
        </span>
      </div>
      <div className="mt-4 flex items-center space-x-20 ">
        <Button
          title="Add to Cart"
          background="bg-white text-orange border-2 border-orange hover:bg-orange transition hover:text-white"
          onClick={() => dispatch(addItem(id))}
        />
        <Icon
          icon="carbon:favorite"
          className="h-6 w-6 cursor-pointer text-orange"
        />
      </div>
    </div>
  );
};

export default ProductCard;
