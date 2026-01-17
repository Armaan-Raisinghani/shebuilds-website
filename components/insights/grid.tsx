"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "@/ui/card";
import { Button } from "@/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

interface Insight {
  title: string;
  category: string;
  images: string[];
}

interface InsightsGridSectionProps {
  data: Insight[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (value: string) => void;
}

function InsightCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100">
        <Image
          className="w-full h-full object-cover transition-opacity duration-300"
          fill
          alt={`${title} - Image ${currentImageIndex + 1}`}
          src={images[currentImageIndex]}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-teal-700/80 hover:bg-teal-700 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-teal-700/80 hover:bg-teal-700 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-gray-900/60 text-white text-xs px-2 py-1 rounded-full font-montserrat">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex
                  ? "bg-teal-700"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function InsightsGridSection({
  data,
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  startIndex,
  endIndex,
  onPageChange,
  onItemsPerPageChange,
}: InsightsGridSectionProps) {
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push("...");
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (data.length === 0) {
    return (
      <section className="flex flex-col w-full items-center gap-8 py-12">
        <p className="font-montserrat font-normal text-gray-500 text-lg">
          No insights found.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col gap-10">
      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {data.map((insight, index) => (
          <article
            key={index}
            className="-translate-y-4 animate-fade-in opacity-0"
            style={
              { "--animation-delay": `${index * 100}ms` } as React.CSSProperties
            }
          >
            <Card className="border-0 shadow-none bg-transparent cursor-pointer transition-transform hover:scale-102 group">
              <CardContent className="p-0 flex flex-col gap-3">
                {/* Image Carousel */}
                <InsightCarousel images={insight.images} title={insight.title} />

                {/* Title only - no small text */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-montserrat font-medium text-gray-900 text-base tracking-normal leading-relaxed group-hover:text-teal-700 transition-colors">
                    {insight.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex w-full items-center justify-between flex-wrap gap-4 pt-4">
        <div className="inline-flex items-center gap-4">
          <p className="font-montserrat font-normal text-sm tracking-normal leading-relaxed whitespace-nowrap">
            <span className="text-gray-500">Showing </span>
            <span className="text-gray-900">{startIndex + 1} - {endIndex}</span>
            <span className="text-gray-500"> of </span>
            <span className="text-gray-900">{totalItems}</span>
          </p>

          <Select 
            value={String(itemsPerPage)} 
            onValueChange={onItemsPerPageChange}
          >
            <SelectTrigger className="w-16 h-8 px-2 py-0 bg-gray-100 border-0 font-montserrat font-normal text-gray-900 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="15">15</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <nav className="inline-flex items-center gap-2" aria-label="Pagination">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 p-0 hover:bg-gray-100 disabled:opacity-50"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
          </Button>

          {getPageNumbers().map((page, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-8 h-8 p-0 font-montserrat font-normal text-sm tracking-normal leading-relaxed ${
                page === currentPage
                  ? "bg-gray-100 text-gray-900 hover:bg-gray-100"
                  : page === "..."
                  ? "text-gray-500 hover:bg-transparent cursor-default"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
              aria-label={page === "..." ? "More pages" : `Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => {
                if (typeof page === "number") {
                  onPageChange(page);
                }
              }}
              disabled={page === "..."}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 p-0 hover:bg-gray-100 disabled:opacity-50"
            aria-label="Next page"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-500" />
          </Button>
        </nav>
      </div>
    </section>
  );
}
