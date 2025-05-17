// pages/BlogDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    // fetch blog details
    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data));

    // fetch comments
    fetch(`/api/comments?blogId=${id}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!newComment) return;

    const commentData = {
      blogId: id,
      text: newComment,
      userName: currentUser.displayName,
      userPhoto: currentUser.photoURL,
      userEmail: currentUser.email,
    };

    await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    setNewComment("");
    // reload comments
    fetch(`/api/comments?blogId=${id}`)
      .then(res => res.json())
      .then(data => setComments(data));
  };

  const isOwner = blog?.email === currentUser?.email;

  if (!blog) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Main Content */}
      <div className="md:col-span-3">
        <div className="bg-white p-6 rounded shadow">
          <img src={blog.image} alt="Blog" className="w-full h-64 object-cover rounded mb-4" />
          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            By {blog.author} | {new Date(blog.date).toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-700">{blog.content}</p>

          {isOwner && (
            <button
              onClick={() => navigate(`/update-blog/${id}`)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
          )}
        </div>

        {/* Comment Section */}
        <div className="mt-10 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>

          {!isOwner ? (
            <>
              <textarea
                className="w-full p-3 border rounded mb-4"
                placeholder="Write a comment..."
                rows="4"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                onClick={handleCommentSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </>
          ) : (
            <p className="text-red-500">You cannot comment on your own blog.</p>
          )}

          {/* Show comments */}
          <div className="mt-6 space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="flex gap-4 items-start border-t pt-4">
                <img
                  src={comment.userPhoto}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{comment.userName}</p>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="md:col-span-1">
        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="text-lg font-semibold mb-3">Popular Posts</h3>
          <ul className="space-y-2">
            {/* Example Static Popular Posts */}
            <li className="text-blue-600 hover:underline cursor-pointer">How to write clean code</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Top 10 React Hooks</li>
            <li className="text-blue-600 hover:underline cursor-pointer">What’s new in JavaScript 2025</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-blue-600">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogDetails;
