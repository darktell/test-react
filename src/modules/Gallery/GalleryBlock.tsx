import Constraint from "src/components/Constraint";
import ProductSlide from "src/modules/Gallery/ProductSlide";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
  {
    img: "img/gallery-example.png",
    label: "SCREEN SHOT #1",
  },
  {
    img: "img/gallery-example.png",
    label: "SCREEN SHOT #2",
  },
  {
    img: "img/gallery-example.png",
    label: "SCREEN SHOT #3",
  },
  {
    img: "img/gallery-example.png",
    label: "SCREEN SHOT #4",
  },
];

const GalleryBlock = () => {
  return (
    <div
      className="pt-8 pb-10 sm:pt-14 sm:pb-[115px] text-center"
      id="gallery-block"
    >
      <Constraint>
        <p className="text-[36px] font-semibold">show the gallery</p>
        <p className="mb-8 sm:mb-[60px] text-xl">
          summarise what your product is all about
        </p>

        <div className="hidden sm:flex flex-wrap justify-center gap-[30px]">
          {SLIDES.map(({ label, img }, index) => (
            <ProductSlide label={label} image={img} key={label + index} />
          ))}
        </div>
        <div className="sm:hidden">
          <Swiper
            loop
            slidesPerView={1.2}
            centerInsufficientSlides
            spaceBetween={20}
          >
            {SLIDES.map(({ label, img }, index) => (
              <SwiperSlide key={label + index} className="cursor-pointer">
                <ProductSlide label={label} image={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Constraint>
    </div>
  );
};

export default GalleryBlock;
