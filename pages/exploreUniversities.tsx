"use client";

import { Input } from "@/components/ui/input";
import { UniCard, UniFilterCard, UniSectionCard } from "@/components/uniCard";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUniversities } from "@/utils/query";
import PaginationComponent from "@/components/paginationComponent";
import Loading from "@/components/loading";

export default function ExploreUniversities() {
  const [searchFilter, setSearchFilter] = useState("");
  const [page, setPage] = useState(1);

  // get query param

  // const searchParams = useSearchParams();

  // const query = searchParams?.get("page");
  // const page = parseInt(query || "");
  // console.log("this is page number : " + page);

  const { data, isPending, error } = useQuery({
    queryKey: ["universities", page, searchFilter],
    queryFn: () => getUniversities({ page, searchFilter }),
  });

  // if (isPending)
  //   return (
  //     <div className="min-h-screen">
  //       <Loading />
  //     </div>
  //   );

  if (error) return error?.message;
  // console.log(isPending, error);

  return (
    <section className="w-full pt-12 md:pt-16 lg:pt-18">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="grid gap-1">
              <h2 className="text-center md:text-left font-bold text-3xl w-full text-gray-600">
                Top Universities
              </h2>
              <p className="text-gray-700">
                Explore the best universities around the world.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Input
                className="w-full md:w-[300px]"
                value={searchFilter}
                placeholder="Search universities..."
                onChange={(e) => {
                  setSearchFilter(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="grid md:gap-3 lg:grid-cols-12 pb-7">
            <div className="hidden lg:grid col-span-3 h-min">
              <UniFilterCard
                title={"Filter By Country"}
                elements={[
                  {
                    id: 1,
                    title: "United States",
                    link: "/us",
                  },
                  {
                    id: 2,
                    title: "United Kingdom",
                    link: "/uk",
                  },
                  {
                    id: 3,
                    title: "Canada",
                    link: "/can",
                  },
                  {
                    id: 4,
                    title: "Australia",
                    link: "/aus",
                  },
                  {
                    id: 5,
                    title: "Switzerland",
                    link: "/swz",
                  },
                ]}
              />
              <UniFilterCard
                title={"Filter By Fees"}
                elements={[
                  {
                    id: 1,
                    title: "$5k - $10k",
                    link: "/abc",
                  },
                  {
                    id: 2,
                    title: "$11k - $20k",
                    link: "/uk",
                  },
                  {
                    id: 3,
                    title: "$21k - $100k",
                    link: "/ind",
                  },
                ]}
              />
              <UniFilterCard
                title={"Filter By Examination"}
                elements={[
                  {
                    id: 1,
                    title: "IELTS",
                    link: "/abc",
                  },
                  {
                    id: 2,
                    title: "TOEFL",
                    link: "/uk",
                  },
                  {
                    id: 3,
                    title: "Duolingo",
                    link: "/ind",
                  },
                  {
                    id: 4,
                    title: "GRE",
                    link: "/ind",
                  },
                  {
                    id: 5,
                    title: "GMAT",
                    link: "/ind",
                  },
                  {
                    id: 6,
                    title: "PTE",
                    link: "/ind",
                  },
                ]}
              />
            </div>
            <div className="grid col-span-9 gap-3">
              {isPending ? (
                <Loading />
              ) : (
                data?.data.map((uni: any) => (
                  <UniCard key={uni.uni_id} data={uni} />
                ))
              )}
            </div>
          </div>
        </div>
        <PaginationComponent page={page} setPage={setPage} />
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
