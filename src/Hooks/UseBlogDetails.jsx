import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from './UseAxiosSecure';

const UseBlogDetails = () => {
     const axiosSecure = UseAxiosSecure()
    const {data:blogDetails} = useQuery({
        queryKey:['blogDetails'],
        queryFn:async()=>{
        const {data} = await axiosSecure.get(`/blogDetails/${}`)
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default UseBlogDetails;