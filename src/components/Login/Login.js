import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/images/icons/icons8-google-48.png";
import FacebookIcon from "../../assets/images/icons/icons8-facebook-48.png";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { googleSignIn, facebookSignIn, logInUser, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => setError(error.message));
  };

  const emailOnBlue = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };
  const handleResetPassword = () => {
    if (!userEmail) {
      toast.error("please provide an email to reset your password");
      return;
    }
    resetPassword(userEmail)
      .then(() => {
        setError("");
        toast.success(
          "please check your email or your spam message on email to reset your password"
        );
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  const handleFacebookLogIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="min-h-screen mt-8">
      <div className="border border-gray-500 w-11/12 lg:w-4/12 mx-auto rounded-xl py-20">
        <h2 className="text-3xl font-semibold mb-5">Login</h2>
        <p className="text-red-500 mb-5">{error.slice(10, 300)}</p>
        <form onSubmit={handleSubmit} className="w-9/12 mx-auto">
          <div className="inputGroup ">
            <input
              className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl"
              type="email"
              name="email"
              onBlur={emailOnBlue}
              placeholder="Username or Email"
              required
            />
          </div>
          <div className="inputGroup ">
            <input
              className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl mt-10"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between  mt-10">
            <div>
              <input type="checkbox" name="" id="rememberMe" />
              <label htmlFor="rememberMe" className="ml-2">
                Remember Me
              </label>
            </div>
            <div>
              <button onClick={handleResetPassword} className="underline">
                Forgot Password
              </button>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-10 ">Login</button>
          <h4 className="my-10">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Create a new account
            </Link>
          </h4>
          <div className="divider  mt-5">OR SIGN IN WITH</div>
          <div className="flex justify-center mt-5">
            <div
              onClick={handleGoogleLogIn}
              className="border mr-2 px-4 py-2 rounded-xl cursor-pointer"
            >
              <img src={GoogleIcon} alt="" />
              <p className="">Google</p>
            </div>
            <div
              onClick={handleFacebookLogIn}
              className="border mr-2 px-4 py-2 rounded-xl cursor-pointer"
            >
              <img className="pl-2.5" src={FacebookIcon} alt="" />
              <p className="">Facebook</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
