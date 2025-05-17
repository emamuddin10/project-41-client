import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import { AuthContext } from '../Firebase/AuthProvider/AuthProvider';

const UseMyWishlisted = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data:myWish,refetch} = useQuery({
        queryKey:['myWish'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/myWish/${user?.email}`)
            console.log('my wish',data)
            return data;
        }
    })
    return [myWish,refetch];
};

export default UseMyWishlisted;