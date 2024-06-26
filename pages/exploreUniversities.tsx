import { Input } from "@/components/ui/input";
import { UniCard, UniSectionCard } from "@/components/uniCard";

export default function ExploreUniversities() {
  return (
    <section className="w-full pt-12 md:pt-16 lg:pt-18">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="grid gap-1">
              <h1 className="text-3xl font-bold tracking-tight">
                Top Universities
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Explore the best universities around the world.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Input
                className="w-full md:w-[300px]"
                placeholder="Search universities..."
              />
            </div>
          </div>
          <div className="grid md:gap-3 lg:grid-cols-6">
            <div className="grid col-span-4 gap-3">
              <UniCard
                name={"Massachusetts Institute of Technology"}
                rank={1}
                location="Cambridge, MA, USA"
              />
              <UniCard
                name={"Stanford University"}
                rank={2}
                location={"Cambridge, MA, USA"}
              />
              <UniCard
                name={"California Institute of Technology"}
                rank={3}
                location={"Cambridge, MA, USA"}
              />
              <UniCard
                name={"University of Oxford"}
                rank={4}
                location={"Cambridge, MA, USA"}
              />
            </div>
            <div className="col-span-2 pt-8 md:pt-0">
              <h3 className="text-xl font-semibold text-center">
                Read More About the World University Rankings 2024
              </h3>
              <UniSectionCard
                title={"STUDENT INSIGHTS"}
                elements={[
                  {
                    id: 1,
                    title: "Best Universities in World",
                    link: "/abc",
                  },
                  {
                    id: 2,
                    title: "Best Universities in UK",
                    link: "/uk",
                  },
                  {
                    id: 3,
                    title: "Best Universities in INDIA",
                    link: "/ind",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
