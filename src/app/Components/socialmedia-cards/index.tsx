'use client';
import React, { useRef, useState } from 'react';
import { CustomContainer } from '../Banner/styles';
import Box from '@mui/material/Box';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { ScTitle, SwipeCardWarp, ScPara } from '../Swipecard/styles';
import { IcnWarpTop, SwipeCardSec } from './styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IcnWrap } from '../List-Cards/styles';
import Image from 'next/image';

interface ISocialProps{
  title:string;
  para:string;
  id:number;
  image:string;
}

interface ISocialData{
  socialData:ISocialProps[];
}


const SocialMediaCards:React.FC<ISocialData> = ({socialData}) => {
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
            {socialData.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <SwipeCardWarp sx={{ maxHeight: '260px !important' }}>
                    <IcnWarpTop>
                      <Image src={data.image} alt="" width={20} height={20} />
                      <IcnWrap className="sb_icn sb_icn_sm">
                        <ArrowForwardIcon />
                      </IcnWrap>
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
