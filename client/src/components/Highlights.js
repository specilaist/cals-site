import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { makeStyles } from '@material-ui/core/styles';

import 'swiper/swiper-bundle.css';

export default function Highlights() {
  const slides = [];

  for (let i = 0; i < 5; i++){
    slides.push(
      <SwiperSlide key={`slide=${i}`} tag='li'>
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`slide=${i}`}
        />
      </SwiperSlide>
    )
  }

  return (
    <React.Fragment>
        <Swiper tag="section" wrapperTag="ul" id="main" navigation pagination spaceBetween={0} slidesPerView={1}>
          {slides}
        </Swiper>
    </React.Fragment>
  );
}