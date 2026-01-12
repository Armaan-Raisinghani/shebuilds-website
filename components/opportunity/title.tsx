"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/ui/toggle-group";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "high-school", label: "High School" },
  { value: "university", label: "University" },
  { value: "entrepreneurs", label: "Entrepreneurs" },
  { value: "professionals", label: "Professionals" },
];

interface GrantsAndFellowshipsTitleSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function GrantsAndFellowshipsTitleSection({
  searchQuery,
  onSearchChange,
  selectedFilter,
  onFilterChange,
}: GrantsAndFellowshipsTitleSectionProps) {
  return (
    <section className="flex flex-col w-full items-start gap-4 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="flex w-full max-w-md items-center gap-3 px-4 py-2 rounded-full border border-gray-400">
        <SearchIcon className="w-4 h-4 text-gray-500 shrink-0" />
        <Input
          type="text"
          placeholder="Search by name, company or type"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border-0 p-0 h-auto font-montserrat font-normal text-gray-500 text-sm tracking-normal leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
        />
      </div>
      
      <div className="inline-flex items-start gap-2.5 p-1 bg-gray-100 rounded-md">
        <ToggleGroup
          type="single"
          value={selectedFilter}
          onValueChange={(value) => {
            if (value) onFilterChange(value);
          }}
          className="inline-flex flex-wrap items-center gap-1"
        >
          {filterOptions.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="px-3.5 py-1.5 font-montserrat text-gray-900 text-xs tracking-normal leading-normal data-[state=on]:bg-white data-[state=on]:font-medium data-[state=on]:shadow-sm data-[state=off]:font-normal rounded h-auto transition-all"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </section>
  );
}
