"use client"
import styled from '@mui/system/styled';
import Link from 'next/link';


export const LinkTag= styled(Link)(()=>({
    display:"flex",
    alignItems:"center",
    color: "rgba(255, 255, 255, 0.70)",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "0.96px",
    textDecoration:"none",
    "& sb_icn":{
        marginRight:"10px !important",
    }
}))
