import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/images/icons/icons8-google-48.png";
import FacebookIcon from "../../assets/images/icons/icons8-facebook-48.png";
import GitHubIcon from "../../assets/images/icons/github.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";

const Register = () => {
  const {
    googleSignIn,
    facebookSignIn,
    gitHubSignIn,
    registerUser,
    setPhotoAndName,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const fullName = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) {
      return setError(
        "firsbase: password is not matched with confirm password, please check it"
      );
    }
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(fullName, photoURL);
        form.reset();
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  };
  const updateUserProfile = (name, photoURL) => {
    const profileInfo = {
      displayName: name,
      photoURL: photoURL,
    };
    setPhotoAndName(profileInfo);
  };
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate("/login");
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  const handleFacebookLogIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        navigate("/login");
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };

  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.user;
        navigate("/login");
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <div>
        <div className="min-h-screen mt-5">
          <div className="border border-gray-500 w-11/12 lg:w-4/12 mx-auto rounded-xl py-10">
            <h2 className="text-3xl font-semibold mb-5 pb-5">
              Create an Account
            </h2>
            <p className="text-red-500 mb-5">{error.slice(10, 300)}</p>
            <form onSubmit={handleSubmit} className="w-9/12 mx-auto">
              <div className="inputGroup ">
                <input
                  className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl mt-3"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="inputGroup ">
                <input
                  className="border-b-2 w-full py-2 pl-3 focus:outline-none text-xl mt-7"
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  required
                />
              </div>
              <div className="inputGroup ">
                <input
                  className="border-b-2 w-full py-2 pl-3 focus:outline-none text-xl mt-7"
                  type="email"
                  name="email"
                  placeholder="Username or Email"
                  required
                />
              </div>
              <div className="inputGroup ">
                <input
                  className="border-b-2 w-full py-2 pl-3 focus:outline-none text-xl mt-7"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="inputGroup ">
                <input
                  className="border-b-2 w-full py-2 pl-3 focus:outline-none text-xl mt-7"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button className="btn btn-primary w-full mt-10 ">Sign Up</button>
              <h4 className="my-5">
                Already have an account?{" "}
                <Link to="/logIn" className="underline">
                  Login
                </Link>
              </h4>
              <div className="divider  mt-5">OR SIGN IN WITH</div>
              <div className="flex justify-center mt-5">
                <div
                  onClick={handleGoogleLogIn}
                  className="border w-24 h-24 flex justify-center items-center flex-col mr-2 px-4 py-2 rounded-full cursor-pointer"
                >
                  <img className="w-10 mx-auto" src={GoogleIcon} alt="" />
                  <p className="">Google</p>
                </div>
                <div
                  onClick={handleFacebookLogIn}
                  className="border w-24 h-24 flex justify-center items-center flex-col mr-2 px-4 py-2 rounded-full cursor-pointer"
                >
                  <img className="w-10 mx-auto" src={FacebookIcon} alt="" />
                  <p className="">Facebook</p>
                </div>
                <div
                  onClick={handleGitHubLogIn}
                  className="border w-24 h-24 flex justify-center items-center flex-col mr-2 px-4 py-2 rounded-full cursor-pointer"
                >
                  <img className="w-10 mx-auto" src={GitHubIcon} alt="" />
                  <p className="">GitHub</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
