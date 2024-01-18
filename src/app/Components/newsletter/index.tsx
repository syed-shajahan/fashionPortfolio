'use client';

import React, { useState } from 'react';
import { CustomContainer } from '../Banner/styles';
import {
  LetterTittle,
  LetterTittleMin,
  NBtn,
  NewLetterImg,
  NewSec,
} from './styles';
import { Box, Button, Grid, TextField } from '@mui/material';
import Image from 'next/image';
const NewsLetterSec = () => {
  const [formData, setFormData] = useState({
    Email: '',
  });

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <>
      <CustomContainer>
        <NewSec>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems={'center'}>
              <Grid item xs={8}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={2}>
                      <NewLetterImg>
                        <Image
                          src="/assets/images/nl.jpg"
                          alt=""
                          width={163}
                          height={163}
                        />
                      </NewLetterImg>
                    </Grid>
                    <Grid item xs={10}>
                      <LetterTittleMin variant="h6">NEWSLETTER</LetterTittleMin>
                      <LetterTittle variant="h3">
                        GET INSIGHTS BEHIND THE SCENES
                      </LetterTittle>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ flexGrow: 1 }}>
                  <form onSubmit={handleSubmit} className='nlForm'>
                    <TextField
                      label="YOUR EMAIL"
                      fullWidth
                      margin="normal"
                      value={formData.Email}
                      onChange={handleChange('Email')}
                      placeholder="YOUR EMAIL"
                      className='nLinput'
                    />
                    <NBtn type="submit" >
                      SUBSCRIBE
                    </NBtn>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </NewSec>
      </CustomContainer>
    </>
  );
};

export default NewsLetterSec;
