"use client";
import { HeartIcon } from "lucide-react";
import SpotLightImage from "@/Assets/Images/SpotlightImage.png";
import Image from "next/image";
import { ArrowRight, CloudIcon } from "@/Assets/Icons";
import { Spotlight } from "./SpotlightWrapper";
import ShimmerButton from "@/components/ShimmerButton";

export default function SpotlightSection() {
  return (
    <div className="relative mx-auto mb-20 h-auto w-full max-w-[1500px] justify-center overflow-clip rounded-[73px] bg-red-600 p-8">
      <Spotlight
        className="-top-40 left-60 md:-top-20 md:left-60 lg:-top-20 lg:left-0"
        fill="#8D899C"
      />
      <div className="flex">
        <div className="mr-24 h-[475px] w-[500px]">
          <Image
            src={SpotLightImage}
            alt="GUCCI Jacket"
            loading="lazy"
            className="rounded-[53px]"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="my-auto flex flex-col">
          <h3 className="mb-1 text-2xl text-white">Spotlight on:</h3>
          <h1 className="text-9xl font-bold leading-[0.8] text-white">The</h1>
          <h1 className="text-9xl font-bold leading-[0.8] text-white">
            makers
          </h1>
          <h1 className="text-9xl font-bold leading-[0.8] text-white">stich</h1>
          <ShimmerButton className="mt-4 flex h-16 w-64 place-items-center justify-center rounded-md bg-white text-xl text-black">
            View Collection
            <ArrowRight className="ml-1" />
          </ShimmerButton>
        </div>
      </div>
      <CloudIcon className="absolute -right-7 bottom-20 h-[139.52px] w-[264px]" />
      <HeartIcon className="absolute right-6 top-10 h-24 w-24 fill-red-600 text-white" />
    </div>
  );
}
