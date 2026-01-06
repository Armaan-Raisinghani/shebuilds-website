"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";

const eventsData = [
  {
    id: 1,
    title: "SheLeads Tech",
    date: "29 / 12 / 25",
    category: "Hackathon",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8.png",
    applyLink: "https://example.com/apply/sheleads",
    learnMoreLink: "https://example.com/events/sheleads",
    description:
      "SheLeads Tech is a hackathon focused on empowering women in technology. Participants will collaborate to develop innovative solutions, network with industry leaders, and showcase their skills.",
  },
  {
    id: 2,
    title: "SheInnovates",
    date: "20 / 01 / 26",
    category: "Hackathon",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-1.png",
    applyLink: "https://example.com/apply/sheinnovates",
    learnMoreLink: "https://example.com/events/sheinnovates",
    description:
      "SheInnovates is a dynamic hackathon that encourages women to leverage technology for social impact. Join us to create, connect, and contribute to a better future.",
  },
  {
    id: 3,
    title: "AI Ideas Challenge",
    date: "15 / 02 / 26",
    category: "Ideathon",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-2.png",
    applyLink: "https://example.com/apply/ai-ideas",
    learnMoreLink: "https://example.com/events/ai-ideas",
    description:
      "AI Ideas Challenge brings together creative minds to brainstorm and pitch innovative AI solutions. Present your ideas to industry experts and win exciting prizes.",
  },
  {
    id: 4,
    title: "Future Tech Talks",
    date: "10 / 03 / 26",
    category: "Speaker Event",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-3.png",
    applyLink: "https://example.com/apply/tech-talks",
    learnMoreLink: "https://example.com/events/tech-talks",
    description:
      "Future Tech Talks features inspiring speakers from the tech industry sharing insights on emerging technologies, career growth, and the future of innovation.",
  },
  {
    id: 5,
    title: "Innovation Sprint",
    date: "25 / 03 / 26",
    category: "Ideathon",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-4.png",
    applyLink: "https://example.com/apply/innovation-sprint",
    learnMoreLink: "https://example.com/events/innovation-sprint",
    description:
      "Innovation Sprint is an intensive ideation session where participants develop creative solutions to real-world challenges in just 48 hours.",
  },
  {
    id: 6,
    title: "Women in AI Summit",
    date: "05 / 04 / 26",
    category: "Speaker Event",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8.png",
    applyLink: "https://example.com/apply/women-ai-summit",
    learnMoreLink: "https://example.com/events/women-ai-summit",
    description:
      "Women in AI Summit brings together leaders, researchers, and practitioners to discuss the impact of women in artificial intelligence and machine learning.",
  },
  {
    id: 7,
    title: "Code for Change",
    date: "20 / 04 / 26",
    category: "Hackathon",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-1.png",
    applyLink: "https://example.com/apply/code-for-change",
    learnMoreLink: "https://example.com/events/code-for-change",
    description:
      "Code for Change is a 48-hour hackathon where developers create solutions addressing social challenges. Build impactful projects and win prizes.",
  },
  {
    id: 8,
    title: "Deep Tech Dialogues",
    date: "05 / 05 / 26",
    category: "Speaker Event",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-2.png",
    applyLink: "https://example.com/apply/deep-tech",
    learnMoreLink: "https://example.com/events/deep-tech",
    description:
      "Deep Tech Dialogues brings together experts to discuss cutting-edge technologies like quantum computing, biotech, and advanced materials.",
  },
  {
    id: 9,
    title: "Startup Pitch Day",
    date: "15 / 05 / 26",
    category: "Ideathon",
    image: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-3.png",
    applyLink: "https://example.com/apply/pitch-day",
    learnMoreLink: "https://example.com/events/pitch-day",
    description:
      "Startup Pitch Day gives aspiring entrepreneurs the chance to present their ideas to investors and mentors. Get feedback and funding opportunities.",
  },
];

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
