"use client"

import Image from "next/image";
import React from 'react';
import styled from '@mui/system/styled';

export  const ImgTags = styled(Image)(()=>({
position:"relative",
width:"100% !important",
height:"100% !important",
ObjectFit:"contain"
}));