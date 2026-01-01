"use client";

import { useState } from "react";
import { WomenTrailblazerInfoSection } from "@/components/trailblazers/info";
import { ProfilesGridSection } from "@/components/trailblazers/profilesGrid";

export default function TrailblazersPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>("scientist");

  return (
    <>
      {/* Page Header & Category Filter */}
      <section className="relative w-full px-20 py-12 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="max-w-7xl mx-auto">
          <WomenTrailblazerInfoSection
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="relative w-full px-20 py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-7xl mx-auto">
          <ProfilesGridSection activeCategory={activeCategory} />
        </div>
      </section>
    </>
  );
}
