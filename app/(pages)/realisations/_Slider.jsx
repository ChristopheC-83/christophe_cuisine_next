"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { imgListSlider } from "@/datas/imgSliderRealisationDatas";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-[80vw] max-w-[1000px] mx-auto midFlex my-6 md:my-12 box-shadow-5 rounded-xl">
      <Carousel
        className="w-full max-w-[1000px] rounded-xl"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className={`rounded-xl`}>
          {imgListSlider.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative p-1 w-[80vw] max-w-[1000px] min-h[150px] max-h-[680px] h-[65vw] rounded-xl overflow-hidden ">
                <Image
                  src={img.src}
                  alt="cuisine"
                  fill
                  className="absolute rounded-xl "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`shadow-xl`}/>
        <CarouselNext className={`shadow-xl`}/>
      </Carousel>
    </div>
  );
}
