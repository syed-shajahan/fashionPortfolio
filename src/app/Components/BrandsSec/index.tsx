import React from "react";
import { Box } from "@mui/material";
import  {ImgTags}  from "./styles";

import { CustomContainer } from "../Banner/styles";
// import BrandLogos from "./data.json"

interface IBrandLogo{
  Images:string;
}
interface IBrandLogoProps {
  BrandLogos: IBrandLogo[];
}

const BrandSection:React.FC <IBrandLogoProps> = ({BrandLogos}) => {
  return (
    <>
    <CustomContainer>

      <Box  
      className="scrollAnimation"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding:"20px"
        }}
      >
       
        {
            BrandLogos.map((e , index)=>{
                return(
                    <Box key={index} sx={{position:"relative", width:"200px",overFlow:"hidden", height:"40px"}}>
                    <ImgTags src={e.Images}   width={100} height={100} alt="logo" style={{objectFit:"contain"}} />
                    </Box>
                )
            })
        }

      </Box>
    </CustomContainer>
    </>
  );
};

export default BrandSection;
