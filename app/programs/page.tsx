"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/ui/button";
import { UpcomingEventsSection } from "@/components/programs/upcomingEvents";
import { EventGallerySection } from "@/components/programs/eventsGallery";
import { PastEventsSection } from "@/components/programs/pastEvents";

const eventFilters = ["All", "Hackathon", "Ideathon", "Speaker Event"];

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      {/* Page Header */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 py-8 sm:py-12 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="font-montserrat font-medium text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-normal leading-normal text-center">
            Programs & Events
          </h1>
          <p className="max-w-2xl font-montserrat font-normal text-gray-500 text-base text-center tracking-normal leading-relaxed mt-4">
            Discover initiatives you can join, apply to, or engage with as part
            of the broader ecosystem.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat font-medium text-gray-900 text-xl sm:text-2xl tracking-normal leading-normal mb-6">
            Upcoming Events
          </h2>

          <div className="inline-flex items-center gap-2 sm:gap-3 flex-wrap mb-6">
            {eventFilters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`h-auto px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-normal transition-all ${
                  activeFilter === filter
                    ? "bg-teal-700 hover:bg-teal-800 text-white border-0"
                    : "border-teal-700 text-teal-700 bg-transparent hover:bg-teal-700/10"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          <UpcomingEventsSection activeFilter={activeFilter} />

          <Image
            className="w-full max-w-5xl h-8 mt-6"
            width={1264}
            height={32}
            alt="Decorative frame"
            src="https://c.animaapp.com/mjvrhj0c9cynBP/img/frame-36.svg"
          />
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="relative w-full py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <h2 className="font-montserrat font-medium text-gray-900 text-xl sm:text-2xl tracking-normal leading-normal mb-6 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto">
          Event Gallery
        </h2>
        <EventGallerySection />
      </section>

      {/* Past Events Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat font-medium text-gray-900 text-xl sm:text-2xl tracking-normal leading-normal mb-6">
            Past Events
          </h2>
          <PastEventsSection />
        </div>
      </section>
    </>
  );
}
