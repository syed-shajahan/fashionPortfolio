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
import { Box
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                                                                                                                                                                                                                                                                                                                                                        , Grid, TextField } from '@mui/material';
import Image from 'next/image';
import {NewsLetterTitles} from './constant'
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
              <Grid item xs={9}>
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
                      <LetterTittleMin variant="h6">{NewsLetterTitles.TOP_TITLE}</LetterTittleMin>
                      <LetterTittle variant="h3">
                        {NewsLetterTitles.TOP_TITLE}
                      </LetterTittle>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ flexGrow: 1 }}>
                  <form onSubmit={handleSubmit} className='nlForm'>
                    <TextField
                      fullWidth
                      margin="normal"
                      value={formData.Email}
                      onChange={handleChange('Email')}
                      placeholder="YOUR EMAIL"
                      className='nLinput'
                    />
                    <NBtn type="submit" >
                        {NewsLetterTitles.SUBSCRIBE}
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
