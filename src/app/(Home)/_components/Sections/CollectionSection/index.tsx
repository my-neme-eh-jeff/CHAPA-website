import CarouselComponent from "./CarouselComponent";
import ImageClusterGridComponent from "./ImageClusterGridComponent";

export default function CollectionsSection() {
  return (
    <div className="ml-8 flex flex-col">
      <CarouselComponent />
      <ImageClusterGridComponent />
    </div>
  );
}
