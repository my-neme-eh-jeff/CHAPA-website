"use client";
import { HeartIcon } from "lucide-react";
import SpotLightImage from "@/Assets/Images/SpotlightImage.png";
import Image from "next/image";
import { ArrowRight, CloudIcon } from "@/Assets/Icons";
import { Spotlight } from "./SpotlightWrapper";
import ShimmerButton from "@/components/ShimmerButton";

export default function SpotlightSection() {
  return (
    <div className="relative mx-auto mb-20 h-auto w-full max-w-[1500px] justify-center overflow-clip rounded-[30px] bg-red-600 p-8 sm:rounded-[41px] md:rounded-[55px] lg:rounded-[73px]">
      <Spotlight
        className="md:left-25 -top-40 left-60 md:top-0 lg:-top-20 lg:left-0"
        fill="#8D899C"
      />
      <div className="flex">
        <div className="mr-12 md:mr-24 lg:h-[475px] lg:w-[500px]">
          <Image
            src={SpotLightImage}
            alt="GUCCI Jacket"
            loading="lazy"
            className="rounded-[30px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[53px]"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="my-auto flex flex-col">
          <h3 className="mb-1 text-2xl text-white">Spotlight on:</h3>
          <h1 className="text-5xl font-bold leading-[0.8] text-white md:text-6xl lg:text-9xl">
            The
          </h1>
          <h1 className="text-5xl font-bold leading-[0.8] text-white md:text-6xl lg:text-9xl">
            makers
          </h1>
          <h1 className="text-5xl font-bold leading-[0.8] text-white md:text-6xl lg:text-9xl">
            stich
          </h1>
          <ShimmerButton className="mt-4 flex h-10 w-40 place-items-center justify-center rounded-md bg-white text-xl text-black sm:h-12 sm:w-48 md:h-14 md:w-56 lg:h-16 lg:w-64">
            View Collection
            <ArrowRight className="ml-1" />
          </ShimmerButton>
        </div>
      </div>
      <CloudIcon className="absolute -right-7 bottom-20 hidden lg:block lg:h-[115px] lg:w-[230px] xl:h-[139.52px] xl:w-[264px]" />
      <HeartIcon className="absolute right-6 top-10 hidden fill-red-600 text-white md:block md:h-16 md:w-16 lg:h-24 lg:w-24" />
    </div>
  );
}
