import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./MainLayout/Layout";
import Home from "./HomePages/Home";
import AddBlog from "./Components/AddBlogs";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import BlogDetails from "./Components/BlogDetails";
import AllBlogs from "./Pages/AllBlogs";
import Wishlist from "./Pages/Wishlist";
import FeaturedBlog from "./Pages/FeaturedBlog";
import UpdateBlog from "./Components/UpdateBlog";
import PrivetRoute from "./Components/PrivateRoute";
import ErrPage from "./Components/ErrPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrPage></ErrPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addBlog',
            element:<PrivetRoute><AddBlog></AddBlog></PrivetRoute>
        },
        {
            path:'/wishlist',
            element:<PrivetRoute><Wishlist></Wishlist></PrivetRoute>
        },
        {
            path:'/featureBlog',
            element:<FeaturedBlog></FeaturedBlog>
        },
        {
            path:'/allBlogs',
            element:<AllBlogs></AllBlogs>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'/details/:id',
            element:<BlogDetails></BlogDetails>,
            loader:({params})=> fetch(`http://localhost:5000/blogDetails/${params.id}`)
        },
        {
            path:'/update-blog/:id',
            element:<PrivetRoute><UpdateBlog></UpdateBlog> </PrivetRoute>,
            loader:({params})=> fetch(`http://localhost:5000/blogDetails/${params.id}`)
        },
    ]
  },
]);

export default router;