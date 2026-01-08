import Image from "next/image";
import { Card, CardContent } from "@/ui/card";
import profilesJson from "@/public/data/profiles.json";

const profilesData = profilesJson.profiles;

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
