import Image from "next/image";
import { HeroSection } from "@/components/home/heroSection";
import { ImageGallerySection } from "@/components/home/imageGallery";
import { LearningHubSection } from "@/components/home/learningHub";
import { OpportunityRepositorySection } from "@/components/home/opportunityRepository";
import { ProgramAndEventsSection } from "@/components/home/programsAndEvents";

const galleryImages = [
  {
    src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/rectangle-39.png",
    alt: "Gallery image 1",
    width: 223,
  },
  {
    src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/rectangle-40.png",
    alt: "Gallery image 2",
    width: 325,
  },
  {
    src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/rectangle-36.png",
    alt: "Gallery image 3",
    width: 325,
  },
  {
    src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/rectangle-40-1.png",
    alt: "Gallery image 4",
    width: 325,
  },
  {
    src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/rectangle-40.png",
    alt: "Gallery image 5",
    width: 160,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 pt-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-7xl mx-auto flex justify-center">
          <HeroSection />
        </div>
      </section>

      {/* Marquee Gallery - Infinite Scrolling */}
      <section className="relative w-full overflow-hidden -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex animate-marquee">
          {/* First set of images */}
          <div className="flex h-44 items-center gap-5 shrink-0">
            {galleryImages.map((image, index) => (
              <Image
                key={`first-${index}`}
                className="relative self-stretch rounded-lg object-cover transition-transform hover:scale-105"
                style={{ width: image.width, height: 179 }}
                width={image.width}
                height={179}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex h-44 items-center gap-5 shrink-0 ml-5">
            {galleryImages.map((image, index) => (
              <Image
                key={`second-${index}`}
                className="relative self-stretch rounded-lg object-cover transition-transform hover:scale-105"
                style={{ width: image.width, height: 179 }}
                width={image.width}
                height={179}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Programs and Events */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="max-w-7xl mx-auto flex justify-center">
          <ImageGallerySection />
        </div>
      </section>

      {/* Women Trailblazers */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="max-w-7xl mx-auto flex justify-center">
          <ProgramAndEventsSection />
        </div>
      </section>

      {/* Opportunity Repository */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="max-w-7xl mx-auto flex justify-center">
          <OpportunityRepositorySection />
        </div>
      </section>

      {/* Learning Hub */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <div className="max-w-7xl mx-auto flex justify-center">
          <LearningHubSection />
        </div>
      </section>
    </div>
  );
}
