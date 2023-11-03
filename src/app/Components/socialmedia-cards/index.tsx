'use client';
import React, { useRef, useState } from 'react';
import { CustomContainer } from '../Banner/styles';
import Box from '@mui/material/Box';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { ScTitle, SwipeCardWarp, ScSub, ScPara } from '../Swipecard/styles';
import { IcnWarpTop } from './styles';
import { GitLink } from '../Contact/styles';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaCards = () => {
  return (
    <>
      <CustomContainer>
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
          <SwiperSlide>
            <SwipeCardWarp>
              <IcnWarpTop>
                <InstagramIcon sx={{ color: '#fff' }} />
              </IcnWarpTop>

              <ScTitle>INSTAGRAM</ScTitle>
              
            </SwipeCardWarp>
          </SwiperSlide>
        </Swiper>
      </CustomContainer>
    </>
  );
};

export default SocialMediaCards;
