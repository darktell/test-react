import "./customStyle.css";

import StartSlide from "src/modules/Start/StartSlide";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// todo here we can add addition properties for slide
const SLIDES = [{ id: 1 }, { id: 2 }, { id: 3 }];

const StartBlock = () => {
  return (
    <div className="border-b-[3px] border-primary" id="home-block">
      <Swiper
        modules={[Navigation, Pagination]}
        loop
        slidesPerView={1}
        centerInsufficientSlides
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
      >
        {SLIDES.map(({ id }) => (
          <SwiperSlide key={id} className="cursor-pointer">
            <StartSlide />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StartBlock;
