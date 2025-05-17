import React, { useContext} from "react";
import { FaArrowAltCircleRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAllBlogs from "../Hooks/UseAllBlogs";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const RecentBlog = () => {
  const [allBlogs] = UseAllBlogs();
  const { user } = useContext(AuthContext);
  console.log(allBlogs);

  const handleWishlist = (id) => {
    // setLiked(true);
    console.log(id);
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

   
    axios.post("http://localhost:5000/addWishlist", wishlistItem)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("wishlist item added successfully");
        }else{
            toast.error(res.data.message)
        }
      })
      .catch(err=>{
        toast.error(err.message)
      })

  };

  return (
    <div className="p-20">
      <h1 className="text-xl font-bold mb-4">Recent Blog Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
        {allBlogs?.map((item) => (
          <div key={item._id} className="">
            <div className="">
              <div className="relative top-10 left-5 z-50 text-2xl font-extrabold">
                <button
                  className="cursor-pointer"
                  onClick={() => handleWishlist(`${item?._id}`)}
                >
                    {/* <FaHeart className="text-white" /> */}
                    <FaRegHeart className="text-white" />
                </button>
              </div>
              <img className="h-[330px] relative" src={item?.imageUrl} alt="" />
            </div>

            <div>
              <h1 className="text-xl mt-2 font-bold">{item?.title}</h1>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-x-5 text-sm ">
                <p>by {item?.blogerName}</p>
                <p>date: {item?.date}</p>
              </div>
              <Link to={`/details/${item._id}`}>
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
