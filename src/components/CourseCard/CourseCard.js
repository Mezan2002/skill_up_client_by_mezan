import React from "react";

const CourseCard = ({ course }) => {
  const { courseImage, courseName, courseDescription } = course;
  console.log(course);
  return (
    <div>
      <div className="card w-10/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="h-72" src={courseImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{courseName}</h2>
          <p className="text-left">{courseDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-block mt-5">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
