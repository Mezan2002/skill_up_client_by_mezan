import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaUser, FaVideo } from "react-icons/fa";

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
    lessons,
    student,
  } = selectedCourse;
  return (
    <div className="min-h-screen">
      <div className="card card-compact w-6/12 mx-auto bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={courseImage} alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{courseName}</h2>
          <p className="">{courseDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-block">
              Take this course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCourse;
