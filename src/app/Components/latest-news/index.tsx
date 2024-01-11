import React from 'react';
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
const Latestnews = () => {
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
              <Grid item lg={3}>
                <BlogCardsWarp>
                  <BlogCards>
                    <Image
                      className="img_aspect"
                      src="/assets/images/l1.jpg"
                      alt=""
                      layout="fill"
                    />
                  </BlogCards>
                  <Box>
                      <ScTitle>The Power of Influencer Marketing</ScTitle>
                      <ScPara className='scParaMb'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </ScPara>
                  </Box>

                  <LinkTag href="#" className="links_target">
                    <IcnWrap className="sb_icn sb_icn_sm  sb_icn_sm2">
                      <ArrowForwardIcon className="rotate_icn" />
                    </IcnWrap>
                      READ MORE
                  </LinkTag>
                </BlogCardsWarp>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Latestnews;
