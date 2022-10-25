import React from "react";
import { useLoaderData } from "react-router-dom";

const SelectedCourse = () => {
  const selectedCourse = useLoaderData();
  const {
    courseImage,
    courseName,
    courseDescription,
    id,
    price,
    instractorName,
    instractorImage,
    rating,
    lessons,
    student,
  } = selectedCourse;
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-4 container mx-auto mt-10">
        <div className="bg-slate-200 py-20 col-span-3">
          <div className="px-20 text-left">
            <p className="text-4xl font-bold">{courseName}</p>
            <p className="mt-5">{courseDescription}</p>
            <div className="mt-5 flex">
              <p>{rating}</p>
              <p>Capacity of students: {student}</p>
            </div>
          </div>
        </div>
        <div className="bg-red-500 py-20">Hello</div>
      </div>
    </div>
  );
};

export default SelectedCourse;
