import React from "react";
import { Box } from "@mui/material";
import  {ImgTags}  from "./styles";

import { CustomContainer } from "../Banner/styles";

const BrandSection = () => {
const BrandLogos=[
    {Images:"/assets/brandLogos/l-1.png"},
    {Images:"/assets/brandLogos/l-2.png"},
    {Images:"/assets/brandLogos/l-3.png"},
    {Images:"/assets/brandLogos/l-4.png"},
    {Images:"/assets/brandLogos/l-5.png"},
    {Images:"/assets/brandLogos/l-6.png"}
]

  return (
    <>
    <CustomContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding:"20px"
        }}
      >

        {
            BrandLogos.map((e:any , index)=>{
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
