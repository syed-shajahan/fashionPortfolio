'use client';
import { Box } from '@mui/material';
import styled from '@mui/system/styled';
import Image from 'next/image';
import Link from 'next/link';

export const LinkTag = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  color: 'rgba(255, 255, 255, 0.70)',
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '0.96px',
  textDecoration: 'none',
  '& .rotate_icn': {
    transition: '0.5s',
  },
  '&:hover .rotate_icn': {
    transform: 'rotate(-360deg) !important',
  },
}));

export const BlogCards = styled(Box)(() => ({
  display: 'block',
  position: 'relative',
  width: '100%',
  paddingTop: '77%',
  marginBottom:'22px',
  overflow:'hidden',
  borderRadius:'8px',
  '& img':{
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100% !important',
    heigth: '100% !important',
    objectFit: 'cover',
    objectPosition: 'center',
  }
}));
export const BlogCardsWarp = styled(Box)(() => ({
    position: 'relative',
    width: '100%',
    padding: '22px',
    borderRadius: '16px',
    background: '#2B2B2D',
  }));
  
