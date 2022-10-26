import React from "react";
import { FaClock, FaRegStickyNote, FaStar, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    courseImage,
    courseName,
    id,
    price,
    instractorName,
    instractorImage,
    student,
    lessons,
    timeDuration,
  } = course;
  console.log(course);
  return (
    <Link className="w-full" to={`/courses/${id}`}>
      <div className="hover:text-red-500 duration-500">
        <div className="card w-full lg:w-10/12 mx-auto bg-base-100 shadow-xl">
          <div className="w-24 h-7 absolute top-6 left-[370px] text-white bg-rose-500 flex items-center justify-center text-lg rounded-full">
            <span>Price: {price}$</span>
          </div>
          <figure>
            <img
              className="h-72 hover:scale-110 duration-500"
              src={courseImage}
              alt="Shoes"
            />
          </figure>
          <div className="flex items-center  text-lg justify-between w-11/12">
            <div className="flex items-center lg:justify-center text-lg">
              <img
                className="w-10 rounded-full ml-8 mt-5"
                src={instractorImage}
                alt=""
              />
              <p className="mt-5 lg:ml-3">{instractorName}</p>
            </div>
            <div className="flex items-center justify-center text-lg mt-5">
              <span>
                {" "}
                <FaStar className="text-yellow-400"></FaStar>{" "}
              </span>
              <span>
                {" "}
                <FaStar className="text-yellow-400"></FaStar>{" "}
              </span>
              <span>
                {" "}
                <FaStar className="text-yellow-400"></FaStar>{" "}
              </span>
              <span>
                {" "}
                <FaStar className="text-yellow-400"></FaStar>{" "}
              </span>
              <span>
                {" "}
                <FaStar className="text-yellow-400"></FaStar>{" "}
              </span>
            </div>
          </div>
          <div className="card-body text-left">
            <h2 className="text-center text-xl font-bold">{courseName}</h2>

            <div className="divider"></div>
            <div className="flex justify-center items-center">
              <p className="flex items-center justify-center">
                <FaUser></FaUser>
                <span className="ml-3">{student}</span>
              </p>
              <p className="flex items-center justify-center">
                <FaRegStickyNote></FaRegStickyNote>
                <span className="ml-3">{lessons}</span>
              </p>
              <p className="flex items-center justify-center">
                <FaClock></FaClock>
                <span className="ml-3">{timeDuration}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
