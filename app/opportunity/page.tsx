"use client";

import { useState, useMemo } from "react";
import { GrantsAndFellowshipsListSection } from "@/components/opportunity/list";
import { GrantsAndFellowshipsTitleSection } from "@/components/opportunity/title";
import opportunitiesJson from "@/public/data/opportunities.json";

const grantsData = opportunitiesJson.opportunities;

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
      <section className="relative w-full px-4 sm:px-8 lg:px-20 py-8 sm:py-12 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="font-montserrat font-medium text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-normal leading-normal text-center">
            Opportunity Repository
          </h1>

          <p className="max-w-2xl font-montserrat font-normal text-gray-500 text-base text-center tracking-normal leading-relaxed mt-4">
            The Opportunity Repository is designed as a living growing repository that brings together scholarships, fellowships, accelerators, grants, courses, and programs that open doors for women in AI and deep tech.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 py-4 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
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
      <section className="w-full px-4 sm:px-8 lg:px-20 py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
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
