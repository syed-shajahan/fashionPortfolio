import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { GridWrapBox, GridWrapImg } from "./styles";
import { CustomContainer } from "../Banner/styles";
import About from "../About";
import ListCards from "../List-Cards";
const GridSec = () => {
  return (
    <>
      <CustomContainer>
        <Box sx={{ flexGrow: 1, margin: "20px 0px" }}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <GridWrapBox>
                <GridWrapImg
                  src="/assets/images/g-1.jpg"
                  layout="fill"
                  alt="fashion"
                />
              </GridWrapBox>
            </Grid>
            <Grid xs={6}>
              <Box>
                <About />
              </Box>
            </Grid>
            <Grid xs={6}>
              <ListCards />
            </Grid>
            <Grid xs={6}>
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
