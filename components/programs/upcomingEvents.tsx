"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import upcomingEventsData from "@/public/data/upcomingEvents.json";

const eventsData = upcomingEventsData.events;

interface UpcomingEventsSectionProps {
  activeFilter?: string;
}

export function UpcomingEventsSection({ activeFilter = "All" }: UpcomingEventsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  
  const filteredEvents = activeFilter === "All" 
    ? eventsData 
    : eventsData.filter(event => event.category === activeFilter);

  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6);
  const hasMore = filteredEvents.length > 6;

  return (
    <div className="w-full py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedEvents.length > 0 ? (
          displayedEvents.map((event, index) => (
            <Card
              key={event.id}
              className="flex flex-col gap-4 border-0 shadow-none -translate-y-4 animate-fade-in opacity-0"
              style={
                { "--animation-delay": `${index * 100}ms` } as React.CSSProperties
              }
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div className="relative w-full h-64 bg-teal-700 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-gray-900/40 hover:bg-gray-900/60 text-white border-0 rounded-full px-2 py-1 h-auto text-xs font-normal font-montserrat">
                    {event.category}
                  </Badge>
                </div>

                <div className="flex flex-col gap-2 px-1">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="font-montserrat font-medium text-gray-900 text-xl leading-relaxed">
                      {event.title}
                    </h3>

                    <Badge
                      variant="outline"
                      className="border-teal-700 text-gray-800 rounded px-2 py-0.5 h-auto text-xs font-medium font-montserrat shrink-0"
                    >
                      {event.date}
                    </Badge>
                  </div>

                  <p className="font-montserrat font-normal text-gray-800 text-sm leading-relaxed line-clamp-4">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-start gap-4 w-full">
                  <Button 
                    className="flex-1 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded px-8 py-2 h-auto text-sm font-medium font-montserrat transition-colors"
                    onClick={() => window.open(event.applyLink, '_blank')}
                  >
                    Apply Now
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1 border-amber-400 hover:bg-amber-400/10 text-gray-900 rounded px-8 py-2 h-auto text-sm font-medium font-montserrat transition-colors"
                    onClick={() => window.open(event.learnMoreLink, '_blank')}
                  >
                    Know more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="font-montserrat text-gray-500 text-lg">
              No events found for this category.
            </p>
          </div>
        )}
      </div>

      {/* View More Button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="border-teal-700 text-teal-700 hover:bg-teal-700/10 rounded-full px-8 py-2 h-auto text-sm font-medium font-montserrat transition-colors"
          >
            {showAll ? "Show Less" : "View More"}
          </Button>
        </div>
      )}
    </div>
  );
}
