import React from "react";
import { Box } from "@mui/material";
import { ImgTags } from "./styles";

import { CustomContainer } from "../Banner/styles";
interface IBrandLogo {
  Images: string;
}
interface IBrandLogoProps {
  brandLogos: IBrandLogo[];
}

const BrandSection: React.FC<IBrandLogoProps> = ({ brandLogos }) => {
  return (
    <>
      <CustomContainer>

        <Box
          className="scrollAnimation"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px"
          }}
        >

          {
            brandLogos.map((e, index) => {
              return (
                <Box key={index} sx={{ position: "relative", width: "200px", overFlow: "hidden", height: "40px" }}>
                  <ImgTags src={e.Images} width={100} height={100} alt="logo" style={{ objectFit: "contain" }} />
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
