import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaClock,
  FaStar,
  FaTag,
  FaUser,
  FaUserGraduate,
  FaVideo,
} from "react-icons/fa";
import WelcomeVideo from "../../assets/videos/welcome_video.mp4";

const SelectedCourse = () => {
  const selectedCourse = useLoaderData();
  const {
    courseImage,
    courseName,
    id,
    rating,
    price,
    instractorName,
    lessons,
    student,
    timeDuration,
  } = selectedCourse;
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-x-4 container mx-auto mb-32 mt-10">
        <div className="col-span-3">
          <div className="card card-compact mx-auto bg-base-100 shadow-xl mt-10">
            <figure>
              <img src={courseImage} alt="Shoes" />
            </figure>
            <div className="flex justify-start my-10">
              <span className="badge ml-4 py-3">Development</span>
              <span className="badge ml-4 py-3">Design</span>
              <span className="badge ml-4 py-3">Programming</span>
            </div>
            <div className="card-body text-left">
              <h2 className="text-4xl font-bold">{courseName}</h2>
              <div className="my-10 flex items-center">
                <div>
                  <p className="text-lg font-semibold text-primary">
                    Instractor:
                    <span className="text-black border-r-2 border-black pr-5">
                      {" "}
                      {instractorName}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="flex items-center pl-5 text-lg font-semibold text-primary">
                    <FaTag className="mr-3" />
                    <span className="text-black border-r-2 border-black pr-5">
                      {" "}
                      Design and Development
                    </span>
                  </p>
                </div>
                <div>
                  <p className="flex items-center pl-5 text-lg font-semibold text-primary">
                    <FaClock className="mr-3" />
                    <span className="text-black border-r-2 border-black pr-5">
                      {" "}
                      20 december 2023
                    </span>
                  </p>
                </div>
                <div>
                  <p className="flex items-center pl-5 text-lg font-semibold text-primary">
                    <span className="text-black flex">
                      <FaStar className="mr-3 text-yellow-400" />
                      <FaStar className="mr-3 text-yellow-400" />
                      <FaStar className="mr-3 text-yellow-400" />
                      <FaStar className="mr-3 text-yellow-400" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 border shadow-md rounded-lg">
          <div>
            <video
              className="w-full rounded-lg"
              src={WelcomeVideo}
              controls
            ></video>
            <p className="text-3xl font-bold mt-10 text-left ml-5">${price}</p>
            <Link to={`/purchase/${id}`}>
              <button className="btn btn-primary btn-block mt-10">
                purchase
              </button>
            </Link>
          </div>
          <div className="mt-10">
            <div className="flex items-center">
              <p>
                <FaUser className="mr-5"></FaUser>
              </p>
              <h4>Instractor : {instractorName}</h4>
            </div>
            <div className="divider"></div>
            <div className="flex items-center">
              <p>
                <FaUserGraduate className="mr-5"></FaUserGraduate>
              </p>
              <h4>student enrolled : {student}</h4>
            </div>
            <div className="divider"></div>
            <div className="flex items-center">
              <p>
                <FaVideo className="mr-5"></FaVideo>
              </p>
              <h4>videos : {lessons}</h4>
            </div>
            <div className="divider"></div>
            <div className="flex items-center">
              <p>
                <FaClock className="mr-5"></FaClock>
              </p>
              <h4>Duration : {timeDuration} hours</h4>
            </div>
            <div className="divider"></div>
            <div className="flex items-center">
              <p>
                <FaStar className="mr-5"></FaStar>
              </p>
              <h4>Ratings : {rating} star</h4>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCourse;
