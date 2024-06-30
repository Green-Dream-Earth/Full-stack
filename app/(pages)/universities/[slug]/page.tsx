"use client";

import { useParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UniFilterCard, UniSectionCard } from "@/components/uniCard";
import { MapPinIcon } from "lucide-react";

import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { UniCourseCard } from "@/components/uniCourseCard";
import { getUniversity } from "@/utils/query";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/loading";

export default function UniversityDetails() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const params = useParams<{ slug: string }>();

  console.log("this is params slug " + params?.slug);

  const { data, isPending, error } = useQuery({
    queryKey: ["universities", params?.slug],
    queryFn: () => getUniversity(params?.slug),
  });

  if (isPending)
    return (
      <div className="min-h-screen">
        <Loading />
      </div>
    );
  if (error) return error?.message;
  console.log(data, isPending, error);

  // const { data, isPending, error } = useQuery({
  //   queryKey: ["universities"],
  //   queryFn: getUniversity,
  // });

  // check if the slug is present in the database and fetch it

  // const uni = universityData.find((uni) => uni.slug === params?.slug);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <h3 className="text-base font-semibold text-gray-600">Overview</h3>
      ),
      children: <TabSection uni={data?.data} />,
    },
    {
      key: "2",
      label: <h3 className="text-base font-semibold text-gray-600">Fees</h3>,
      children: <TabSection uni={data?.data} />,
    },
    {
      key: "3",
      label: (
        <h3 className="text-base font-semibold text-gray-600">Placements</h3>
      ),
      children: <TabSection uni={data?.data} />,
    },
  ];

  return (
    <main className="container">
      <section className="pt-8 flex flex-col justify-between">
        {/* <div className="h-24 w-full top-0">
          <Image
            src={data?.data.university_gallery[0]}
            alt="University image"
            height={240}
            width={1000}
          />
        </div> */}
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-left font-bold text-2xl p-0">
              {data?.data.university_name}
            </h2>
            <div className="flex justify-center items-center gap-2">
              <MapPinIcon className="flex w-4 h-4" />
              <p className="flex text-sm text-gray-500 mt-0 w-full">
                {data?.data.country}
              </p>
            </div>
          </div>
          <div className="">
            {/* <button className="bg-green-600 text-white font-semibold text-sm p-2 px-8 rounded-full border border-slate-300">
              Apply Now
            </button> */}
            <button className="bg-gray-200 text-gray-800 text-xs font-medium p-3 rounded-full border border-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bookmark"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <div className="mb-12 grid md:gap-3 lg:grid-cols-6 pb-7">
        <div className="grid col-span-4 h-min mt-4">
          {/* <Tabs
            className="grid col-span-4 h-min"
            defaultActiveKey="1"
            items={items}
          /> */}
          <TabSection uni={data?.data} />
        </div>
        <div className="grid col-span-2 mt-8">
          <UniSectionCard title={"Popular & recent articles"} />
        </div>
      </div>
    </main>
  );
}

function TabSection({ uni }: { uni: any }) {
  const router = useRouter();
  return (
    <div className="">
      {/* <Accordion type="single" collapsible className="w-full space-y-7">
        <AccordionItem
          value="item-2"
          className="border p-4 rounded-xl shadow-md"
        >
          <AccordionTrigger className="text-xl mt-0 font-semibold text-gray-700">{`About ${uni?.university_name}`}</AccordionTrigger>
          <AccordionContent>
            <p className="text-base text-muted-foreground mt-2">
              {uni?.university_description}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}

      {uni?.university_description ? (
        <div className="w-full space-y-7 border rounded-xl mt-4 p-6 shadow-lg">
          <div className="flex gap-4">
            <h3 className="text-xl mt-0 font-semibold text-gray-700">{`About ${uni?.university_name}`}</h3>
            <div className="flex gap-2">
              <button className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
                {`Times (THE) Ranking ${uni.times_rankings}`}
              </button>

              <button className="bg-gray-200 text-blue-500 text-xs font-medium px-2.5 py-1 rounded-md">
                {`Qs World Ranking ${uni.qs_rankings}`}
              </button>
            </div>
          </div>
          <p className="text-base text-muted-foreground mt-2 line-clamp-4 hover:line-clamp-none ">
            {uni?.university_description}
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="w-full space-y-7 border rounded-xl mt-4 p-6 shadow-lg">
        <h3 className="text-xl mt-0 font-semibold text-gray-700">{`Programs at ${uni?.university_name}`}</h3>
        <div className="space-y-4">
          {uni?.degree.map((program: any) => (
            <UniCourseCard
              key={crypto.randomUUID()}
              program={program}
              onClick={() => {
                router.push(`/universities/${uni._id}/${program.name}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
