"use client";
import styled from '@mui/system/styled';
import { Box, Typography } from '@mui/material';

export const FusBoxWarp = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    padding: "10px 0px",
    margin: "24px 0px",
    overflow: "hidden",
    position:"relative",
    "&::before": {
        background: 'linear-gradient(to right, #121212 0%, rgba(0, 0, 0, 0) 100%)',
      content: '" "',
      position: "absolute",
      width: "100px",
      zIndex: 2,
      left:"0px",
      top:"7px",
      height:"100%"
    },

    "&::after": {
        background: 'linear-gradient(to left, #121212 0%, rgba(0, 0, 0, 0) 100%)',
      content: '" "',
      position: "absolute",
      width: "100px",
      zIndex: 2,
      right:"0px",
      top:"7px",
      height:"100%"
    }
  }));
  
export const FusBox = styled(Typography)(() => ({
  color: "rgba(255, 255, 255, 0.70)",
  fontFamily: "Inter, sansherif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "300",
  lineHeight: "normal",
  letterSpacing: "0.96px",
  whiteSpace: "nowrap",
  maxWidth: "283px",
  flexShrink: "0",
  marginRight: "22px",
}));
