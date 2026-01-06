"use client";

import { useState, useMemo } from "react";
import { GrantsAndFellowshipsListSection } from "@/components/opportunity/list";
import { GrantsAndFellowshipsTitleSection } from "@/components/opportunity/title";

const grantsData = [
  { type: "Fellowship", name: "Arts for Change Fellowship", offeredBy: "Creative Minds", award: "$5,000 stipend", category: "professionals" },
  { type: "Grant", name: "Green Innovations Grant", offeredBy: "EcoFuture", award: "Up to $20,000", category: "entrepreneurs" },
  { type: "Scholarship", name: "Tech for Tomorrow Scholarship", offeredBy: "Future Innovators", award: "Full tuition", category: "university" },
  { type: "Fellowship", name: "Literary Voices Fellowship", offeredBy: "WriteWell", award: "$10,000 grant", category: "professionals" },
  { type: "Grant", name: "Women's Empowerment Grant", offeredBy: "EmpowerHer", award: "Up to $15,000", category: "entrepreneurs" },
  { type: "Scholarship", name: "Global Leaders Scholarship", offeredBy: "World Connect", award: "Partial tuition support", category: "university" },
  { type: "Fellowship", name: "Health Innovators Fellowship", offeredBy: "CareForward", award: "INR 625,000 stipend", category: "professionals" },
  { type: "Grant", name: "Cultural Heritage Grant", offeredBy: "Heritage Fund", award: "Up to $25,000", category: "entrepreneurs" },
  { type: "Scholarship", name: "STEM Pathways Scholarship", offeredBy: "Innovate STEM", award: "$3,000 award", category: "high-school" },
  { type: "Fellowship", name: "Research for Change Fellowship", offeredBy: "Impact Research", award: "$12,000 stipend", category: "professionals" },
  { type: "Grant", name: "Youth Art Initiative Grant", offeredBy: "ArtSpark", award: "Up to $10,000", category: "high-school" },
  { type: "Scholarship", name: "Diversity in STEM Scholarship", offeredBy: "Equal Access", award: "$4,000 award", category: "university" },
  { type: "Fellowship", name: "Global Health Fellowship", offeredBy: "Health for All", award: "$9,000 stipend", category: "professionals" },
  { type: "Grant", name: "Community Development Grant", offeredBy: "Build Together", award: "Up to $50,000", category: "entrepreneurs" },
  { type: "Scholarship", name: "Multicultural Scholarship Program", offeredBy: "Unity Scholarship Fund", award: "Full tuition for selected candidates", category: "university" },
  { type: "Fellowship", name: "Climate Action Fellowship", offeredBy: "Green Future", award: "$8,000 stipend", category: "university" },
  { type: "Grant", name: "Startup Boost Grant", offeredBy: "TechVenture", award: "Up to $100,000", category: "entrepreneurs" },
  { type: "Scholarship", name: "Young Scientists Scholarship", offeredBy: "Science Academy", award: "$2,500 award", category: "high-school" },
  { type: "Fellowship", name: "Digital Arts Fellowship", offeredBy: "Creative Tech", award: "$7,500 stipend", category: "professionals" },
  { type: "Grant", name: "Social Impact Grant", offeredBy: "Change Makers", award: "Up to $30,000", category: "entrepreneurs" },
  { type: "Scholarship", name: "Future Engineers Scholarship", offeredBy: "Engineering Society", award: "50% tuition", category: "university" },
  { type: "Fellowship", name: "Women in Tech Fellowship", offeredBy: "TechWomen", award: "$15,000 stipend", category: "professionals" },
  { type: "Grant", name: "Innovation Hub Grant", offeredBy: "InnovateLab", award: "Up to $75,000", category: "entrepreneurs" },
  { type: "Scholarship", name: "STEM Girls Scholarship", offeredBy: "Girls Who Code", award: "$5,000 award", category: "high-school" },
  { type: "Fellowship", name: "AI Research Fellowship", offeredBy: "DeepMind", award: "$20,000 stipend", category: "university" },
];

export default function OpportunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  // Filter and search data
  const filteredData = useMemo(() => {
    return grantsData.filter((item) => {
      // Category filter
      const matchesCategory = selectedFilter === "all" || item.category === selectedFilter;
      
      // Search filter - search across all fields
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === "" || 
        item.type.toLowerCase().includes(searchLower) ||
        item.name.toLowerCase().includes(searchLower) ||
        item.offeredBy.toLowerCase().includes(searchLower) ||
        item.award.toLowerCase().includes(searchLower);
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedFilter]);

  // Pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Reset to page 1 when filter or search changes
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative w-full px-20 py-12 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="font-montserrat font-medium text-gray-900 text-5xl tracking-normal leading-normal text-center">
            Opportunity Repository
          </h1>

          <p className="max-w-2xl font-montserrat font-normal text-gray-500 text-base text-center tracking-normal leading-relaxed mt-4">
            A repository that brings together scholarships, fellowships,
            accelerators, grants, courses, and programs that open doors for
            women in AI and deep tech.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative w-full px-20 py-4 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-7xl mx-auto">
          <GrantsAndFellowshipsTitleSection 
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
      </section>

      {/* List Section */}
      <section className="w-full px-20 py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="max-w-7xl mx-auto">
          <GrantsAndFellowshipsListSection 
            data={paginatedData}
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            startIndex={startIndex}
            endIndex={endIndex}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </section>
    </>
  );
}
