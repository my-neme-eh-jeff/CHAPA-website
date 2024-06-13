import Navbar from "./_components/Navbar";
import CollectionsSection from "./_components/Sections/CollectionSection";
import HeroSection from "./_components/Sections/HeroSection";
import SpotlightSection from "./_components/Sections/Spotlight";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex flex-col gap-24">
        <HeroSection />
        <CollectionsSection />
        <SpotlightSection />
      </main>
    </div>
  );
}
