"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Button } from "@/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

interface GrantItem {
  type: string;
  name: string;
  offeredBy: string;
  award: string;
  category: string;
  url?: string;
}

interface GrantsAndFellowshipsListSectionProps {
  data: GrantItem[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (value: string) => void;
}

export function GrantsAndFellowshipsListSection({
  data,
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  startIndex,
  endIndex,
  onPageChange,
  onItemsPerPageChange,
}: GrantsAndFellowshipsListSectionProps) {
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
          No opportunities found matching your criteria.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full items-start gap-8">
      {/* Table Header */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-200">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 pr-4 w-32 font-montserrat font-medium text-gray-900 text-base">
                Type
              </th>
              <th className="text-left py-3 px-4 font-montserrat font-medium text-gray-900 text-base">
                Name
              </th>
              <th className="text-left py-3 px-4 w-48 font-montserrat font-medium text-gray-900 text-base">
                Offered By
              </th>
              <th className="text-left py-3 px-4 w-56 font-montserrat font-medium text-gray-900 text-base">
                Award / Grant
              </th>
              <th className="text-center py-3 pl-4 w-28 font-montserrat font-medium text-gray-900 text-base">
                Learn More
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((grant, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 pr-4 font-montserrat font-normal text-gray-900 text-base">
                  {grant.type}
                </td>
                <td className="py-4 px-4 font-montserrat font-normal text-gray-900 text-base leading-relaxed">
                  {grant.name}
                </td>
                <td className="py-4 px-4 font-montserrat font-normal text-gray-900 text-base leading-relaxed">
                  {grant.offeredBy}
                </td>
                <td className="py-4 px-4 font-montserrat font-normal text-gray-900 text-base leading-relaxed">
                  {grant.award}
                </td>
                <td className="py-4 pl-4 text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 p-0 hover:bg-gray-100"
                    aria-label={`Learn more about ${grant.name}`}
                    onClick={() => grant.url && window.open(grant.url, '_blank')}
                  >
                    <ExternalLinkIcon className="w-5 h-5 text-gray-700" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex w-full items-center justify-between flex-wrap gap-4">
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
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
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
