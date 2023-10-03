import React from 'react';
import { AboutBIgTxt, AboutCard, AboutTopTxt, AboutSubTxt } from './styles';
import { AboutTitle } from './constant';

const About = () => {
  return (
    <div>
      <AboutCard>
        <AboutTopTxt>{AboutTitle.ABOUT}</AboutTopTxt>

        <AboutBIgTxt variant="h3">
          {AboutTitle.BRINGING_FASHION_BRANDS_TO_LIFE}
        </AboutBIgTxt>

        <AboutSubTxt>{AboutTitle.DUMMY_TEXT}</AboutSubTxt>
        <AboutSubTxt>{AboutTitle.DUMMY_TEXT}</AboutSubTxt>

      </AboutCard>
    </div>
  );
};

export default About;
