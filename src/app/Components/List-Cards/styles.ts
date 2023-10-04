"use client"

import React from 'react';
import {Box, List, Typography} from '@mui/material'; 
import Image from 'next/image';
import styled from '@mui/system/styled';
import ListItem from "@mui/material/ListItem"

export const ListBlock =styled(List)(()=>({
padding:"55px 45px",
borderRadius: "16px",
backgroundColor: "#2B2B2D",
}));

export const ListItemBlock = styled(ListItem)(()=>({
display:"flex",
justifyContent:"space-between",
}));

export const ListItemTitle = styled(Typography)(()=>({

    
}));
    

