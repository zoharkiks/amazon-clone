import React from "react";
import { useSelector } from "react-redux";
import { OrderCard } from "../components";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div className="px-4 py-5">
      <h1 className="font-proximaExtrabold text-2xl lg:text-[2rem]">
        ORDER SUMMARY
      </h1>

      {cartItems.length == 0 ? (
        <h1 className="font-proximaSemibold text-xl lg:text-[2rem]">
          No items in cart
        </h1>
      ) : (
        <div>
          {cartItems.map((item) => (
            <OrderCard
              key={item.id}
              image={item.image.url}
              title={item.name}
              price={item.price.formatted_with_symbol}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
