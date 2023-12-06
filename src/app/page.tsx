import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import SwibeCardSec from "./Components/Swipecard";
import BrandSection from "./Components/BrandsSec";
import GridSec from "./Components/GridSection";

// data passed from below
import  CardData from "./Components/Swipecard/swipeCards.json"
import SelectedBrands from "./Components/SelectedBrands";
import ContactCard from "./Components/Contact";
import FolowusStrip from "./Components/FollowusStrip";
import SocialMediaCards from "./Components/socialmedia-cards";
import Latestnews from "./Components/latest-news";
import BrandLogos from "./Components/BrandsSec/data.json";
import SocialData from './Components/socialmedia-cards/data.json';
import DummyTest from "./Components/dummy/index";


const Data={
  CardData,
  BrandLogos,
  SocialData
}

export default function Home() {


  return (
    <>
    {/* <DummyTest /> */}
      <Header />
      <Banner/>
      <SwibeCardSec CardData={Data.CardData} />
      <BrandSection brandLogos={Data.BrandLogos}/>
      <GridSec/>
      <SelectedBrands />
      <ContactCard />
      <FolowusStrip />
      <SocialMediaCards socialData={Data.SocialData}/>
      <Latestnews />
    </>
  );
}
