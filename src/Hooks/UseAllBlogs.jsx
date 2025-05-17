import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from './UseAxiosSecure';

const UseAllBlogs = () => {
    const axiosSecure = UseAxiosSecure()
    const {data:allBlogs} = useQuery({
        queryKey:['blogs'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get('https://project-41-server.onrender.com/allBlogs')
            return data;
        }
    })
    return [allBlogs]
};

export default UseAllBlogs;