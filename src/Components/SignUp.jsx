import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(password.length);

    if (password.length < 6) {
      return setError("You Should password must be 6 charecter");
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regex.test(password)) {
      return setError(
        "atleast one uppercase, one lowercase, one special cherecter"
      );
    }

    const user = { name, photo, email, password };
    console.log(user);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: "Sing Up Successfully",
          icon: "success",
          draggable: true,
        });

        updateUserProfile(name, photo).then(() => {
          navigate(location?.state ? location?.state : "/");
        });
      })
      .catch((err) => {
        toast.error(err.code || err.message);
      });
  };

  console.log(open);

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 m-2">
          Sign Up
        </h2>
        <div className="card-body">
          <form onSubmit={handleCreateUser} className="fieldset">
            <label className="fieldset-label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Your Name"
            />
            <label className="fieldset-label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter Your Photo Url"
            />
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="absolute fieldset-label">Password</label>
            <span
              onClick={() => setOpen(!open)}
              className="relative top-8 left-96 z-50"
            >
              {open ? <FaEye></FaEye> : <FaEyeSlash />}
            </span>
            <input
              type={open ? "text" : "password"}
              name="password"
              className="input w-full"
              placeholder="Password"
            />
            <input
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              type="submit"
              value="Sign Up"
            />
            <p className="text-red-500">{error} </p>
            <p>
              If you have already account please{" "}
              <Link to="/signIn" className=" font-bold text-blue-400">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
