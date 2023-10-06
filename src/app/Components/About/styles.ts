"use client";
import React from "react";
import styled from "@mui/system/styled";
import {Box, Typography} from "@mui/material";

export const AboutCard = styled(Box)(() => ({
    position: "relative",
    width: "100% !important",
    padding: "68px",
    ObjectFit: "contain",
    background: "#2B2B2D",
    borderRadius: "16px"
}));

export const AboutTopTxt = styled(Typography)(() => ({
    color: "rgba(255, 255, 255, 0.70)",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "21px",
    letterSpacing: "0.96px",
    marginBottom: "213px"
}));

export const AboutBIgTxt = styled(Typography)(() => ({
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "100",
    lineHeight: "52px",
    letterSpacing: "2.4px",
    maxWidth: "427px",
    marginBottom: "14px"
}));

export const AboutSubTxt = styled(Typography)(() => ({
    color: "rgba(255, 255, 255, 0.70)",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "21px",
    letterSpacing: "0.96px",
    marginBottom: "10px"
}));
