import React from 'react'
import Banner from '../components/Banner'
import LanguagesCarousel from '../components/LanguagesCarousel'

export default function Start() {
  return (
    <div className='w-screen h-90vh snap-start flex flex-col justify-between'>
      <Banner />
      <LanguagesCarousel />
    </div>
  )
}
