import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/button";

export function OpportunityRepositorySection() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
      <div className="flex flex-col w-full lg:w-96 items-start gap-6 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-montserrat font-medium text-gray-900 text-2xl sm:text-3xl tracking-normal leading-normal">
            Opportunity Repository
          </h2>

          <p className="font-montserrat font-normal text-gray-500 text-sm sm:text-base tracking-normal leading-relaxed">
            Find scholarships, fellowships, accelerators, grants, courses, and
            programs for women in AI and tech.
          </p>
        </div>

        <Button asChild className="h-auto px-4 py-2 bg-teal-700 hover:bg-teal-800 rounded-full transition-colors">
          <Link href="/opportunity">
            <span className="font-montserrat font-medium text-white text-base tracking-normal leading-relaxed whitespace-nowrap">
              Find out more
            </span>
          </Link>
        </Button>
      </div>

      <Image
        className="w-full lg:max-w-xl h-auto rounded-lg object-cover -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]"
        width={594}
        height={374}
        alt="Opportunity Repository Interface"
        src="https://c.animaapp.com/mjvqb3fs5p8iw8/img/image-27.png"
      />
    </section>
  );
}
