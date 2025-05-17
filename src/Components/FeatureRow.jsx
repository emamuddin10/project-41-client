import React from 'react';

const FeatureRow = ({item}) => {
    return (
         <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='block relative'>
                <img
                  alt='profile'
                  src={item?.imageUrl}
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
          {item.blogerName}
        </td>
      </tr>
    );
};

export default FeatureRow;