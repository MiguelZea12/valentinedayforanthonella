// src/components/SectionOne.tsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import AnimatedDots from "./AnimatedDots";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
];

const SectionOne: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      data-aos="fade-up"
      id="section1"
      className="relative z-10 w-full flex flex-col items-center py-10 bg-white rounded-xl shadow-lg -mt-20 mx-auto max-w-5xl"
    >
      <AnimatedDots />
      <h2 className="text-3xl font-bold mb-6">Últimas Fotos Juntos</h2>
      <Swiper
        navigation
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1.5}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Navigation, EffectCoverflow, Pagination]}
        className="w-3/4 max-w-3xl h-96 pb-10"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionOne;
