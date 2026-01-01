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
    description:
      "SheLeads Tech is a hackathon focused on empowering women in technology. Participants will collaborate to develop innovative solutions, network with industry leaders, and showcase their skills.",
  },
  {
    id: 2,
    title: "SheInnovates",
    date: "20 / 01 / 26",
    category: "Hackathon",
    description:
      "SheInnovates is a dynamic hackathon that encourages women to leverage technology for social impact. Join us to create, connect, and contribute to a better future.",
  },
  {
    id: 3,
    title: "AI Ideas Challenge",
    date: "15 / 02 / 26",
    category: "Ideathon",
    description:
      "AI Ideas Challenge brings together creative minds to brainstorm and pitch innovative AI solutions. Present your ideas to industry experts and win exciting prizes.",
  },
  {
    id: 4,
    title: "Future Tech Talks",
    date: "10 / 03 / 26",
    category: "Speaker Event",
    description:
      "Future Tech Talks features inspiring speakers from the tech industry sharing insights on emerging technologies, career growth, and the future of innovation.",
  },
  {
    id: 5,
    title: "Innovation Sprint",
    date: "25 / 03 / 26",
    category: "Ideathon",
    description:
      "Innovation Sprint is an intensive ideation session where participants develop creative solutions to real-world challenges in just 48 hours.",
  },
  {
    id: 6,
    title: "Women in AI Summit",
    date: "05 / 04 / 26",
    category: "Speaker Event",
    description:
      "Women in AI Summit brings together leaders, researchers, and practitioners to discuss the impact of women in artificial intelligence and machine learning.",
  },
];

interface UpcomingEventsSectionProps {
  activeFilter?: string;
}

export function UpcomingEventsSection({ activeFilter = "All" }: UpcomingEventsSectionProps) {
  const filteredEvents = activeFilter === "All" 
    ? eventsData 
    : eventsData.filter(event => event.category === activeFilter);

  return (
    <div className="w-full py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <Card
              key={event.id}
              className="flex flex-col gap-4 border-0 shadow-none -translate-y-4 animate-fade-in opacity-0"
              style={
                { "--animation-delay": `${index * 200}ms` } as React.CSSProperties
              }
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div className="relative w-full h-64 bg-teal-700 rounded-lg overflow-hidden">
                  <Badge className="absolute top-3 left-3 bg-gray-900/20 hover:bg-gray-900/20 text-white border-0 rounded-full px-2 py-1 h-auto text-xs font-normal font-montserrat">
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
                      className="border-teal-700 text-gray-800 rounded px-2 py-0.5 h-auto text-xs font-medium font-montserrat"
                    >
                      {event.date}
                    </Badge>
                  </div>

                  <p className="h-20 font-montserrat font-normal text-gray-800 text-sm leading-relaxed overflow-hidden text-ellipsis line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-start gap-4 w-full">
                  <Button className="flex-1 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded px-8 py-2 h-auto text-sm font-medium font-montserrat transition-colors">
                    Apply Now
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1 border-amber-400 hover:bg-amber-400/10 text-gray-900 rounded px-8 py-2 h-auto text-sm font-medium font-montserrat transition-colors"
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
    </div>
  );
}
