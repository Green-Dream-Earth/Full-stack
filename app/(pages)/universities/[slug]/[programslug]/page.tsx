"use client";

import Loading from "@/components/loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UniSectionCard } from "@/components/uniCard";
import { UniCourseCard } from "@/components/uniCourseCard";
import { getUniversity } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsProps } from "antd";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter, usePathname } from "next/navigation";

import React from "react";

function Program() {
  //   const router = useRouter();

  //   const onChange = (key: string) => {
  //     console.log(key);
  //   };

  const params = useParams<{ slug: string }>();

  // console.log(params);

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

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h3 className="text-base font-semibold text-gray-600">Courses</h3>,
      children: <TabSectionInner programs={data?.data} />,
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
  const currentPath = usePathname();
  const router = useRouter();

  function makeSulg(str: string) {
    // Convert the string to lowercase
    let lowerCaseStr = str.toLowerCase();

    // Replace spaces with hyphens
    let hyphenatedStr = lowerCaseStr.replace(/\s+/g, "-");

    // Remove leading or trailing spaces (although replacing spaces with hyphens should remove the need for this step)
    let trimmedStr = hyphenatedStr.trim();

    return trimmedStr;
  }

  const fullProgramName = [
    "Under Graduate",
    "Post Graduate",
    " Master of Business Administration (MBA)",
    "Doctor of Philosophy (PhD)",
  ];
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
        <h3 className="text-xl mt-0 font-semibold text-gray-700">{`Courses at ${programs?.university_name}`}</h3>
        <div className="space-y-4">
          {programs?.degree.map((program: any) => {
            // split the degree.courses with , and put it in the array to show the programs with just it's program

            // @ts-ignore
            const courses = program.course && program.course.name.split(",");

            if (courses) {
              return (
                <div key={crypto.randomUUID()} className="">
                  {/* <h4 className="text-lg font-semibold text-blue-600 ">{`${
                    program.name === "UG"
                      ? fullProgramName[0]
                      : program.name === "PG"
                      ? fullProgramName[1]
                      : program.name === "MBA"
                      ? fullProgramName[2]
                      : program.name === "PHD"
                      ? fullProgramName[3]
                      : program.name
                  }`}</h4> */}
                  {courses.map((name: any) => (
                    // <div className="flex justify-between">
                    //   <h4 className="text-lg font-semibold text-blue-600 ">{`${name}`}</h4>
                    // </div>

                    <div
                      key={crypto.randomUUID()}
                      onClick={() => {
                        router.push(`${currentPath}/${makeSulg(name)}`);
                      }}
                      className="w-full p-6 mt-7 border rounded-xl hover:cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <h4 className="text-lg font-semibold text-blue-600 ">{`${name}`}</h4>

                        <span className="h-8 w-8 bg-slate-200 flex justify-center items-center rounded-full border">
                          <svg
                            width={21}
                            height={19}
                            viewBox="0 0 21 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.9447 0.286231C11.5586 -0.0803651 10.9483 -0.0645606 10.5817 0.321552C10.2151 0.707793 10.2309 1.31806 10.6171 1.68466L17.3398 8.06737L0.983256 8.03613C0.450796 8.03512 0.0182952 8.46597 0.0172785 8.99843C0.0162618 9.5309 0.447114 9.96339 0.979574 9.96441L17.339 9.99564L10.5891 16.3554C10.2015 16.7206 10.1833 17.3307 10.5485 17.7183C10.9137 18.1058 11.5238 18.124 11.9114 17.7589L20.1757 9.97225C20.3899 9.77046 20.5189 9.51346 20.5628 9.24514C20.5776 9.17835 20.5854 9.10893 20.5855 9.0377C20.5857 8.96366 20.5775 8.89152 20.5618 8.82233C20.5173 8.55769 20.3899 8.30433 20.1793 8.10441L11.9447 0.286231Z"
                              fill="#212121"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex space-x-3 py-2">
                        {/* <p className="text-gray-500 text-sm mt-0">{`6 Subjects`}</p> */}
                        {/* <p className="text-gray-500 text-sm mt-0">{`${"4 years"}`}</p> */}
                      </div>
                      <hr className="w-full bg-slate-200 border rounded-xl " />
                      <div className="flex space-x-4">
                        <div className="flex flex-col">
                          <p className="text-sm text-gray-600">
                            Program Duration
                          </p>
                          <p className="text-base text-gray-600 font-semibold">{`12 months - 1 year`}</p>
                        </div>
                        <div className="flex flex-col ">
                          <p className="text-sm text-gray-600">
                            1st year Tution Fees
                          </p>
                          <p className="text-base text-gray-600 font-semibold">{`INR 54-60 L`}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            } else {
              return (
                <div key={crypto.randomUUID()} className="">
                  <h4 className="text-lg font-semibold text-blue-600 ">{`${
                    program.name === "UG"
                      ? fullProgramName[0]
                      : program.name === "PG"
                      ? fullProgramName[1]
                      : program.name === "MBA"
                      ? fullProgramName[2]
                      : program.name === "PHD"
                      ? fullProgramName[3]
                      : program.name
                  }`}</h4>
                  <h4 className="">No Courses Available</h4>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Program;
