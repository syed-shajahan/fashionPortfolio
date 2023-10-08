"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { BannerImgContent, CustomContainer , BannerCard} from "../Banner/styles";
import Box from "@mui/material/Box";

const SelectedBrands = () => {
  return (
    <>
    <CustomContainer sx={{ marginBottom: "20px" }}>
        
        <h3>Selected Brands</h3>
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
                slidesPerView: 1,

                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,

                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
                <SwiperSlide>
                  <BannerCard>
                       <BannerImgContent  src="/assets/images/manpose.png"  layout="fill" alt="model" />
                 </BannerCard>
                </SwiperSlide>
                <SwiperSlide>
                  <BannerCard>
                       <BannerImgContent  src="/assets/images/manpose.png"  layout="fill" alt="model" />
                 </BannerCard>
                </SwiperSlide>
                 <SwiperSlide>
                  <BannerCard>
                       <BannerImgContent  src="/assets/images/manpose.png"  layout="fill" alt="model" />
                 </BannerCard>
                </SwiperSlide>
                <SwiperSlide>
                  <BannerCard>
                       <BannerImgContent  src="/assets/images/manpose.png"  layout="fill" alt="model" />
                 </BannerCard>
                </SwiperSlide>
                <SwiperSlide>
                  <BannerCard>
                       <BannerImgContent  src="/assets/images/manpose.png"  layout="fill" alt="model" />
                 </BannerCard>
                </SwiperSlide>
                 <SwiperSlide>
                  <BannerCard>
                       <BannerImgContent  src="/assets/images/manpose.png"  layout="fill" alt="model" />
                 </BannerCard>
                </SwiperSlide>
           
          </Swiper>
        </Box>
      </CustomContainer>
    </>
  )
}

export default SelectedBrands 