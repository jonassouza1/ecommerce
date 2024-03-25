import { Header } from "./components/header";
import { Carousel } from "./components/carousel";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
    </>
  );
};

export default Home;
