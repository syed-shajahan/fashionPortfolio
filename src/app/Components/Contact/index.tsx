'use client';
import React from 'react';
import { ContactDesc, ContactSec, ContactSecFoot, GitLink } from './styles';
import { CustomContainer } from '../Banner/styles';
import { BanContent } from '../List-Cards/styles';
import { Typography } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactCard = () => {
  return (
    <div>
      <CustomContainer>
        <ContactSec>
          <BanContent className="BanContentStyle cusmtomBnaContentStyle bg-none">
            <Typography variant="h3">CONTACT</Typography>
            <ContactSecFoot>
              <ContactDesc>LETS MAKE YOUR FASHION BRAND SHINE</ContactDesc>

              <GitLink href="#">
                GET IN TOUCH
                <ArrowForwardIcon />
              </GitLink>
            </ContactSecFoot>
          </BanContent>
        </ContactSec>
      </CustomContainer>
    </div>
  );
};

export default ContactCard;
