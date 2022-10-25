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
    rating,
    lessons,
    student,
  } = selectedCourse;
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-4 container mx-auto mt-10">
        <div className="bg-slate-200 py-20 col-span-3 rounded-2xl">
          <div className="px-20 text-left">
            <p className="text-4xl font-bold">{courseName}</p>
            <p className="mt-5">{courseDescription}</p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex">
                <p className="mt-5">
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
                <p className="mt-5">
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
                <p className="mt-5">
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
                <p className="mt-5">
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
                <p className="mt-5">
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
              </div>
              <div>
                <div className="mt-5 flex items-center">
                  <span className="mr-2">
                    <FaUser></FaUser>
                  </span>
                  <p>{student}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <FaVideo></FaVideo>
                  </span>
                  <p>{lessons}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 rounded-full mt-10"
                src={instractorImage}
                alt=""
              />
              <p className="mt-10 ml-3">{instractorName}</p>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div>
            <img className="rounded-xl" src={courseImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCourse;
