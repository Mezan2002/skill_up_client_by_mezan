import React from "react";
import { Link } from "react-router-dom";

const RightSideNav = ({ course }) => {
  const { courseName, id } = course;
  return (
    <div>
      <Link to={`/courses/${id}`} className="">
        <div className="rightSideNav w-full border-b-2 py-5  px-2 lg:p-5">
          <p>{courseName}</p>
        </div>
      </Link>
    </div>
  );
};

export default RightSideNav;
