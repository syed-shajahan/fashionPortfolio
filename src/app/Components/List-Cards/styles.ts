'use client';

import React from 'react';
import { Box, List, Typography } from '@mui/material';
import Image from 'next/image';
import styled from '@mui/system/styled';
import ListItem from '@mui/material/ListItem';

export const ListBlock = styled(List)(() => ({
  display: 'block',
  width: '100%',
}));

export const ListItemBlock = styled(ListItem)(() => ({
  width: '100%',
  display: 'block',
  borderRadius: '16px',
  padding: '55px 40px',
  transition: '0.3s',
  backgroundColor: '#2B2B2D',
  marginBottom: '20px',
  '  &:hover ': {
    backgroundColor: '#3B3B3D',
    transform: 'translateY(-5px)',
    boxShadow: '0px 20px 25px #0000004d',
    '& $IcnWrap': {
      transform: 'translateY(-10px)',
    },
  },
}));

export const ListBlockWarp = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ListItemTitle = styled(Typography)(() => ({
  color: '#FFF',
  fontFamily: 'Inter',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  textTransform: 'uppercase',
  marginBottom: '13px',
}));

export const IcnWrap = styled(Box)(() => ({
  width: '48px',
  height: '48px',
  flexShrink: '0',
  backgroundColor: '#7A7A7A',
  border: '1px solid #7A7A7A',
  overflow: 'hidden',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: '0.3s',
  '& svg path': {
    fill: '#ffff',
  },
}));

export const BanContent = styled(Box)(() => ({
  width: '100%',
  height: '1000%',
  backgroundColor: '##000000ad',
  display: 'block',
  position: 'absolute',
  left: '0px',
  top: '0px',
  padding:"90px 120px",
}));

export const Minilogo= styled(Image)(()=>({
  width: "79px !important",
  height: "31px !important",
  flexShrink: "0",
  position:"relative"
}));