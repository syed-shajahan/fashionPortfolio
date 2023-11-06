'use client';
import React, { useRef, useState } from 'react';
import { CustomContainer } from '../Banner/styles';
import Box from '@mui/material/Box';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { ScTitle, SwipeCardWarp, ScSub, ScPara } from '../Swipecard/styles';
import { IcnWarpTop, SwipeCardSec } from './styles';
import { GitLink } from '../Contact/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import socialData from './data.json';

const SocialMediaCards = () => {
  return (
    <>
      <CustomContainer>
        <SwipeCardSec>
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
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
            {socialData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <SwipeCardWarp sx={{ maxHeight: '250px !important' }}>
                    <IcnWarpTop>
                      <InstagramIcon sx={{ color: '#fff' }} />
                    </IcnWarpTop>
                    <Box>
                      <ScTitle>{data.title}</ScTitle>
                      <ScPara>{data.para}</ScPara>
                    </Box>
                  </SwipeCardWarp>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwipeCardSec>
      </CustomContainer>
    </>
  );
};

export default SocialMediaCards;
