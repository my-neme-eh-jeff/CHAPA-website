import { ArrowRight } from "@/Assets/Icons";
import Image from "next/image";
import Link from "next/link";
import { CharacterA, CharacterC, CharacterH, CharacterP } from "./TitleSVG";
import BoxReveal from "./BoxReveal";

export default async function HeroSection() {
  return (
    <div className="relative min-h-fit md:min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(246,207,178,0.07)] to-[rgba(157,78,154,0.07)]"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-y-20 pt-20">
        <div className="relative flex justify-center gap-2 md:gap-3 lg:gap-5 xl:gap-7">
          <span className="relative z-10 h-auto w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52">
            <CharacterC width="100%" height="100%" />
          </span>
          <span className="relative z-10 h-auto w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52">
            <CharacterH width="100%" height="100%" />
          </span>
          <span className="relative z-10 h-auto w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52">
            <CharacterA width="100%" height="100%" />
          </span>
          <span className="relative z-10 h-auto w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52">
            <CharacterP width="100%" height="100%" />
          </span>
          <span className="relative z-10 h-auto w-20 sm:w-20 md:w-36 lg:w-48 xl:w-52">
            <CharacterA width="100%" height="100%" />
          </span>
          <div className="absolute left-[48%] z-0 -translate-x-1/2 -translate-y-1/2 transform md:top-80 lg:top-96 xl:top-[26rem]">
            <Image
              alt="CHAPA Model"
              src={"/HeroSectionModel.png"}
              placeholder="blur"
              width={1200}
              height={1000}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYGBg+LJ3hfn/A5ucQGww+H/hxOT/75+vBHEAwWgL7GHMobcAAAAASUVORK5CYII="
              className="h-auto w-full md:w-[1000px] lg:w-[700px] lg:max-w-[1200px] xl:w-[900px]"
            />
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center md:flex-row xl:mt-20 xl:px-28 xl:py-16">
          <div>CHAPA CIRCLE</div>
          <div className="mt-8 md:ml-auto md:mt-0">
            <div className="group mb-8 flex place-items-center gap-x-4 text-center">
              <Link
                href={"/"}
                className="relative text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              >
                New Collection
                <span className="absolute bottom-0 left-0 h-1 scale-x-0 transform bg-black transition-all duration-1000 group-hover:scale-x-100"></span>
              </Link>
              <ArrowRight className="mt-2 fill-red-500 transition-transform group-hover:translate-x-[10px]" />
            </div>
            <div className="flex flex-col items-center space-y-2 text-xl md:items-start md:text-2xl lg:text-3xl xl:text-4xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5} delay={0.25}>
                <Link href="/" className="group w-fit">
                  Woman
                </Link>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5} delay={0.35}>
                <Link href="/" className="group w-fit">
                  Man
                </Link>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.55} delay={0.45}>
                <Link href="/" className="group w-fit">
                  Children
                </Link>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5} delay={0.6}>
                <Link href="/" className="group w-fit">
                  Accessories
                </Link>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
