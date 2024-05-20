"use client";

import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { MapPinIcon } from "@/pages/exploreUniversities";
import { useRouter } from "next/navigation";

interface UniversityProps {
  uni_id: number;
  QS_Rankings: number;
  Times_Rankings: number;
  university: string;
  slug: string;
  country: string;
  address: string;
  uni_fees: {
    out_of_state_tuition_fee: string;
    accomodation_expenses: string;
  };
  courses_offered: any;
}

export const UniCard = ({ data }: { data: UniversityProps }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/universities/" + data.slug)}
      className="grid gap-4 p-6 rounded-lg border border-primary/50 shadow-sm hover:cursor-pointer hover:shadow-xl hover:scale-[0.98] transform transition ease-in-out delay-100 hover:shadow-primary/10 bg-slate-50"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{data.university}</h3>
        <span className="font-semibold text-3xl font-semibold">
          {data.QS_Rankings}
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <MapPinIcon className="w-4 h-4" />
        {data.country}
      </div>
    </div>
  );
};

interface UniCardElements {
  id: number;
  title: string;
  link: string;
}

export const UniSectionCard = ({
  title,
  elements,
}: {
  title: string;
  elements: UniCardElements[];
}) => {
  return (
    <Card className="w-full mt-6">
      <CardHeader className="flex items-center justify-between px-6 py-4">
        <div className="flex items-left space-x-4">
          {/* <RocketIcon className="h-6 w-6 text-gray-500" /> */}
          <h3 className="text-lg text-left font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {elements.map((element) => (
            <li
              key={element.id}
              className="flex items-center justify-between border border-gray-200 p-4"
            >
              <span>{element.title}</span>
              <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            </li>
          ))}
          <li className="flex flex-col justify-center border border-pink-400 p-4">
            <p className="text-center p-0 m-0">More</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function RocketIcon(props: any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
