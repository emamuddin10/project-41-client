import React, { useContext, useState } from "react";
import UseAllBlogs from "../Hooks/UseAllBlogs";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";
import { FaArrowAltCircleRight, FaRegHeart } from "react-icons/fa";

const AllBlogs = () => {
  const [allBlogs] = UseAllBlogs();
  const { user } = useContext(AuthContext);

  // Filter states
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleWishlist = (id) => {
    const blog = allBlogs.find((item) => item._id === id);
    const wishlistItem = {
      userEmail: user?.email,
      wishListId: id,
      title: blog?.title,
      image: blog?.imageUrl,
      shortDesc: blog?.shortDesc,
      longDesc: blog?.longDesc,
      date: blog?.date,
      category: blog?.category,
      status: "In Stock",
    };

    axios
      .post("https://project-41-server.onrender.com/addWishlist", wishlistItem)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Wishlist item added successfully");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // Filtered Blogs Logic
  const filteredBlogs = allBlogs?.filter((blog) => {
    const matchTitle = blog.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchTitle && matchCategory;
  });

  // Extract unique categories
  const categories = ["All", ...new Set(allBlogs.map((b) => b.category))];

  return (
    <div className="p-6 md:p-20">
      <h1 className="text-2xl font-bold mb-6">All Blog Posts</h1>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by blog title"
          className="input input-bordered w-full max-w-xs"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Blogs Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <div key={item._id} className="">
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 text-2xl font-extrabold">
                  <button
                    className="cursor-pointer"
                    onClick={() => handleWishlist(item._id)}
                  >
                    <FaRegHeart className="text-white" />
                  </button>
                </div>
                <img
                  className="h-[330px] w-full object-cover rounded"
                  src={item?.imageUrl}
                  alt={item?.title}
                />
              </div>

              <div>
                <h1 className="text-xl mt-2 font-bold">{item?.title}</h1>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm">
                <div className="flex items-center gap-x-5">
                  <p>by {item?.blogerName}</p>
                  <p>date: {item?.date}</p>
                </div>
                <Link to={`/details/${item._id}`}>
                  <FaArrowAltCircleRight />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
