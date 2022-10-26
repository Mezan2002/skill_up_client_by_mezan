import React from "react";
import { useContext } from "react";
import { FaClock, FaRegStickyNote, FaStar, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PurchasePage = () => {
  const { user } = useContext(AuthContext);
  const purchasedCourse = useLoaderData();
  const {
    courseName,
    price,
    courseImage,
    instractorImage,
    instractorName,
    student,
    lessons,
    timeDuration,
  } = purchasedCourse;
  return (
    <div className="min-h-screen">
      <div className="w-11/12 mx-auto">
        <h4 className="text-xl font-bold mt-10">
          Congratulations! {user?.displayName}
        </h4>
        <h2 className="text-2xl font-bold mt-5">
          Your are purchased {courseName} Course
        </h2>
        <p className="text-md mt-5 font-bold">
          you have all access on this course for lifetime
        </p>
      </div>
      <div className="mt-10">
        <div className="">
          <div className="card w-11/12 lg:w-[500px] mx-auto bg-base-100 shadow-xl">
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
              <div className="flex items-center justify-center text-lg">
                <img
                  className="w-10 rounded-full ml-8 mt-5"
                  src={instractorImage}
                  alt=""
                />
                <p className="mt-5 ml-3">{instractorName}</p>
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
      </div>
    </div>
  );
};

export default PurchasePage;
