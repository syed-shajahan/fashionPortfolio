"use client";
import React from "react";
import {Box} from "@mui/material";
import Image from "next/image";
import styled from "@mui/system/styled";

export const CustomContainer = styled(Box)(({theme}) => ({
    display: "block",
    width: "100%",
    maxWidth: "1840px",
    margin: "auto",
    padding: "0px 10px"
}));

export const BannerCard = styled(Box)(({theme}) => ({
    display: "block",
    width: "100%",
    paddingTop: "50%",
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    marginBottom: "22px"
}));

export const BannerImgContent = styled(Image)(({theme}) => ({
    position: "absolute",
    display: "block",
    top: "0px",
    left: "0px",
    width: "100% !important",
    height: "100% !important",
    ObjectFit: "cover",
    objectPosition: "center"
}));
