import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";

const SignIn = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const formData = { email, password };
    console.log(formData);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location?.state : "/")
      })
      .catch((err) => {
        toast.error(err.code || err.message)
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      console.log(result);
      Swal.fire({
        title: "Google login  Successfully",
        icon: "success",
        draggable: true,
      });
      navigate(location?.state ? location?.state : "/")
    })
    .catch((err)=>{
      toast.error(err.code || err.message)
    })
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl ">
          <h2 className="text-3xl font-bold text-center text-gray-800 m-2">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="fieldset-label">Password</label>
            <span
              onClick={() => setOpen(!open)}
              className="relative top-8 left-96 z-50"
            >
              {open ? <FaEye></FaEye> : <FaEyeSlash />}
            </span>

            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <input className=" bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300" type="submit" value="Login" />
            <p>
              If You have no account please{" "}
              <Link to="/signUp" className=" font-bold text-blue-400">
                Register
              </Link>
            </p>
            <button
              onClick={handleGoogleLogin}
              className="  w-1/2 btn btn-neutral"
            >
              <FcGoogle />
              Login With Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
