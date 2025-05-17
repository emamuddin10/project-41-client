import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';
import { AuthContext } from '../Firebase/AuthProvider/AuthProvider';

const WishlistRow = ({item,refetch}) => {
   const axiosSecure = UseAxiosSecure();
   const {user}=useContext(AuthContext);


//   delete wish list item in wishlist page
   const handleDelete=(id)=>{
    console.log(id)
    axiosSecure.delete(`/deleteWish/${id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.deletedCount > 0){
            toast.success('product has been deleted successfully')
            refetch();
        }
    })
   } 

    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='block relative'>
                <img
                  alt='profile'
                  src={item?.image}
                  className='mx-auto object-cover rounded h-10 w-15 '
                />
              </div>
            </div>
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>{item?.title}</p>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p>${item?.date} </p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p>${item?.category} </p>
        </td>

        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span onClick={()=>handleDelete(item._id)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span  className='relative'>Cancel</span>
          </span>
        </td>
      </tr>
    );
};

export default WishlistRow;