import React from "react";
import { CustomContainer } from "../Banner/styles";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IcnWrap } from '../List-Cards/styles';
import { LinkTag } from './styles';
import { LatestNews } from "./constants";
const Latestnews = () => {
  return (
    <Box>
      <CustomContainer>
        <Box
          className="titelWarp"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h3" className="titleTag">
           {LatestNews.LATEST_NEWS}
          </Typography>

          <LinkTag href="#"  className='links_target'>
            <IcnWrap className="sb_icn sb_icn_sm" style={{marginRight:"17px !important"}}>
              <ArrowForwardIcon />
            </IcnWrap>
            {LatestNews.SEE_ALL}
          </LinkTag>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Latestnews;
