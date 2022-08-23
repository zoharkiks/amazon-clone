import React from "react";
import { useDispatch } from "react-redux";
import { images } from "../constants";
import Button from "./Button";

// reducers
import {
  decrementQuantity,
  increaseQuantity,
  removeItem,
} from "../redux/cartSlice";
import { Icon } from "@iconify/react";

const OrderCard = ({
  image,
  title,
  price,
  quantity,
  id,
}: {
  image: string;
  title: string;
  price: string;
  quantity: number;
  id: string;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-10 flex w-full justify-center space-x-10 rounded-lg bg-lightGray px-3 py-4   md:w-full ">
      <div className="h-1/ flex w-1/2 justify-start   ">
        <img className="max-h-32 " src={image} alt="" />
      </div>
      <div className="flex flex-col justify-between w-1/2 ">
        <h2 className="font-proximaSemibold  mb-2  text-xl lg:text-[2rem]">{title}</h2>
        <div className="flex justify-between items-center space-x-4">
          <span>{price}</span>
          <div className="flex items-center justify-between  space-x-2">
            {quantity === 1 ? (
              <Icon
                onClick={() => dispatch(removeItem(id))}
                className=" h-5 w-5 cursor-pointer"
                icon="fluent:delete-24-regular"
              />
            ) : (
              <Button
                onClick={() => dispatch(decrementQuantity(id))}
                title="-"
                background="bg-orange rounded-lg px-2 py-1"
              />
            )}
            <span className="">{quantity}</span>
            <Button
              onClick={() => dispatch(increaseQuantity(id,1))}
              title="+"
              background="bg-orange rounded-lg px-2 py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
