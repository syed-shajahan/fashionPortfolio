import React from 'react';
import { CustomContainer } from '../Banner/styles';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { GitLink } from '../Contact/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Contact } from '../Contact/constant';
const Latestnews = () => {
  return (
    <Box>
      <CustomContainer>
        <Typography variant="h3" className="titleTag">
          Latest News
        </Typography>
        <GitLink href="#">
          <ArrowForwardIcon />
          SEE ALL
        </GitLink>
      </CustomContainer>
    </Box>
  );
};

export default Latestnews;
