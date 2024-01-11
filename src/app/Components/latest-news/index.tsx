import React, { FC } from 'react';
import { CustomContainer } from '../Banner/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IcnWrap } from '../List-Cards/styles';
import { BlogCards, BlogCardsWarp, LinkTag } from './styles';
import { LatestNews } from './constants';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { ScPara, ScTitle } from '../Swipecard/styles';

export interface ILatestNewsProps {
  image: string;
  title: string;
  para: string;
  id: number;
}

interface ILatestNewsPropsData {
  LatestNewsData:  ILatestNewsProps[];
}

const Latestnews: FC<ILatestNewsPropsData>= ({ LatestNewsData }) => {
  return (
    <Box>
      <CustomContainer>
        <Box>
          <Box
            className="titelWarp"
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          > 
            <Typography variant="h3" className="titleTag">
              {LatestNews.LATEST_NEWS}
            </Typography>

            <LinkTag href="#" className="links_target">
              <IcnWrap className="sb_icn sb_icn_sm  sb_icn_sm2">
                <ArrowForwardIcon className="rotate_icn" />
              </IcnWrap>
              {LatestNews.SEE_ALL}
            </LinkTag>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {  LatestNewsData.map((newData, index)=>{
                return(
                  <Grid item lg={4} key={index}>
                  <BlogCardsWarp>
                    <BlogCards>
                      <Image
                        className="img_aspect"
                        src={newData.image}
                        alt=""
                        layout="fill"
                      />
                    </BlogCards>
                    <Box>
                      <ScTitle>{newData.title}</ScTitle>
                      <ScPara className="scParaMb">{newData.para}</ScPara>
                    </Box>
  
                    <LinkTag href="#" className="links_target">
                      <IcnWrap className="sb_icn sb_icn_sm  sb_icn_sm2">
                        <ArrowForwardIcon className="rotate_icn" />
                      </IcnWrap>
                      READ MORE
                    </LinkTag>
                  </BlogCardsWarp>
                </Grid>
                )
                 
                })
              }

       
                        </Grid>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Latestnews;
