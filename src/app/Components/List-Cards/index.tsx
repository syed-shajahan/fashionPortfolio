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

export interface IlistDatas{
  list_Title: string;
  list_desc:string;
}

export interface IlistDatasProps{
  listData: IlistDatas[];
}

const ListCards:React.FC<IlistDatasProps>=({listData}) => {
  return (
    <>
      <ListBlock>
        {listData.map((listDatas) => (
          <ListItemBlock key={listDatas.list_Title}>
            <ListBlockWarp>
              <Box>
                <ListItemTitle>{listDatas.list_Title}</ListItemTitle>
                <AboutSubTxt style={{ maxWidth: '536px' }}>
                  {listDatas.list_desc}
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
