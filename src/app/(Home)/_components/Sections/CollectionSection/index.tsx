import CarouselComponent from "./CarouselComponent";
import ImageClusterGridComponent from "./ImageClusterGridComponent";

export default function CollectionsSection() {
  return (
    <div className="ml-8 flex flex-col">
      <h1 className="mb-4 text-5xl uppercase drop-shadow-xl">Collections</h1>
      <CarouselComponent />
      {/* <ImageClusterGridComponent /> */}
    </div>
  );
}
