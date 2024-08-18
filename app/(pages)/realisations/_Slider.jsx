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
    <div class='w-full mx-auto midFlex my-6 md:my-12'>
        <Carousel className="w-full max-w-[1000px] box-shadow-5 rounded-xl"  opts={{
          align: "start",
          loop: true,
        }}>
          <CarouselContent>
            {imgListSlider.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative p-1 w-[96vw] max-w-[1000px] min-h[150px] max-h-[680px] h-[65vw] rounded-xl">
                        <Image
                        src = {img.src}
                        alt="cuisine"
                        fill
                        className="absolute rounded-xl"
                        />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  );
}
