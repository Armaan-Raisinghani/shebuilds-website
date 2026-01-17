"use client";

import { useState, useMemo } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/ui/input";
import { ArticlesGridSection } from "@/components/hub/grid";
import articlesJson from "@/public/data/articles.json";

const articlesData = articlesJson.articles;

export default function HubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Filter data by search
  const filteredData = useMemo(() => {
    if (!searchQuery) return articlesData;
    const searchLower = searchQuery.toLowerCase();
    return articlesData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.author.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower)
    );
  }, [searchQuery]);

  // Pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = filteredData.slice(startIndex, endIndex);

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
            Learning Hub
          </h1>

          <p className="max-w-2xl font-montserrat font-normal text-gray-500 text-base text-center tracking-normal leading-relaxed mt-4">
            The Learning Hub curates open articles, research, podcasts, videos, stories of women leaders, and practical tools that deepen understanding of AI and its applications. It brings together perspectives from experts, creators, and practitioners to support continuous learning.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-20 py-4 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-7xl mx-auto">
          <div className="flex w-full max-w-md items-center gap-3 px-4 py-2 rounded-full border border-gray-400">
            <SearchIcon className="w-4 h-4 text-gray-500 shrink-0" />
            <Input
              type="text"
              placeholder="Search by title, author or category"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="border-0 p-0 h-auto font-montserrat font-normal text-gray-500 text-sm tracking-normal leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full px-4 sm:px-8 lg:px-20 py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="max-w-7xl mx-auto">
          <ArticlesGridSection 
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
