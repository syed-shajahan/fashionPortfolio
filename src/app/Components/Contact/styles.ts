'use client';
import styled from '@mui/system/styled';
import { Box, Link, Typography } from '@mui/material';

export const ContactSec = styled(Box)(() => ({
  width: '100%',
  background: '#CEBD63',
  margin: '24px 0px',
  padding: '62px 121px',
  borderRadius: '16px',
  position: 'relative',
}));

export const ContactSecFoot = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
}));

export const ContactDesc = styled(Typography)(() => ({
  color: ' #202124',
  fontFamily: 'inter , sansherif',
  fontSize: '60px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '76px',
  letterSpacing: '0.60px',
  maxWidth: '760px',
}));

export const GitLink = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  background: '#000',
  textDecoration: 'none',
  padding: '12px',
  borderRadius: '8px',
  backGround: '#202124',
  color: 'rgba(255, 255, 255, 0.70)',
  fontFamily: 'poppins, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '24px',
  letterSpacing: '0.96px',
  maxWidth: '220px',
  transition: '0.3s',
  whiteSpace:"nowrap",
  flexShrink: 0,
  '&:hover': {
    transform: 'scale(0.90)',
    backgroundColor: '#100f0ead',
    '& svg': {
      transform: 'rotate(0deg)',
    },
  },
  '& svg': {
    marginLeft: '10px',
    verticalAlign: 'middle',
    transform: 'rotate(320deg)',
    transition: '0.3s',
  },
}));
