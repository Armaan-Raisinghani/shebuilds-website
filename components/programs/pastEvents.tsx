"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/ui/button";
import pastEventsData from "@/public/data/pastEvents.json";

const pastEvents = pastEventsData.events;

// Image Gallery component for each event
function EventImageGallery({ images, title }: { images: string[]; title: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full md:w-125 shrink-0">
      {/* Main Image */}
      <div className="relative h-72 rounded-lg overflow-hidden bg-gray-100">
        <Image
          className="w-full h-full object-cover transition-opacity duration-300"
          width={500}
          height={288}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          src={images[currentImageIndex]}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-teal-700/80 hover:bg-teal-700 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-teal-700/80 hover:bg-teal-700 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-gray-900/60 text-white text-xs px-2 py-1 rounded-full font-montserrat">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentImageIndex
                  ? "bg-teal-700"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function PastEventsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedEvents = showAll ? pastEvents : pastEvents.slice(0, 2);
  const hasMore = pastEvents.length > 2;

  return (
    <div className="flex flex-col w-full items-start gap-10">
      {displayedEvents.map((event, index) => (
        <article
          key={index}
          className="flex flex-col md:flex-row items-start gap-8 w-full opacity-0 -translate-y-4 animate-fade-in"
          style={{ "--animation-delay": `${index * 150}ms` } as React.CSSProperties}
        >
          {/* Image Gallery */}
          <EventImageGallery images={event.images} title={event.title} />

          {/* Event Details */}
          <div className="flex flex-col flex-1 items-start gap-3">
            <div className="flex flex-col items-start w-full">
              <h3 className="font-montserrat font-medium text-gray-900 text-xl leading-relaxed">
                {event.title}
              </h3>

              <time className="font-montserrat font-medium text-gray-500 text-xs leading-relaxed">
                {event.date}
              </time>
            </div>

            <p className="font-montserrat font-normal text-gray-500 text-base tracking-normal leading-relaxed">
              {event.description}
            </p>
          </div>
        </article>
      ))}

      {hasMore && (
        <Button
          variant="outline"
          onClick={() => setShowAll(!showAll)}
          className="h-auto w-auto px-8 py-2 border-teal-700 text-teal-900 hover:bg-teal-700 hover:text-white transition-colors font-montserrat font-medium text-sm tracking-normal leading-relaxed self-center mt-4"
        >
          {showAll ? "Show Less" : "View More"}
        </Button>
      )}
    </div>
  );
}
