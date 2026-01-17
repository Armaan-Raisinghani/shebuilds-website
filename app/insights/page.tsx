"use client";

import { useState, useMemo } from "react";
import { InsightsGridSection } from "@/components/insights/grid";
import insightsJson from "@/public/data/insights.json";

const insightsData = insightsJson.insights;

export default function InsightsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Pagination (no search/filter)
  const totalItems = insightsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = insightsData.slice(startIndex, endIndex);

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
            Insights Hub
          </h1>

          <p className="max-w-2xl font-montserrat font-normal text-gray-500 text-base text-center tracking-normal leading-relaxed mt-4">
            Trends & Insights brings together data, stories, and emerging shifts shaping the future of women in AI. Featuring research, reports, interviews, and visual snapshots that decode ecosystem shifts, spark ideas and influence policy and action.
          </p>
        </div>
      </section>

      {/* No Search Section - removed as per requirement */}

      {/* Insights Grid */}
      <section className="w-full px-4 sm:px-8 lg:px-20 py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-7xl mx-auto">
          <InsightsGridSection 
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
