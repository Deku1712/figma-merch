"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import Card from "../Card/Card";
const Carousel = () => {
  return (
    <div className="w-full bg-yellow  pb-[20px] border-b-[4px] border-black">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={2}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <Card
            image="https://store.figma.com/cdn/shop/files/20240619_Figma_Store_4957_1000x.jpg?v=1719341950"
            type={"1"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5256_1000x.jpg?v=1719509034"
            type={"2"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800"
            type={"3"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=800"
            type={"4"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=800"
            type={"5"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
