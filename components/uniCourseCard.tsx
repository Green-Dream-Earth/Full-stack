export const UniCourseCard = ({ course }: { course: any }) => {
  return (
    <div className="w-full p-6 border rounded-xl ">
      <div className="flex justify-between">
        <h4 className="text-lg font-semibold text-blue-600 ">{`${course.title}`}</h4>

        <span className="h-8 w-8 bg-slate-200 rounded-full border"></span>
      </div>
      <div className="flex space-x-3 py-2">
        <p className="text-gray-500 text-sm mt-0">{`${course.subjects.length} Subjects`}</p>
        <p className="text-gray-500 text-sm mt-0">{`${course.duration}`}</p>
      </div>
      <hr className="w-full bg-slate-200 border rounded-xl " />
      <div className="flex space-x-3">
        <div className="flex flex-col items-center">
          <p className="text-sm text-center text-gray-600">Exams Accepted</p>
          <p className="text-base text-gray-600 font-semibold">{`GRE, IELTS, +2`}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-center text-gray-600">
            1st year Tution Fees
          </p>
          <p className="text-base text-gray-600 font-semibold">{`${course.fees}`}</p>
        </div>
      </div>
    </div>
  );
};
