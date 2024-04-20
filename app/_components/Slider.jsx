import React from 'react'
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function Slider({sliderList}) {
  return (
    <Carousel>
  <CarouselContent>
  {sliderList.map((slider, index) => (
    <CarouselItem key={index}>
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + slider.attributes?.image?.data[0]?.attributes?.url}
        width={1000}
        height={400}
        alt='slider'
        className="w-full h-[200] md:h-[550px] object-cover rounded-2xl"
      />
      <CarouselNext />
      <CarouselPrevious />
    </CarouselItem>
  ))}
   
    
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}

export default Slider