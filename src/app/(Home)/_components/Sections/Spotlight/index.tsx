import { CloudIcon, HeartIcon } from "lucide-react";
import SpotLightImage from "@/Assets/Images/SpotlightImage.png";
import Image from "next/image";
import { ArrowRight } from "@/Assets/Icons";

export default function SpotlightSection() {
  return (
    <div className="mx-40 h-auto w-full max-w-[2000px] justify-center rounded-[2rem] bg-red-600 p-6">
      <div className="flex">
        <div className="mr-28 h-[475px] w-[500px]">
          <Image
            src={SpotLightImage}
            alt="GUCCI Jacket"
            className="rounded-3xl"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="my-auto flex flex-col">
          <h3 className="text-2xl leading-[0.9] text-white">Spotlight on:</h3>
          <h1 className="text-9xl font-bold leading-[0.9] text-white">The</h1>
          <h1 className="text-9xl font-bold leading-[0.9] text-white">
            makers
          </h1>
          <h1 className="text-9xl font-bold leading-[0.9] text-white">stich</h1>
          <button className="mt-4 flex h-16 w-64 place-items-center justify-center rounded-md bg-white text-xl text-black">
            View Collection <ArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
