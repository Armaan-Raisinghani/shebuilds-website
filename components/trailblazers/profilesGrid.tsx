import Image from "next/image";
import { Card, CardContent } from "@/ui/card";

const profilesData = [
  {
    image: "https://c.animaapp.com/mjvs483aUsOCsv/img/rectangle-6-7.png",
    name: "Mira Murati",
    title: "Led Development @ ChatGPT",
    category: "scientist",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Morbi pharetra porta duis velit velit nisl",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi pharetra porta duis velit velit nisl vel rhoncus. Egestas sit ullamcorper cursus curabitur neque a enim nibh... ",
  },
  {
    image: "https://c.animaapp.com/mjvs483aUsOCsv/img/rectangle-6-4.png",
    name: "Priya Sharma",
    title: "AI Research Lead @ DeepMind",
    category: "scientist",
    quote:
      "Pushing the boundaries of what machines can learn and understand",
    description:
      "Leading breakthrough research in neural networks and machine learning applications for healthcare and climate science... ",
  },
  {
    image: "https://c.animaapp.com/mjvs483aUsOCsv/img/rectangle-6-6.png",
    name: "Anita Desai",
    title: "Founder @ TechForGood",
    category: "changemakers",
    quote:
      "Technology should serve everyone, not just the privileged few",
    description:
      "Building inclusive AI solutions that bridge the digital divide and empower underserved communities across rural India... ",
  },
  {
    image: "https://c.animaapp.com/mjvs483aUsOCsv/img/rectangle-6-7.png",
    name: "Kavitha Reddy",
    title: "Managing Partner @ AIVentures",
    category: "catalyst",
    quote:
      "Investing in the next generation of AI innovators",
    description:
      "Supporting early-stage AI startups with capital, mentorship, and strategic guidance to scale their impact... ",
  },
  {
    image: "https://c.animaapp.com/mjvs483aUsOCsv/img/rectangle-6-4.png",
    name: "Sunita Patel",
    title: "Chief Architect @ CloudAI",
    category: "architects",
    quote:
      "Building the infrastructure that powers tomorrow's AI",
    description:
      "Designing scalable cloud architectures that enable enterprises to deploy AI at scale with reliability and efficiency... ",
  },
  {
    image: "https://c.animaapp.com/mjvs483aUsOCsv/img/rectangle-6-6.png",
    name: "Deepa Krishnan",
    title: "Policy Director @ AI Ethics Council",
    category: "changemakers",
    quote:
      "Shaping responsible AI policies for a better future",
    description:
      "Working with governments and organizations to establish ethical guidelines and regulations for AI development... ",
  },
  {
    image: "https://c.animaapp.com/mjvs483aUsOCsv/img/rectangle-6-6.png",
    name: "Lakshmi Rao",
    title: "CTO @ HealthAI",
    category: "architects",
    quote:
      "Transforming healthcare through intelligent systems",
    description:
      "Architecting AI-powered diagnostic tools that are making quality healthcare accessible to millions... ",
  },
  {
    image: "https://c.animaapp.com/mjvs483aUsOCsv/img/rectangle-6-7.png",
    name: "Meera Iyer",
    title: "Ecosystem Lead @ AI Hub",
    category: "catalyst",
    quote:
      "Connecting innovators to build a thriving AI ecosystem",
    description:
      "Creating platforms and programs that foster collaboration between startups, academia, and industry... ",
  },
];

interface ProfilesGridSectionProps {
  activeCategory: string | null;
}

export function ProfilesGridSection({ activeCategory }: ProfilesGridSectionProps) {
  const filteredProfiles = activeCategory
    ? profilesData.filter((profile) => profile.category === activeCategory)
    : profilesData;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            className="flex flex-col bg-white rounded-2xl border border-teal-700 shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-0 -translate-y-4 animate-fade-in"
            style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
          >
            <Image
              className="w-full h-52 rounded-t-2xl object-cover"
              width={280}
              height={210}
              alt={`${profile.name} profile`}
              src={profile.image}
            />
            <CardContent className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-0.5">
                <h3 className="font-montserrat font-medium text-gray-900 text-xl leading-normal">
                  {profile.name}
                </h3>
                <p className="font-montserrat font-medium text-purple-800 text-xs leading-normal">
                  {profile.title}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <blockquote className="font-serif font-bold italic text-teal-700 text-sm leading-relaxed">
                  &quot;{profile.quote}&quot;
                </blockquote>
                <p className="font-montserrat font-normal text-xs leading-relaxed">
                  <span className="text-gray-500">{profile.description}</span>
                  <button className="text-teal-700 hover:underline transition-all">
                    Read more
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProfiles.length === 0 && (
        <div className="text-center py-16">
          <p className="font-montserrat text-gray-500 text-lg">
            No profiles found for this category.
          </p>
        </div>
      )}
    </div>
  );
}
