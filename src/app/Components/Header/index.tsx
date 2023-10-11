"use client";
import React, { useState, useEffect } from "react";
import { CustomToolbar, CustomAppBar, LogoBox, LogoBoxImg } from "./styles";
import NavList from "./NavList";
const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setScrolling(prevScrollPos < currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <CustomAppBar   scrolling={scrolling}>
        <CustomToolbar>
          <LogoBox>
            <LogoBoxImg
              src="/assets/images/logo.png"
              alt="Description of the image"
              width={100}
              height={100}
            />
          </LogoBox>
          <NavList />
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
};

export default Header;
