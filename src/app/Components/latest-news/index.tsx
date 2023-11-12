import React from "react";
import { CustomContainer } from "../Banner/styles";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { GitLink } from "../Contact/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Contact } from "../Contact/constant";
import { IcnWrap } from "../List-Cards/styles";
import Link from "next/link";
import { LinkTag } from "./styles";
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
            Latest News
          </Typography>

          <LinkTag href="#" className="links_target">
            <IcnWrap className="sb_icn sb_icn_sm">
              <ArrowForwardIcon />
            </IcnWrap>
            See All
          </LinkTag>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Latestnews;
