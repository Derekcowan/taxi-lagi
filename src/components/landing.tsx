import PhotoCarousel from "./PhotoCarousel";
import Services from "./Services";
import AreaCovered from "./AreaCovered";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

export function Landing() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <Hero />
      <Services />
      <AreaCovered />
      <PhotoCarousel />
      <Footer />
    </div>
  );
}
