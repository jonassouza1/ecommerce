import { Header } from "./components/header";
import { SectionAccess } from "./components/carousel/section-access";
import { Carousel } from "./components/carousel/Carousel";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SectionProducts } from "./components/carousel/section-products";
import { CarouselHistoric } from "./components/carousel/section-historic";
import { Publicity } from "./components/section/section-publicity";
import { SectionVideos } from "./components/section/section-videos";
import { SectionUndertake } from "./components/section/section-undertake";
import { SectionBanner } from "./components/section/section-banner";
import { SectionBenefits } from "./components/section/section-benefits";
import { SectionPromote } from "./components/section/section-promote";
import { SectionCategory } from "./components/carousel/section-category";
import { SectionInfo } from "./components/section/section-info";
import { ButtonFooter } from "./components/footer/button-footer";
import { Footer } from "./components/footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
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
        <SectionCategory />
        <SectionInfo />
        <ButtonFooter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
