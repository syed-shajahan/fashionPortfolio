"use client";
import Box from "@mui/material/Box";

import Image from "next/image";
import React from "react";
import styled from "@mui/system/styled";

export const GridWrapBox = styled(Box)(() => ({
  position: "relative",
  width: "100% !important",
  paddingTop:"62%",
  overflow:"hidden",
  borderRadius:"16px",
}));

export const GridWrapImg = styled(Image)(() => ({
  position: "absolute",
  width: "100% !important",
  height: "100% !important",
  ObjectFit: "cover !important",
  objectPosition:"center !important",
  top:"0px",
  left:"0px"
}));
