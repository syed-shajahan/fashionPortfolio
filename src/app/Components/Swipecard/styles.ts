"use client";
import React from 'react';
import {Box, Typography} from '@mui/material'; 
import styled from '@mui/system/styled';
import Link from 'next/link';

export const SwipeCardWarp =styled(Box)(({theme})=>({
    borderRadius: "16px",
    background: " #2B2B2D",
    minHeight:"225px",
    padding:"46px 40px",
    width:"100%",
    overflow:"hidden"
}));

export const ScTitle =styled(Typography)(({theme})=>({
    color: '#FFF',
    fontFamily: "Poppins, sans-serif",
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textTransform:"uppercase",
    marginBottom:"12px",
    userSelect:"none",
}));

export const ScPara =styled(Typography)(({theme})=>({
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: "Poppins, sans-serif",
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '23px', 
    marginBottom:"67px",
    userSelect:"none",
}));

export const ScSub =styled(Link)(({theme})=>({
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: "Poppins, sans-serif",
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '23px', 
    textTransform:"uppercase",
    textDecoration:"none"
}));



