import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export const Slider = () => {
  return (
    <div className="mt-10">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src="https://i.can.ua/big_promo/0/55.jpg" alt="Slider" />
          </CarouselItem>
          <CarouselItem>
            <img src="https://i.can.ua/big_promo/0/76.jpg" alt="Slider" />
          </CarouselItem>
          <CarouselItem>
            <img src="https://i.can.ua/big_promo/0/71.jpg" alt="Slider" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
