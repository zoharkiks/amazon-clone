import React from "react";
import { useDispatch } from "react-redux";
import { images } from "../constants";
import Button from "./Button";
import commerce from "../lib/commerce";

// reducers
import { getCart } from "../redux/cartSlice";
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

  const increaseQuantity = () => {
    commerce.cart
      .update(id, { quantity: quantity + 1 })
      .then(dispatch(getCart()));
  };

  const decreaseQuantity = () => {
    commerce.cart
      .update(id, { quantity: quantity - 1 })
      .then(dispatch(getCart()));
  };

  const removeItem = () => {
    commerce.cart.remove(id).then(dispatch(getCart()));
  };

  return (
    <div className="mt-10 flex w-full justify-center space-x-10 rounded-lg bg-lightGray px-3 py-4   md:w-full ">
      <div className="h-1/ flex w-1/2 justify-start   ">
        <img className="max-h-32 " src={image} alt="" />
      </div>
      <div className="flex w-1/2 flex-col justify-between ">
        <h2 className="mb-2  font-proximaSemibold  text-xl lg:text-[2rem]">
          {title}
        </h2>
        <div className="flex items-center justify-between space-x-4">
          <span>{price}</span>
          <div className="flex items-center justify-between  space-x-2">
            {quantity === 1 ? (
              <Icon
                onClick={() => removeItem()}
                className=" h-5 w-5 cursor-pointer"
                icon="fluent:delete-24-regular"
              />
            ) : (
              <Button
                onClick={() => decreaseQuantity()}
                title="-"
                background="bg-orange rounded-lg px-2 py-1"
              />
            )}
            <span className="">{quantity}</span>
            <Button
              onClick={() => increaseQuantity()}
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
