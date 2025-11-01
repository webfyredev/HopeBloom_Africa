// src/components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgImg1 from '../images/ngo/bg1.webp'
import bgImg2 from '../images/ngo/bg2.webp'
import bgImg3 from '../images/ngo/bg3.webp'
import { buttonHoverEffects } from "../animations/effect";


const slides = [
    {
        id : 1,
        image : bgImg1,
        title : "Empowering Africa's Future",
        c_text : 'Through Education, Healthcare & Community Development',
        text : 'Join us in transforming lives across Africa.Every donation, every volunteer hour, every partnership creates lasting change in communities that need it most',
        btn_text1 : 'Donate Now',
        btn_text2 : 'Start Making Impart',
    },
    {
        id : 2,
        image : bgImg2,
        title : "Healthcare for Every Community",
        c_text : 'Bringing Medical Care to Remote Areas',
        text : 'Our mobile clinics ad healthcare programs reach the most underserved communities, providing essential medical care, vaccinations, and health education to thousands of families',
        btn_text1 : 'Donate Now',
        btn_text2 : 'Support Healthcare',
    },
    {
        id : 3,
        image : bgImg3,
        title : "Women Leading Change",
        c_text : 'Empowering Through Skills & Leadership',
        text : 'We belive in the power of women to transform their communities. Our programs provide skill training, microfinance, and leadership development to create sustainable change.',
        btn_text1 : 'Donate Now',
        btn_text2 : 'Empower Women',
    },
];

function SlideInner({ slide }) {
  // useSwiperSlide returns an object; read isActive safely
  const slideState = useSwiperSlide();
  const isActive = !!slideState && !!slideState.isActive;

  return (
    <div
      className="relative w-full h-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-blue-800/60" />
      <div
        className={`relative z-10 h-full flex flex-col justify-center items-center px-6 lg:px-24`}
      >

        <motion.h1
          className="text-xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-center mb-3"
          initial={{ opacity: 0, x: -40 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          {slide.title}
        </motion.h1>

        <motion.h3
          className="text-xs md:text-xl font-semibold leading-tight text-white text-center"
          initial={{ opacity: 0, x: -40 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {slide.c_text}
        </motion.h3>

        <motion.p
          className="hidden md:flex text-sm mb-6 text-white text-center md:w-150 mt-2"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {slide.text}
        </motion.p>
        <div className="md:w-auto md:flex md:flex-row flex flex-col space-y-3 md:space-y-0 w-full mt-5 md:mt-3 space-x-3">
            <motion.button {...buttonHoverEffects} className="hidden md:flex md:px-9 md:py-3 px-13 py-4 ml-4 md:ml-0 bg-white text-blue-500 text-xs md:text-sm font-semibold rounded-md cursor-pointer">
                {slide.btn_text1}
            </motion.button>
            <motion.button {...buttonHoverEffects} className="flex md:px-9 md:py-3 py-4 bg-[#FACC15] text-white text-xs md:text-sm font-semibold rounded-md cursor-pointer">
                {slide.btn_text2}
            </motion.button>
        </div>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  return (
    <section className="w-full min-h-[80vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="h-[90vh]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <SlideInner slide={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
