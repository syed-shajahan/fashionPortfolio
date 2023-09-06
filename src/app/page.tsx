import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import SwibeCardSec from "./Components/Swipecard";
import BrandSection from "./Components/BrandsSec";
import GridSec from "./Components/GridSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner/>
      <SwibeCardSec/>
      <BrandSection/>
      <GridSec/>
    </div>
  );
}
