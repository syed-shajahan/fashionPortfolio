"use client";
import { CustomContainer } from "../Banner/styles";
import Box from "@mui/material/Box";
import { ScTitle, SwipeCardWarp, ScSub, ScPara } from "./styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
export interface ICardData{
  title: string,
  para: string,
  sub: string,
  id:number
}

export interface ICardDataProps {
  CardData : ICardData[];
}
const SwibeCardSec:React.FC<ICardDataProps> = ({CardData}) => {
  return (
    <div>
      <CustomContainer sx={{ marginBottom: "20px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            freeMode={true}
            speed={1000}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {CardData.map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <SwipeCardWarp>
                    <ScTitle>{e.title}</ScTitle>
                    <ScPara>{e.para}</ScPara>
                    <ScSub href="#">
                      {e.sub}
                      <Box
                        component="span"
                        sx={{ marginLeft: "4px", verticalAlign: "middle" }}
                      >
                        <ArrowRightIcon />
                      </Box>
                    </ScSub>
                  </SwipeCardWarp>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </CustomContainer>
    </div>
  );
};

export default SwibeCardSec;
