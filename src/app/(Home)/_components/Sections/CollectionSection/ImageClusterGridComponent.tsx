import Image from "next/image";
import GridClusterImage1 from "@/Assets/Images/GridClusterImage1.png";
import GridClusterImage2 from "@/Assets/Images/GridClusterImage2.png";
import GridClusterImage3 from "@/Assets/Images/GridClusterImage3.png";
import GridClusterImage4 from "@/Assets/Images/GridClusterImage4.png";
import GridClusterImage5 from "@/Assets/Images/GridClusterImage5.png";
import { HeartIcon } from "@/Assets/Icons";

export default function ImageClusterGridComponent() {
  return (
    <>
      <Image
        className="absolute left-[11.688rem] top-[111.938rem] h-[23.956rem] w-[18.063rem] object-cover"
        alt="Purse Image Gucci"
        loading="lazy"
        src={GridClusterImage1}
      />
      <Image
        className="rounded-21xl absolute left-[49.125rem] top-[111.938rem] h-[37.625rem] w-[37.625rem] object-cover"
        alt="Jacket Image"
        loading="lazy"
        src={GridClusterImage2}
      />
      <Image
        className="rounded-21xl absolute left-[1.438rem] top-[140.063rem] h-[16.813rem] w-[16.813rem] object-cover"
        alt="Purse Image 2"
        loading="lazy"
        src={GridClusterImage3}
      />
      <Image
        loading="lazy"
        className="rounded-21xl absolute left-[9.875rem] top-[163rem] h-[30.688rem] w-[30.688rem] object-cover"
        alt="Shoes Image"
        src={GridClusterImage4}
      />
      <Image
        loading="lazy"
        className="rounded-21xl absolute left-[53.625rem] top-[158.875rem] h-[26.813rem] w-[26.813rem] object-cover"
        alt="Single Shoe Image"
        src={GridClusterImage5}
      />
      <HeartIcon className="absolute left-[28.25rem] top-[139.438rem] h-[18rem] w-[18rem] overflow-hidden" />
    </>
  );
}
