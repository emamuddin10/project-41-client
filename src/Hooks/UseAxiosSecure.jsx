import axios from "axios";

const instance = axios.create({
    baseURL: 'https://project-41-server.onrender.com',
  });

const UseAxiosSecure = () => {
    return instance;
};

export default UseAxiosSecure;