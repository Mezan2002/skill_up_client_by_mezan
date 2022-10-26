import React from "react";
import { useLoaderData } from "react-router-dom";

const PurchasePage = () => {
  const purchasedCourse = useLoaderData();
  const { courseName } = purchasedCourse;
  return (
    <div className="min-h-screen">
      <h4 className="text-xl font-bold mt-10">Congratulations!</h4>
      <h2 className="text-2xl font-bold mt-5">
        Your are purchased {courseName} Course
      </h2>
      <p className="text-md mt-5">
        you have all access on this course for lifetime
      </p>
    </div>
  );
};

export default PurchasePage;
