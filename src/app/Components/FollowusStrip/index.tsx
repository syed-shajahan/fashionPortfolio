import React from 'react';
import { CustomContainer } from '../Banner/styles';
import { FusBox, FusBoxWarp } from './styles';
import follow from './follow.json';
const FolowusStrip = () => {
  return (
    <div>
      <CustomContainer>
        <FusBoxWarp>
          {follow.map((event) => {
            return <FusBox key={event.id}>{event.followTxt}</FusBox>;
          })}
        </FusBoxWarp>
      </CustomContainer>
    </div>
  );
};

export default FolowusStrip;
