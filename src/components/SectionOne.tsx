import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";

const images = [
  "/src/assets/img/img1.jpeg",
  "/src/assets/img/img2.jpeg",
  "/src/assets/img/img3.jpeg",
  "/src/assets/img/img4.jpeg",
  "/src/assets/img/img5.jpeg",
  "/src/assets/img/img6.jpeg",
];

const SectionOne: React.FC = () => {
    return (
      <section id="section1" className="w-full flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold mb-6">Ultimas Fotos Juntos</h2>
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
              <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };
  
  export default SectionOne;
