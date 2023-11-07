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
export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <SwibeCardSec CardData={CardData} />
      <BrandSection/>
      <GridSec/>
      <SelectedBrands />
      <ContactCard />
      <FolowusStrip />
      <SocialMediaCards />
      <Latestnews />
    </>
  );
}
