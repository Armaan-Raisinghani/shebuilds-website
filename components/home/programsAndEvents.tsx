import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/button";
import homeImagesData from "@/public/data/homeImages.json";

const galleryImages = homeImagesData.programsAndEvents.galleryImages;

export function ProgramAndEventsSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-3 w-full lg:w-xl -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {/* Teal text card */}
        <div className="bg-teal-700 rounded-tl-[48px] rounded-br-[48px] p-6 flex flex-col justify-center min-h-36">
          <p className="font-montserrat text-white text-sm leading-relaxed">
            <span className="font-semibold">Celebrate the</span>
            <br />
            <span className="font-medium text-xl">Women making a difference</span>
          </p>
        </div>
        
        {/* Image cards */}
        {galleryImages.slice(0, 2).map((src, index) => (
          <div 
            key={index} 
            className="relative rounded-tl-[48px] rounded-br-[48px] overflow-hidden min-h-36 border border-teal-700"
          >
            <Image
              src={src}
              alt={`Trailblazer gallery ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        
        {/* Last image */}
        <div className="relative rounded-tl-[48px] rounded-br-[48px] overflow-hidden min-h-36 border border-teal-700">
          <Image
            src={galleryImages[2]}
            alt="Trailblazer gallery 3"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full lg:w-96 items-start gap-6 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-montserrat font-medium text-gray-900 text-2xl sm:text-3xl tracking-normal leading-normal">
            Women Trailblazer
          </h2>

          <p className="font-montserrat font-normal text-gray-500 text-sm sm:text-base tracking-normal leading-relaxed">
            Celebrating the scientists, innovators, investors, entrepreneurs,
            and technologists driving India&apos;s AI and tech landscape.
          </p>
        </div>

        <Button asChild className="h-auto px-4 py-2 bg-teal-700 hover:bg-teal-800 rounded-full font-montserrat font-medium text-white text-base tracking-normal leading-relaxed whitespace-nowrap transition-colors">
          <Link href="/trailblazers">
            Take a look
          </Link>
        </Button>
      </div>
    </section>
  );
}
