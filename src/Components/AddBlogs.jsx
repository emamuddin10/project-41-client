import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";
import { data } from "react-router-dom";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    category: "",
    shortDesc: "",
    longDesc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Blog submitted:", formData);
    const date = new Date().toISOString().split('T')[0];
    const blogerName = user.displayName;
    const blogerImg = user.photoURL;
    const ownerEmail = user.email;
    const comment = 0;
    const allData = { ...formData, date, blogerImg, blogerName, comment, ownerEmail};
    // console.log(allData);
    await axios.post("http://localhost:3000/addBLog", allData).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        toast.success("blog added successfully");
        setFormData({
          title: "",
          imageUrl: "",
          category: "",
          shortDesc: "",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-5 lg:py-10">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Add New Blog
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Image URL */}
          <div className="col-span-1">
            <label className="block mb-1 font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div className="col-span-1">
            <label className="block mb-1 font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Education">Education</option>
              <option value="Travel">Travel</option>
            </select>
          </div>

          {/* Short Description */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              name="shortDesc"
              value={formData.shortDesc}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write a short description"
              required
            ></textarea>
          </div>

          {/* Long Description */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Long Description
            </label>
            <textarea
              name="longDesc"
              value={formData.longDesc}
              onChange={handleChange}
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write a detailed blog post"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
