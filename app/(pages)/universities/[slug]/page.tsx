"use client";

import { universityData } from "@/data/staticData";
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

export default function UniversityDetails() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const params = useParams<{ slug: string }>();

  console.log(params?.slug);
  // check if the slug is present in the database and fetch it

  const uni = universityData.find((uni) => uni.slug === params?.slug);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <h3 className="text-base font-semibold text-gray-600">Overview</h3>
      ),
      children: <TabSection uni={uni} />,
    },
    {
      key: "2",
      label: <h3 className="text-base font-semibold text-gray-600">Fees</h3>,
      children: <TabSection uni={uni} />,
    },
    {
      key: "3",
      label: (
        <h3 className="text-base font-semibold text-gray-600">Placements</h3>
      ),
      children: <TabSection uni={uni} />,
    },
  ];

  return (
    <main className="container">
      <section className="pt-8 flex flex-col justify-between">
        <div className="">
          <h2 className="text-left font-bold text-2xl w-full">
            {uni?.university}
          </h2>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4" />
            <p className="text-sm text-gray-500 mt-0">{uni?.country}</p>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <div className="space-x-2">
            <button className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
              {`${uni?.type} University`}
            </button>
            <button className="bg-gray-200 text-blue-500 text-xs font-medium px-2.5 py-1 rounded-md">
              {`${uni?.campuses} Campuses`}
            </button>
          </div>
          <div className="flex space-x-2 my-2">
            <button className="bg-green-600 text-white font-semibold text-sm p-2 px-8 rounded-full border border-slate-300">
              Apply Now
            </button>
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
        <Tabs
          className="grid col-span-4 h-min"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
        <div className="grid col-span-2 mt-16">
          <UniSectionCard title={"Popular & recent articles"} />
        </div>
      </div>
    </main>
  );
}

function TabSection({ uni }: { uni: any }) {
  return (
    <div className="">
      <Accordion type="single" collapsible className="w-full space-y-7 pb-4">
        <AccordionItem
          value="item-1"
          className="border p-4 rounded-xl shadow-md"
        >
          <AccordionTrigger className="text-xl mt-0 font-semibold text-gray-700">
            Table of Contents
          </AccordionTrigger>
          <AccordionContent>
            <ul className="text-base text-blue-600 pl-4 list-disc list-inside">
              <li>Introduction</li>
              <li>History</li>
              <li>Location</li>
              <li>Facilities</li>
              <li>Rankings</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full space-y-7">
        <AccordionItem
          value="item-2"
          className="border p-4 rounded-xl shadow-md"
        >
          <AccordionTrigger className="text-xl mt-0 font-semibold text-gray-700">{`About ${uni?.university}`}</AccordionTrigger>
          <AccordionContent>
            <p className="text-base text-muted-foreground mt-2">
              {uni?.description}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full space-y-7 border rounded-xl mt-4 p-6 shadow-lg">
        <h3 className="text-xl mt-0 font-semibold text-gray-700">{`${uni.university} Programs`}</h3>
        <div className="space-y-4">
          {uni.courses_offered.map((course: any) => (
            <UniCourseCard key={course.course_id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
