import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";

const PhotoCarousel = () => {
  return (
    <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hình ảnh
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Xem hình ảnh của xe và tài xế của chúng tôi.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-6xl">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  alt="Ca 1 "
                  className="aspect-square rounded-lg object-cover object-bottom"
                  height={400}
                  src="/lagi-taxi.jpg"
                  width={800}
                  quality={60}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  alt="Car 3"
                  className="aspect-square rounded-lg object-cover"
                  height={400}
                  src="/Taxi La gi-1.png"
                  width={800}
                  quality={60}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  alt="Car 3"
                  className="zoom aspect-square rounded-lg object-cover object-bottom"
                  height={400}
                  src="/taxi-la-gi-airport.png"
                  width={800}
                  quality={60}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  alt="Car 2"
                  className="aspect-square rounded-lg object-cover"
                  height={400}
                  src="/Taxi La gi-4.png"
                  width={800}
                  quality={60}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  alt="Car 2"
                  className="aspect-square rounded-lg object-cover"
                  height={400}
                  src="/Taxi La gi-7.png"
                  width={800}
                  quality={60}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  alt="Car 2"
                  className="aspect-square rounded-lg object-cover"
                  height={400}
                  src="/Taxi La gi-5.png"
                  width={800}
                  quality={60}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
