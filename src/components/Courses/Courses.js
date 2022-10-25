import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl mt-10">Courses ({courses.length})</h2>
      <div className="grid grid-cols-3 gap-y-10 mt-10 w-10/12 mx-auto pt-10 pb-36">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
