import Image from "next/image";
import GridClusterImage1 from "@/Assets/Images/GridClusterImage1.png";
import GridClusterImage2 from "@/Assets/Images/GridClusterImage2.png";
import GridClusterImage3 from "@/Assets/Images/GridClusterImage3.png";
import GridClusterImage4 from "@/Assets/Images/GridClusterImage4.png";
import GridClusterImage5 from "@/Assets/Images/GridClusterImage5.png";
import { HeartIcon } from "@/Assets/Icons";

export default function ImageClusterGridComponent() {
  return (
    <div className="relative h-[100rem]">
      <Image
        className="absolute left-[21.688rem] top-[11.938rem] h-[23.956rem] w-[18.063rem] object-cover"
        alt="Purse Image Gucci"
        loading="lazy"
        src={GridClusterImage1}
      />
      <Image
        className="rounded-21xl absolute left-[59.125rem] top-[11.938rem] h-[37.625rem] w-[37.625rem] object-cover"
        alt="Jacket Image"
        loading="lazy"
        src={GridClusterImage2}
      />
      <Image
        className="rounded-21xl absolute left-[11.438rem] top-[40.063rem] h-[16.813rem] w-[16.813rem] object-cover"
        alt="Purse Image 2"
        loading="lazy"
        src={GridClusterImage3}
      />
      <Image
        loading="lazy"
        className="rounded-21xl absolute left-[19.875rem] top-[63rem] h-[30.688rem] w-[30.688rem] object-cover"
        alt="Shoes Image"
        src={GridClusterImage4}
      />
      <Image
        loading="lazy"
        className="rounded-21xl absolute left-[63.625rem] top-[58.875rem] h-[26.813rem] w-[26.813rem] object-cover"
        alt="Single Shoe Image"
        src={GridClusterImage5}
      />
      <HeartIcon className="animate-pulse absolute left-[38.25rem] top-[39.438rem] h-[18rem] w-[18rem] overflow-hidden" />
    </div>
  );
}
