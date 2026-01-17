import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/button";

export function LearningHubSection() {
  const image = "https://c.animaapp.com/mjvqb3fs5p8iw8/img/image-28.png";

  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* Image Grid */}
      <div className="w-full lg:w-xl -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
        <Image
          className="w-full h-auto aspect-video object-cover rounded-lg hover:scale-105 transition-transform"
          width={2000}
          height={1500}
          alt={`Learning hub image`}
          src={image}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full lg:w-96 items-start gap-6 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-montserrat font-medium text-gray-900 text-2xl sm:text-3xl tracking-normal leading-normal">
            Learning Hub
          </h2>

          <p className="font-montserrat font-normal text-gray-500 text-sm sm:text-base tracking-normal leading-relaxed">
            The Learning Hub curates open articles, research, podcasts, videos, stories of women leaders, and practical tools that deepen understanding of AI and its applications. It brings together perspectives from experts, creators, and practitioners to support continuous learning.
          </p>
        </div>

        <Button asChild className="h-auto px-4 py-2 bg-teal-700 hover:bg-teal-800 rounded-full transition-colors">
          <Link href="/hub">
            <span className="font-montserrat font-medium text-white text-base tracking-normal leading-relaxed whitespace-nowrap">
              Start learning
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
