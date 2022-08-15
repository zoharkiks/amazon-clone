import React from "react";
import { ProductCard } from "../components";

// Import Swiper Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";

const Personalized = () => {
  return (
    <div className="mt-4 flex flex-col items-center space-y-3 px-4 md:ml-[25%] lg:ml-[15%] ">
      <h1 className="font-proximaExtrabold text-2xl lg:text-[2rem]">
        Personalized Reccomendations
      </h1>
      <span className="lg:text-lg">
        Best offers based on your browsing history
      </span>

      <div className="flex w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          loop={true}
          initialSlide={0}
          freeMode={true}
          modules={[FreeMode]}
        //   breakpoints={{
        //     768: {
        //       slidesPerView: 3,
        //     },
        //     1536: {
        //       slidesPerView: 6,
        //     },
        //   }}
        >
          <SwiperSlide>
            <div className="flex ">
              <ProductCard />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Personalized;
