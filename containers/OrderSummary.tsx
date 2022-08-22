import React from "react";
import { useSelector } from "react-redux";
import { Button, OrderCard } from "../components";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cartItems.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price.raw * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
console.log(getTotal().totalPrice);

  return (
    <div className="h-screen px-4 py-5">
      <h1 className="w-full font-proximaExtrabold text-2xl  md:text-center lg:text-[2rem]">
        ORDER SUMMARY
      </h1>

      {cartItems.length == 0 ? (
        <h1 className="mt-8 w-full font-proximaSemibold text-xl md:text-center lg:text-[2rem]">
          No items in cart
        </h1>
      ) : (
        <div className=" md:grid grid-cols-2 justify-center ">

          <div className="md:ml-[35%]">
          {cartItems.map((item) => (
            <div key={item.id} className="flex  justify-center">
              <OrderCard
                key={item.id}
                image={item.image.url}
                title={item.name}
                price={item.price.formatted_with_symbol}
                quantity={item.quantity}
                id={item.id}
              />
            </div>
          ))}
          </div>
          
<div className="
md:flex md:justify-end
">
   <div className="mt-10 flex flex-col  space-y-2 rounded-lg bg-lightGray px-10 py-6 md:w-1/2  md:h-max">
            <div className="flex justify-between ">
              <h3 className=" font-proximaSemibold">Total</h3>
              <h3 className=" font-proximaBold">$ {getTotal().totalPrice}</h3>
            </div>
            <div className="flex justify-between ">
              <h3 className=" font-proximaSemibold">Total Items</h3>
              <h3 className=" font-proximaBold">{getTotal().totalQuantity}</h3>
            </div>
{/* 
            <div className="flex justify-between ">
              <h3 className=" font-proximaSemibold">Discount</h3>
              <h3 className=" font-proximaBold">$10</h3>
            </div>

            <div className="mt-20 flex justify-between">
              <h3 className=" font-proximaSemibold ">Total</h3>
              <h3 className=" font-proximaBold">$75</h3>
            </div> */}

            <Button
              title="Checkout"
              background="bg-orange w-full text-center"
            />
          </div>

</div>
       
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
