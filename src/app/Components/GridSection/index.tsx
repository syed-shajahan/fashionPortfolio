import React from "react";                    
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { GridWrapBox, GridWrapImg } from "./styles";
import { CustomContainer } from "../Banner/styles";
import About from "../About";
import ListCards from "../List-Cards";
import listData from "../List-Cards/listCards.json";

const GridSec = () => {
  return (
    <>
      <CustomContainer>
        <Box sx={{ flexGrow: 1, margin: "20px 0px" }}>
          <Grid container spacing={2}>
            <Grid lg={6} md={12} sm={12} xs={12}>
              <GridWrapBox>
                <GridWrapImg
                  src="/assets/images/g-1.jpg"
                  layout="fill"
                  alt="fashion"
                />
              </GridWrapBox>
            </Grid>
            <Grid lg={6} md={12} sm={12} xs={12}>
              <Box>
                <About />
              </Box>
            </Grid>
            <Grid lg={6} md={12} sm={12} xs={12}>
              <ListCards listData={listData} />
            </Grid>
            <Grid lg={6} md={12} sm={12} xs={12}>
              <GridWrapBox sx={{ paddingTop: "97%!important" }}>
                <GridWrapImg
                  src="/assets/images/g-2.jpg"
                  layout="fill"
                  alt="fashion"
                />
              </GridWrapBox>
            </Grid>
          </Grid>
        </Box>
      </CustomContainer>
    </>
  );
};

export default GridSec;