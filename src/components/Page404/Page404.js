import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h2 className="text-5xl mt-10 text-red-600">404</h2>
      <h2 className="text-3xl">Page Not Found</h2>
      <img
        className="w-4/12 mx-auto"
        src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif"
        alt=""
      />
      <Link to="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default Page404;
