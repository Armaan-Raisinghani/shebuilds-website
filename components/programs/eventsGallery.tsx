import Image from "next/image";
import { Badge } from "@/ui/badge";

const eventGalleryData = [
  {
    id: 1,
    imageUrl: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8.png",
    width: 300,
    eventName: "SheLeads Tech",
  },
  {
    id: 2,
    imageUrl: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-1.png",
    width: 400,
    eventName: "Innovation Summit",
  },
  {
    id: 3,
    imageUrl: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-2.png",
    width: 350,
    eventName: "AI Workshop",
  },
  {
    id: 4,
    imageUrl: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-3.png",
    width: 400,
    eventName: "Tech Talks",
  },
  {
    id: 5,
    imageUrl: "https://c.animaapp.com/mjvrhj0c9cynBP/img/rectangle-8-4.png",
    width: 320,
    eventName: "Hackathon Finals",
  },
];

export function EventGallerySection() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-marquee">
        {/* First set of images */}
        <div className="flex items-center gap-4 shrink-0">
          {eventGalleryData.map((event) => (
            <article
              key={`first-${event.id}`}
              className="relative h-64 shrink-0 group cursor-pointer"
              style={{ width: event.width }}
            >
              <Image
                className="h-64 rounded-lg object-cover transition-transform group-hover:scale-105"
                width={event.width}
                height={256}
                alt={`${event.eventName} gallery image`}
                src={event.imageUrl}
              />

              <Badge
                variant="secondary"
                className="absolute top-3 left-3 bg-gray-900/40 hover:bg-gray-900/60 border-0 px-3 py-1.5 rounded-full transition-colors"
              >
                <span className="font-normal text-white text-xs leading-relaxed whitespace-nowrap font-montserrat">
                  {event.eventName}
                </span>
              </Badge>
            </article>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-4 shrink-0 ml-4">
          {eventGalleryData.map((event) => (
            <article
              key={`second-${event.id}`}
              className="relative h-64 shrink-0 group cursor-pointer"
              style={{ width: event.width }}
            >
              <Image
                className="h-64 rounded-lg object-cover transition-transform group-hover:scale-105"
                width={event.width}
                height={256}
                alt={`${event.eventName} gallery image`}
                src={event.imageUrl}
              />

              <Badge
                variant="secondary"
                className="absolute top-3 left-3 bg-gray-900/40 hover:bg-gray-900/60 border-0 px-3 py-1.5 rounded-full transition-colors"
              >
                <span className="font-normal text-white text-xs leading-relaxed whitespace-nowrap font-montserrat">
                  {event.eventName}
                </span>
              </Badge>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
