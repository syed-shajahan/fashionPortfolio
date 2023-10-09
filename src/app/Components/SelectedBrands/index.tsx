'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import {
  BannerImgContent,
  CustomContainer,
  BannerCard,
} from '../Banner/styles';
import Box from '@mui/material/Box';
import { BanContent, Minilogo } from '../List-Cards/styles';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const SelectedBrands = () => {
  return (
    <>
      <CustomContainer sx={{ marginBottom: '20px' }}>
        <Typography variant="h3" className="titleTag">
          Selected Brands
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            freeMode={true}
            speed={1500}
            loop={false}
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
                <BannerImgContent
                  src="/assets/images/manpose.png"
                  layout="fill"
                  alt="model"
                />
                <BanContent>
                  <Minilogo
                    src="/assets/images/minilogo.svg"
                    width={14}
                    height={24}
                    alt="model"
                  />
                  <Typography variant="h5" color="initial" className="headTitle">
                    FASHION
                  </Typography>
                  <Typography variant="body1" color="initial" className="paras">
                    Bringing Your Fashion Brands Unique Identity to Life Through
                    Strategic Marketing and Advertising.
                  </Typography>
                </BanContent>
              </BannerCard>
            </SwiperSlide>
          </Swiper>
        </Box>
      </CustomContainer>
    </>
  );
};

export default SelectedBrands;
