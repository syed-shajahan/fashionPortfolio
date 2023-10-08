import React from 'react';
import {
  ListBlock,
  ListItemBlock,
  ListItemTitle,
  ListBlockWarp,
  IcnWrap,
} from './styles';
import { Box } from '@mui/material';
import { AboutSubTxt } from '../About/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export interface IlistDatas {
  id: number;
  list_Title: string;
  list_desc: string;
}
export interface IcardListProps{
  listData: IlistDatas[];
}

const ListCards:React.FC<IcardListProps>=({listData}) => {
  return (
    <>
      <ListBlock>
        {listData.map((e) => (
          <ListItemBlock key={e.id}>
            <ListBlockWarp>
              <Box>
                <ListItemTitle>{e.list_Title}</ListItemTitle>
                <AboutSubTxt style={{ maxWidth: '536px' }}>
                  {e.list_desc}
                </AboutSubTxt>
              </Box>
              <IcnWrap>
                <ArrowForwardIcon />
              </IcnWrap>
            </ListBlockWarp>
          </ListItemBlock>
        ))}
      </ListBlock>
    </>
  );
};

export default ListCards;