import React from 'react';
import {
  ListBlock,
  ListItemBlock,
  ListItemTitle,
  ListBlockWarp,
  IcnWrap,
} from './styles';
import { Box } from '@mui/material';
import { AboutSubTxt } from '../About/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ListCards = () => {
  return (
    <>
      <ListBlock>
        <ListItemBlock>
          <ListBlockWarp>
            <Box>
              <ListItemTitle>VIDEO PRODUCTION</ListItemTitle>
              <AboutSubTxt style={{ maxWidth: '536px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AboutSubTxt>
            </Box>
            <IcnWrap>
              <ArrowForwardIcon />
            </IcnWrap>
          </ListBlockWarp>
        </ListItemBlock>

        <ListItemBlock>
          <ListBlockWarp>
            <Box>
              <ListItemTitle>VIDEO PRODUCTION</ListItemTitle>
              <AboutSubTxt style={{ maxWidth: '536px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AboutSubTxt>
            </Box>
            <IcnWrap>
              <ArrowForwardIcon />
            </IcnWrap>
          </ListBlockWarp>
        </ListItemBlock>

        <ListItemBlock>
          <ListBlockWarp>
            <Box>
              <ListItemTitle>VIDEO PRODUCTION</ListItemTitle>
              <AboutSubTxt style={{ maxWidth: '536px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AboutSubTxt>
            </Box>
            <IcnWrap>
              <ArrowForwardIcon />
            </IcnWrap>
          </ListBlockWarp>
        </ListItemBlock>
        
        <ListItemBlock>
          <ListBlockWarp>
            <Box>
              <ListItemTitle>VIDEO PRODUCTION</ListItemTitle>
              <AboutSubTxt style={{ maxWidth: '536px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AboutSubTxt>
            </Box>
            <IcnWrap>
              <ArrowForwardIcon />
            </IcnWrap>
          </ListBlockWarp>
        </ListItemBlock>

        
      </ListBlock>
    </>
  );
};

export default ListCards;
