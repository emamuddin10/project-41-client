import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from './UseAxiosSecure';

const UseAllBlogs = () => {
    const axiosSecure = UseAxiosSecure()
    const {data:allBlogs} = useQuery({
        queryKey:['blogs'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get('http://localhost:5000/allBlogs')
            return data;
        }
    })
    return [allBlogs]
};

export default UseAllBlogs;