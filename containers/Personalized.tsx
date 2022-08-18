import React from "react";
import { ProductCard } from "../components";


// Import Swiper Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import { useSelector } from "react-redux";

const Personalized = () => {

const products = useSelector(state => state.products?.allProducts?.data);


  return (
    <div className="mt-16 flex flex-col items-center space-y-3 px-4 md:ml-[25%] lg:ml-[15%] ">
      <h1 className="font-proximaExtrabold text-2xl lg:text-[2rem]">
        Personalized Reccomendations
      </h1>
      <span className="lg:text-lg">
        Best offers based on your browsing history
      </span>

      <div className="w-full">
        <Swiper
          spaceBetween={60}
          slidesPerView={1.5}
          loop={false}
          initialSlide={1}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 100,

            },
            1336: {
              slidesPerView: 3.5,

            },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product?.id}>
              <div key={product?.id} className="flex">
                <ProductCard
                  key={product?.id}
                  desc={product.description.slice(3, -4)}
                  price={product.price.formatted_with_symbol}
                  image={product.image.url}
                  id={product}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Personalized;
