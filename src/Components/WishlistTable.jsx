import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState, useMemo } from "react";
import UseMyWishlisted from "../Hooks/UseMyWishlisted";

const WishlistTable = () => {
  const [myWish] = UseMyWishlisted()
  const [wishlist, setWishlist] = useState([]);
  setWishlist(myWish)

 

  const handleRemove = async (id) => {
    await fetch(`/api/wishlist/${id}`, {
      method: "DELETE",
    });
    setWishlist((prev) => prev.filter((item) => item._id !== id));
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "image",
        header: "Image",
        cell: (info) => (
          <img
            src={info.getValue()}
            alt="blog"
            className="w-16 h-16 object-cover rounded"
          />
        ),
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: (info) =>
          new Date(info.getValue()).toLocaleDateString("en-GB"),
      },
      {
        accessorKey: "userName",
        header: "Wishlisted By",
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => (
          <button
            onClick={() => handleRemove(row.original._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: wishlist,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left p-3 border-b font-semibold"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 border-b">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {wishlist?.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No wishlist found.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistTable;
