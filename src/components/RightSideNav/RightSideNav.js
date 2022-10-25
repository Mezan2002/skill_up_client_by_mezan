import React from "react";
import { Link } from "react-router-dom";

const RightSideNav = ({ course }) => {
  const { courseName, id } = course;
  return (
    <div>
      <div className="w-full mb-5 rounded-md border border-gray-600 p-10">
        <Link to={`/courses/${id}`} className="">
          {courseName}
        </Link>
      </div>
    </div>
  );
};

export default RightSideNav;
