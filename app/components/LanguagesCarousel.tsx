'use client';
import React from 'react'
import { ReactSVG } from 'react-svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/css';


const paths:string[] = [
  'azure-plain-wordmark.svg',
  'cplusplus-original.svg',
  'csharp-original.svg',
  'css3-original.svg',
  'firebase-plain-wordmark.svg',
  'flutter-original.svg',
  'java-original.svg',
  'kotlin-original.svg',
  'xamarin-original.svg'
];


export default function LanguagesCarousel() {

  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className='h-32 w-screen bg-lightGreen py-6'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={false}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 1500
          }}
          className="w-full h-full"
        >
          {
            paths.map( (str,index) =>(
              <SwiperSlide key={index}>
                <ReactSVG className='w-20 h-20 grayscale' src={str}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

    </>
  )
}
