import { CharacterA, CharacterC, CharacterH, CharacterP } from "./TitleSVG";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-gradient-to-b from-[rgba(246,207,178,0.07)] to-[rgba(157,78,154,0.07)] absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
        <div className="flex justify-center gap-2 md:gap-3 lg:gap-5 xl:gap-6">
          <span className="w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52 h-auto">
            <CharacterC width="100%" height="100%" />
          </span>
          <span className="w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52 h-auto">
            <CharacterH width="100%" height="100%" />
          </span>
          <span className="w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52 h-auto">
            <CharacterA width="100%" height="100%" />
          </span>
          <span className="w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52 h-auto">
            <CharacterP width="100%" height="100%" />
          </span>
          <span className="w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52 h-auto">
            <CharacterA width="100%" height="100%" />
          </span>
        </div>
        <div className="flex justify-around">
          <div>CIRCULAR CHAPA COMPONENT</div>
          <div>MODEL IMAGE</div>
          <div>
            <p className="text-center">New Collection</p>
            <p className="text-center">Women</p>
            <p className="text-center">Men</p>
            <p className="text-center">Accessories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
import { characterC, characterH, characterA, characterP } from "./TitleSVG";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-gradient-to-b from-[rgba(246,207,178,0.07)] to-[rgba(157,78,154,0.07)] absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 px-4">
        <div className="flex flex-wrap justify-center gap-5">
          <span className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto">
            {characterC}
          </span>
          <span className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto">
            {characterH}
          </span>
          <span className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto">
            {characterA}
          </span>
          <span className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto">
            {characterP}
          </span>
          <span className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto">
            {characterA}
          </span>
        </div>
        <div>
          <div></div>
          <div></div>
          <div>
            <p className="text-center">New Collection</p>
            <p className="text-center">Women</p>
            <p className="text-center">Men</p>
            <p className="text-center">Accessories</p>
          </div>
        </div>
      </div>
    </div>
  );
}

*/
