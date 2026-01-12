import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/button";
import homeImagesData from "@/public/data/homeImages.json";

export function ImageGallerySection() {
  const topImages = homeImagesData.imageGallery.topImages;

  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
      {/* Text Content */}
      <div className="flex flex-col w-full lg:w-96 items-start gap-6">
        <div className="flex flex-col items-start gap-4 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="font-montserrat font-medium text-gray-900 text-2xl sm:text-3xl tracking-normal leading-normal">
            Program and Events
          </h2>

          <p className="font-montserrat font-normal text-gray-500 text-sm sm:text-base tracking-normal leading-relaxed">
            Discover initiatives you can join, apply to, or engage with as part
            of the broader ecosystem.
          </p>
        </div>

        <Button asChild className="h-auto px-4 py-2 bg-teal-700 hover:bg-teal-800 rounded-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms] transition-colors">
          <Link href="/programs">
            <span className="font-montserrat font-medium text-white text-base tracking-normal leading-relaxed whitespace-nowrap">
              Join now
            </span>
          </Link>
        </Button>
      </div>

      {/* Image Grid */}
      <div className="flex flex-col w-full lg:max-w-lg items-start gap-3 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="flex h-44 items-center gap-3 w-full">
          {topImages.map((image, index) => (
            <div key={index} className="relative flex-1 h-full rounded-lg overflow-hidden">
              <Image
                className="object-cover hover:scale-105 transition-transform"
                fill
                alt={image.alt}
                src={image.src}
              />
            </div>
          ))}
        </div>

        <div className="relative w-full h-52 rounded-lg overflow-hidden">
          <Image
            className="object-cover hover:scale-105 transition-transform"
            fill
            alt="Featured event"
            src="https://c.animaapp.com/mjvqb3fs5p8iw8/img/rectangle-40.png"
          />
        </div>
      </div>
    </section>
  );
}
