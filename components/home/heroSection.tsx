import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/button";

export function HeroSection() {
  return (
    <section className="flex flex-col w-full max-w-3xl items-center gap-8 sm:gap-12 mx-auto px-4">
      <div className="flex flex-col items-center gap-3 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-12 py-0.5 rounded-full flex-wrap justify-center">
              <div className="font-montserrat font-normal text-gray-500 text-xs text-center tracking-tight leading-3 whitespace-nowrap">
                An initiative by
              </div>

              <div className="flex flex-col w-32 sm:w-46 items-start gap-8">
                <Image
                  className="w-32 sm:w-42 h-10 sm:h-12.5"
                  width={169}
                  height={51}
                  alt="Initiative logo"
                  src="https://c.animaapp.com/mjvqb3fs5p8iw8/img/image-5.png"
                />
              </div>

              <div className="font-montserrat font-normal text-gray-500 text-xs text-center tracking-tight leading-3 whitespace-nowrap">
                Supported by
              </div>

              <Image
                className="w-16 sm:w-22 h-10 sm:h-12.5 object-cover"
                width={87}
                height={50}
                alt="Mphasis foundation"
                src="https://c.animaapp.com/mjvqb3fs5p8iw8/img/mphasis-foundation-1.png"
              />
            </div>

            <h1 className="w-full font-montserrat font-normal text-gray-900 text-3xl sm:text-4xl lg:text-6xl text-center tracking-tighter leading-tight sm:leading-16 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
              <span className="font-medium tracking-tight">
                One - Stop Shop for{" "}
              </span>

              <span className="font-serif italic tracking-tight">
                Women Innovators
              </span>
            </h1>
          </div>

          <p className="w-full max-w-xl font-montserrat font-normal text-gray-900 text-sm sm:text-base text-center tracking-normal leading-relaxed -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
            A platform to participate, learn and grow together
          </p>
        </div>
      </div>

      <div className="inline-flex items-center gap-3 sm:gap-5 flex-wrap justify-center -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <Button asChild className="h-auto px-5 sm:px-8 py-3 sm:py-4 bg-purple-800 hover:bg-purple-900 rounded-full transition-colors">
          <Link href="/opportunity">
            <span className="font-montserrat font-medium text-white text-sm sm:text-base tracking-normal leading-relaxed whitespace-nowrap">
              Find opportunities
            </span>
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="h-auto px-5 sm:px-8 py-3 sm:py-4 border border-solid border-purple-800 rounded-full hover:bg-purple-800/10 transition-colors"
        >
          <Link href="/hub">
            <span className="font-montserrat font-medium text-gray-900 text-sm sm:text-base tracking-normal leading-relaxed whitespace-nowrap">
              View Data Insights
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
