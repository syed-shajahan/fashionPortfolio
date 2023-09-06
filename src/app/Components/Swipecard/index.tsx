"use client";
import { CustomContainer } from "../Banner/styles";
import Box from "@mui/material/Box";
import { ScTitle, SwipeCardWarp, ScSub, ScPara } from "./styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import React, { useRef, useState } from "react";

import SwiperCheckl from "./SwiperCheckl";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const SwibeCardSec = () => {
  const CardData = [
    {
      title: "BRANDING",
      para: "Develop a strong, recognizable fashion brand identity.",
      sub: "ABOUT BRANDING",
    },
    {
      title: "IDENTITY",
      para: "We create a unique and consistent image for your fashion brand.",
      sub: "ABOUT IDENTITY",
    },
    {
      title: "MARKETING",
      para: "Reach and engage your target audience effectively on all platforms.",
      sub: "ABOUT MARKETING",
    },
    {
      title: "E-COMMERCE",
      para: "Optimize online sales and drive growth for your e-commerce store.",
      sub: "ABOUT E-COMMERCE",
    },
    {
      title: "BRANDING",
      para: "Develop a strong, recognizable fashion brand identity.",
      sub: "ABOUT BRANDING",
    },
    {
      title: "IDENTITY",
      para: "We create a unique and consistent image for your fashion brand.",
      sub: "ABOUT IDENTITY",
    },
    {
      title: "MARKETING",
      para: "Reach and engage your target audience effectively on all platforms.",
      sub: "ABOUT MARKETING",
    },
    {
      title: "E-COMMERCE",
      para: "Optimize online sales and drive growth for your e-commerce store.",
      sub: "ABOUT E-COMMERCE",
    },
    {
      title: "BRANDING",
      para: "Develop a strong, recognizable fashion brand identity.",
      sub: "ABOUT BRANDING",
    },
    {
      title: "IDENTITY",
      para: "We create a unique and consistent image for your fashion brand.",
      sub: "ABOUT IDENTITY",
    },
    {
      title: "MARKETING",
      para: "Reach and engage your target audience effectively on all platforms.",
      sub: "ABOUT MARKETING",
    },
    {
      title: "E-COMMERCE",
      para: "Optimize online sales and drive growth for your e-commerce store.",
      sub: "ABOUT E-COMMERCE",
    },
    
  ];

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

{CardData.map((e:any, index) => {
              return (
                <SwiperSlide key={index}>
                  <SwipeCardWarp>
                    <ScTitle>{e.title}</ScTitle>
                    <ScPara>{e.para}</ScPara>
                    <ScSub>
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
