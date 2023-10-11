'use client';
import React from 'react';
import { ContactDesc, ContactSec, ContactSecFoot, GitLink } from './styles';
import { CustomContainer } from '../Banner/styles';
import { BanContent } from '../List-Cards/styles';
import { Typography , Box} from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Contact } from './constant';


const ContactCard = () => {
  return (
    <div>
      <CustomContainer>
        <ContactSec>
          <Box>
            <Typography variant="h3"  className="banConMiniTitle">CONTACT</Typography>
            <ContactSecFoot>
              <ContactDesc>{Contact.CONTACT_DESC} </ContactDesc>

              <GitLink href="#">
                {Contact.TOUCH}
                <ArrowForwardIcon/>
              </GitLink>
            </ContactSecFoot>
          </Box>
        </ContactSec>
      </CustomContainer>
    </div>
  );
};

export default ContactCard;
