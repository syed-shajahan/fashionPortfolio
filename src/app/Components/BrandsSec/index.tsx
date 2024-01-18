'use client'
import React, { useState, useEffect } from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the translation
  // Adjust the multiplier (-0.5 in this case) to control the speed
  const translateX = -5 * scrollPosition;
  return (
    <>
      <CustomContainer>

        <Box
 style={{ transform: `translateX(${scrollPosition}px)` }}
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
