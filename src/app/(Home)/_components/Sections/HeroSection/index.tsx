import { characterC, characterH, characterA, characterP } from "./TitleSVG";

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      <div className="bg-gradient-to-b from-[rgba(246,207,178,0.07)] to-[rgba(157,78,154,0.07)] absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
        <div className="flex justify-center gap-x-5">
          <span className="h-auto">{characterC}</span>
          <span className="h-auto">{characterH}</span>
          <span className="h-auto">{characterA}</span>
          <span className="h-auto">{characterP}</span>
          <span className="h-auto">{characterA}</span>
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
