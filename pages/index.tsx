import { Header } from "./components/header";
import { SectionAccess } from "./components/section-access";
import { Carousel } from "./components/carousel";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SectionProducts } from "./components/section-products";
import { CarouselHistoric } from "./components/section-historic";
import { Publicity } from "./components/section-publicity";
import { SectionVideos } from "./components/section-videos";
import { SectionUndertake } from "./components/section-undertake";
import { SectionBanner } from "./components/section-banner";
import { SectionBenefits } from "./components/section-benefits";
import { SectionPromote } from "./components/section-promote";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <SectionAccess />
      <SectionProducts />
      <CarouselHistoric />
      <Publicity />
      <SectionVideos />
      <SectionUndertake />
      <SectionBanner />
      <SectionBenefits />
      <SectionPromote />
    </>
  );
};

export default Home;
