import React from "react";
import { Link } from "react-router-dom";

const RightSideNav = ({ course }) => {
  const { courseName, id } = course;
  return (
    <div>
      <Link to={`/courses/${id}`} className="">
        <div className="w-full mb-5 hover:bg-black hover:text-white duration-500 rounded-md border border-gray-600 p-10">
          {courseName}
        </div>
      </Link>
    </div>
  );
};

export default RightSideNav;
