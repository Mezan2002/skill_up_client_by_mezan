import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media1.giphy.com/media/3oEjHOUcNRKgpqTHiM/giphy.gif"
            className="max-w-sm rounded-lg w-10/12 mx-auto lg:w-full"
            alt=""
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold lg:w-10/12">
              Learn a skill and grow up your skill
            </h1>
            <p className="py-6 lg:w-1/2 text-center lg:text-left">
              Build Your Digital Skills For Tomorrow. We Provide Top Quality
              Courses for front-end and back-end developent.
            </p>
            <Link to="/courses">
              <button className="btn btn-primary">Go on course</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
