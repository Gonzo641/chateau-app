"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const MainCarousel = () => {
  return (
    <div className="md:hidden flex justify-center items-center px-8 pt-12">
    <Carousel className="max-w-[400px]">
      <CarouselContent>
        <CarouselItem>
        <Image
          src="/image/chambre-hotes-condrieu-chavagnac2.jpg"
          width={500}
          height={200}
          alt="image"
          className="object-cover rounded-xl"
        />
        </CarouselItem>
        <CarouselItem>
        <Image
          src="/image/chambre-hotes-saint-joseph-chavagnac.jpg"
          width={500}
          height={200}
          alt="image"
          className="object-cover rounded-xl"
        />
        </CarouselItem>
        <CarouselItem>
        <Image
          src="/image/suite-hotes-cote-rotie-chavagnac.jpg"
          width={500}
          height={200}
          alt="image"
          className="object-cover rounded-xl"
        />
        </CarouselItem>
        <CarouselItem>
        <Image
          src="/image/suite-hotes-hermitage-chavagnac.jpg"
          width={500}
          height={200}
          alt="image"
          className="object-cover rounded-xl"
        />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  )
}
export default MainCarousel