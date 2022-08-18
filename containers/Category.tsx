import React from 'react'
import { useSelector } from 'react-redux';
import { CategoryCard } from '../components'

// Import Swiper Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";


const Category = () => {

  const categories = useSelector(state => state.category?.allCategories?.data);



  return (
    <div className='mt-20 flex flex-col items-center space-y-3 px-4 md:ml-[25%] lg:ml-[15%]'>

<h1 className="font-proximaExtrabold text-2xl lg:text-[2rem]">
        Shop By Category
      </h1>

      <div className="flex w-full">
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
            },
            1336: {
              slidesPerView: 3,
              spaceBetween: 100,

            },
          }}
        >
          {categories?.map((category) => (
            <SwiperSlide key={category?.id}>
              <div key={category?.id} className="flex">
                <CategoryCard
                  key={category?.id}
                  // desc={category.description.slice(3, -4)}
                  // price={category.price.formatted_with_symbol}
                  image={category.assets[0].url}
                  title={category.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}

export default Category