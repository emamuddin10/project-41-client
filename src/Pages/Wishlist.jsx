import React from 'react';
import UseMyWishlisted from '../Hooks/UseMyWishlisted';
import WishlistRow from '../Components/WishlistRow';

const Wishlist = () => {
    const [myWish,refetch] = UseMyWishlisted()
    console.log(myWish);
    return (
         <div>
      <div>
        <h1  className="text-center text-2xl pt-5">My Wishlist Page </h1>
        {/* table row items */}
        {
          myWish?.length ? 
          <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        category
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table row data */}
                    {myWish?.map((cartItem) => (
                      <WishlistRow
                      key={cartItem._id}
                      item={cartItem}
                      refetch={refetch}
                      ></WishlistRow>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
          : 
          <div className="flex items-center justify-center min-h-[calc(100vh-400px)] ">
            <h1>You have not added any wishlist Item</h1>
          </div>
        }
      </div>
    </div>
    );
};

export default Wishlist;