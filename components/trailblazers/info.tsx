"use client";

import { Button } from "@/ui/button";

const categories = [
  {
    id: "scientist",
    label: "Scientist and Researchers",
    description:
      "Founders, researchers, and innovators advancing the frontiers of AI through groundbreaking ideas and transformative technologies. They are shaping new possibilities and driving India's leadership in artificial intelligence.",
  },
  {
    id: "changemakers",
    label: "Changemakers",
    description:
      "Leaders and advocates driving social impact through technology, creating inclusive solutions that empower communities and bridge digital divides across India.",
  },
  {
    id: "catalyst",
    label: "Catalyst",
    description:
      "Investors, mentors, and ecosystem builders who fuel innovation by supporting startups, fostering collaborations, and creating opportunities for emerging talent.",
  },
  {
    id: "architects",
    label: "Architects",
    description:
      "Technical visionaries designing the infrastructure and systems that power AI applications, building scalable solutions for real-world challenges.",
  },
];

interface WomenTrailblazerInfoSectionProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function WomenTrailblazerInfoSection({
  activeCategory,
  onCategoryChange,
}: WomenTrailblazerInfoSectionProps) {
  const handleCategoryClick = (categoryId: string) => {
    // Toggle: if clicking the active category, deselect it (show all)
    if (activeCategory === categoryId) {
      onCategoryChange(null);
    } else {
      onCategoryChange(categoryId);
    }
  };

  const activeDesc =
    categories.find((c) => c.id === activeCategory)?.description ||
    "Celebrating the scientists, innovators, entrepreneurs, investors, policy shapers, and technologists driving India's AI and deep tech landscape.";

  return (
    <div className="flex flex-col w-full items-start gap-7">
      <div className="flex flex-col items-start gap-12 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 w-full">
          <div className="flex flex-col max-w-xl items-start gap-4">
            <h1 className="font-montserrat font-medium text-gray-900 text-4xl md:text-5xl leading-normal tracking-tight">
              Women Trailblazer
            </h1>

            <p className="font-montserrat font-normal text-gray-500 text-base leading-relaxed">
              Celebrating the scientists, innovators, entrepreneurs, investors,
              policy shapers, and technologists driving India&apos;s AI and deep
              tech landscape.
            </p>
          </div>

          <p className="max-w-lg font-montserrat font-medium text-gray-900 text-base text-left md:text-right leading-relaxed">
            Choose a category to filter your options. If you want to see
            everything, simply leave all categories unselected.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <Button
                key={category.id}
                variant="outline"
                onClick={() => handleCategoryClick(category.id)}
                className={`flex flex-col w-full h-36 items-start justify-center gap-2 p-4 rounded-tl-3xl rounded-br-3xl transition-all overflow-hidden ${
                  isActive
                    ? "bg-teal-700 border-teal-700 hover:bg-teal-800"
                    : "bg-transparent border-teal-700 hover:bg-teal-700/10"
                }`}
              >
                <span
                  className={`font-montserrat font-semibold text-sm ${
                    isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  The
                </span>
                <span
                  className={`font-montserrat font-medium text-base leading-snug text-left whitespace-normal break-words w-full ${
                    isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.label}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Description */}
      <p className="max-w-xl font-montserrat font-normal text-gray-700 text-base leading-relaxed transition-all">
        {activeDesc}
      </p>
    </div>
  );
}
