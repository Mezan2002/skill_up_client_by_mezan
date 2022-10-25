import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
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
  } = course;
  console.log(course);
  return (
    <div>
      <div className="card w-10/12 mx-auto bg-base-100 shadow-xl relative">
        <figure>
          <img className="h-72" src={courseImage} alt="Shoes" />
        </figure>
        <div className="flex items-center justify-between w-11/12">
          <div className="flex items-center">
            <img
              className="w-10 rounded-full ml-8 mt-5"
              src={instractorImage}
              alt=""
            />
            <p className="mt-5 ml-3">{instractorName}</p>
          </div>
          <div className="flex items-center">
            <p className="mt-5">{rating}</p>
          </div>
        </div>
        <div className="card-body text-left">
          <h2 className="card-title">{courseName}</h2>
          <p className="text-left">{courseDescription}</p>
          <p className="text-3xl">Price: {price}$</p>
          <div className="card-actions justify-end">
            <Link className="w-full" to={`/courses/${id}`}>
              <button className="btn btn-primary btn-block mt-5">Select</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
