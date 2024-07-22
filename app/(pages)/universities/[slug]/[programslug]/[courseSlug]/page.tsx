"use client";

import Loading from "@/components/loading";
import { UniSectionCard } from "@/components/uniCard";
import { MapPinIcon } from "@/pages/exploreUniversities";
import { getUniversity } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

function CourseDetails() {
  const params = useParams<{ slug: string }>();

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
      <div className="grid md:gap-3 lg:grid-cols-6 pb-7 mt-5">
        <div className="grid col-span-4 h-min">
          {/* <Tabs
        className="grid col-span-4 h-min"
        defaultActiveKey="1"
        items={items}
      /> */}
          <TabSectionInner programs={data?.data} />
        </div>
        <div className="grid col-span-2 ">
          <UniSectionCard title={"Popular & recent articles"} />
        </div>
      </div>
    </main>
  );
}

function TabSectionInner({ programs }: { programs: any }) {
  const params = useParams();
  const courses = programs?.degree.course && programs?.degree.course;

  console.log("this si prhogras :", programs);

  return (
    <div className="">
      {/* <Accordion type="single" collapsible className="w-full space-y-7">
          <AccordionItem
            value="item-2"
            className="border p-4 rounded-xl shadow-md"
          >
            <AccordionHeader className="text-xl mt-0 font-semibold text-gray-700">{`About ${programs?.university_name}`}</AccordionHeader>
            <AccordionTrigger className="">
              <p className="text-base text-muted-foreground mt-2 line-clamp-4 hover:line-clamp-none">
                {programs?.university_description}
              </p>
            </AccordionTrigger>

            <AccordionContent>
              <p className="text-base text-muted-foreground mt-2">
                {programs?.university_description}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}

      {programs?.university_description ? (
        <div className="w-full space-y-7 bg-white mb-7 border rounded-xl p-6 shadow-lg">
          <div className="flex gap-4">
            <h3 className="text-xl mt-0 font-semibold text-gray-700">{`About ${programs?.university_name}`}</h3>
            <div className="flex gap-2">
              <button className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
                {`Times (THE) Ranking ${programs.qs_rankings}`}
              </button>

              <button className="bg-gray-200 text-blue-500 text-xs font-medium px-2.5 py-1 rounded-md">
                {`Qs World Ranking ${programs.qs_rankings}`}
              </button>
            </div>
          </div>
          <p className="text-base text-muted-foreground mt-2 line-clamp-4 hover:line-clamp-none">
            {programs?.university_description}
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="w-full bg-white space-y-7 border rounded-xl p-6 shadow-lg">
        <div className="flex gap-3">
          <h3 className="text-xl mt-0 font-semibold text-gray-700">
            {programs?.courses[0].courseName}
          </h3>
          <button className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
            {`${programs.courses[0].courseDuration}`}
          </button>
        </div>
        <p className="text-base text-muted-foreground mt-2 line-clamp-4 hover:line-clamp-none">
          {programs?.courses[0].courseDescription}
        </p>
        <div className="">
          <h3 className="text-lg mt-0 font-semibold text-gray-700">
            Exam Criteria
          </h3>
          {programs?.courses[0].courseExams.map((exam: any) => (
            <p
              key={crypto.randomUUID()}
              className="text-base text-muted-foreground mt-2 line-clamp-4 hover:line-clamp-none"
            >
              {`${exam.examName} : ${exam.examCriteria}`}
            </p>
          ))}
        </div>
        <div className="">
          <h3 className="text-lg mt-0 font-semibold text-gray-700">
            Course Fees
          </h3>
          <p className="text-base text-muted-foreground mt-2 line-clamp-4 hover:line-clamp-none">
            {`Home ${programs?.courses[0].courseFee.home}`}
          </p>
          <p className="text-base text-muted-foreground mt-2 line-clamp-4 hover:line-clamp-none">
            {`Overseas ${programs?.courses[0].courseFee.overseas}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
