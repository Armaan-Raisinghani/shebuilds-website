"use client";

import { useState, useMemo } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/ui/input";
import { ArticlesGridSection } from "@/components/hub/grid";

const articlesData = [
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8.png", author: "Kumar Utkarsh", date: "29 March 2025", title: "AI Ethics in Practice: A Guide for Responsible Innovation", category: "AI" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-1.png", author: "Jenna Lee", date: "15 April 2025", title: "Understanding Quantum Computing: Basics and Applications", category: "Technology" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-2.png", author: "Mohammed Ali", date: "22 April 2025", title: "The Rise of Renewable Energy: Trends and Future", category: "Sustainability" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-3.png", author: "Sofia Reyes", date: "5 May 2025", title: "Navigating the Metaverse: Opportunities and Risks", category: "Technology" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-4.png", author: "Liam Chen", date: "12 May 2025", title: "Blockchain Beyond Cryptocurrency: Real-World Uses", category: "Technology" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-5.png", author: "Nina Patel", date: "19 May 2025", title: "Cybersecurity in an Increasingly Digital World", category: "Technology" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-6.png", author: "Hassan Youssef", date: "26 May 2025", title: "Designing for Accessibility: Best Practices for Inclusivity", category: "Design" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-7.png", author: "Ella Johnson", date: "2 June 2025", title: "The Future of Autonomous Vehicles: Challenges Ahead", category: "AI" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-8.png", author: "Ravi Kumar", date: "9 June 2025", title: "Sustainable Urban Design: Concepts and Innovations", category: "Sustainability" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8.png", author: "Sarah Chen", date: "16 June 2025", title: "Machine Learning in Healthcare: Current Applications", category: "AI" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-1.png", author: "Alex Thompson", date: "23 June 2025", title: "The Future of Remote Work: Tools and Strategies", category: "Technology" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-2.png", author: "Maya Williams", date: "30 June 2025", title: "Women Leaders in Tech: Inspiring Stories", category: "Leadership" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-3.png", author: "David Park", date: "7 July 2025", title: "Cloud Computing Trends for 2025 and Beyond", category: "Technology" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-4.png", author: "Priya Sharma", date: "14 July 2025", title: "Building Inclusive AI Systems", category: "AI" },
  { image: "https://c.animaapp.com/mk2zlxjave2oPd/img/rectangle-8-5.png", author: "James Wilson", date: "21 July 2025", title: "Data Privacy in the Age of AI", category: "AI" },
];

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
      <section className="relative w-full px-20 py-12 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="font-montserrat font-medium text-gray-900 text-5xl tracking-normal leading-normal text-center">
            Learning Hub
          </h1>

          <p className="max-w-2xl font-montserrat font-normal text-gray-500 text-base text-center tracking-normal leading-relaxed mt-4">
            Open articles, research, podcasts, videos, stories of women leaders,
            and practical tools that deepen understanding of AI and its
            applications.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative w-full px-20 py-4 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
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
      <section className="w-full px-20 py-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
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
