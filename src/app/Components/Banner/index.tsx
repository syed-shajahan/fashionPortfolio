import React from "react";
import { CustomContainer, BannerCard, BannerImgContent } from "./styles";

const Banner = () => {
  return (
    <div>
      <CustomContainer>
        <BannerCard>
            <BannerImgContent src="/assets/images/bannerimg.png"  layout="fill" alt="model" />
        </BannerCard>
      </CustomContainer>
    </div>
  );
};  

export default Banner;
