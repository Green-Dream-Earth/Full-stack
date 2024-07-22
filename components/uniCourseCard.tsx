export const UniCourseCard = ({
  program,
  onClick,
}: {
  program: any;
  onClick?: () => void;
}) => {
  console.log(program);

  const fullProgramName = [
    "Under Graduate",
    "Post Graduate",
    " Master of Business Administration (MBA)",
    "Doctor of Philosophy (PhD)",
  ];
  return (
    <div
      onClick={onClick}
      className="w-full p-6 border rounded-xl hover:cursor-pointer"
    >
      <div className="flex justify-between">
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
      {/* <div className="flex space-x-3 py-2">
        <p className="text-gray-500 text-sm mt-0">{`6 Subjects`}</p>
        <p className="text-gray-500 text-sm mt-0">{`${"4 years"}`}</p>
      </div> */}
      {/* <hr className="w-full bg-slate-200 border rounded-xl " />
      <div className="flex space-x-4">
        <div className="flex flex-col">
          <p className="text-sm text-gray-600">Exams Accepted</p>
          <p className="text-base text-gray-600 font-semibold">{`IELTS, TOEFL +2`}</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-sm text-gray-600">1st year Tution Fees</p>
          <p className="text-base text-gray-600 font-semibold">{`${course.program_fees}`}</p>
        </div>
      </div> */}
    </div>
  );
};
