"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Toolbar, AppBar } from "@mui/material";
import styled from "@mui/system/styled";
import { List, ListItem } from "@mui/material";

interface ScrollProps{
  scrolling  : boolean;
}

export const CustomAppBar = styled(AppBar)<ScrollProps>(({ theme, scrolling  }) => ({
  position: "fixed",
  width:scrolling  ? "80%" : "100%",
  left: scrolling  ? "60%" : "0px",
  background: "#1212126e",
  padding: "6px 0px",
  display: "flex",
  marginBottom: "15px",
  backdropFilter: "blur(2px)",
  transition:"0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  top: "0",
}));

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1840px",
  margin: "auto",
  padding: "0px 12px",
}));


export const LogoBox = styled(Box)(({ theme }) => ({
  maxWidth: "150px",
  display: "block",
  height: "50px",
}));

export const LogoBoxImg = styled(Image)(({ theme }) => ({
  width: "100%",
  display: "block",
  height: "100%",
  objectPosition: "center",
  objectFit: "contain",
}));

export const NavLinks = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  padding: "10px 15px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  background: "#2B2B2D",
  color: "rgba(255, 255, 255, 0.70)",
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "0.96px",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "0.5s",
  "&:hover": {
    transform: "scale(0.90)",
  },
}));

export const NavLists = styled(ListItem)(({ theme }) => ({
  marginRight: "10px",
  padding: "0px",
}));

export const ListWarp = styled(List)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
