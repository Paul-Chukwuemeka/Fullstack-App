import React from "react";
import {
    AiOutlineEdit,
    AiOutlineDelete,
  } from "react-icons/ai";
  import { BsInfoCircle } from "react-icons/bs";
  import { Link } from "react-router-dom";
  import Errormodal from "../components/Errormodal";


const Table = ({error,books}) => {
  return (
    <table className="table-auto w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-700 rounded-md ">
            #
          </th>
          <th className="border border-slate-700 rounded-md ">
            Title
          </th>
          <th className="border border-slate-700 rounded-md ">
            Author
          </th>
          <th className="border border-slate-700 rounded-md ">
            Publish Date
          </th>
          <th className="border border-slate-700 rounded-md">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {!error ? (
          books.map((book, index) => {
            return (
              <tr key={book._id}>
                <td className="p-2 border border-slate-700 rounded-md text-center capitalize ">
                  {index + 1}
                </td>
                <td className="p-2 border border-slate-700 rounded-md text-center capitalize ">
                  {book.title}
                </td>
                <td className="p-2 border border-slate-700 rounded-md text-center capitalize ">
                  {book.author}
                </td>
                <td className="p-2 border border-slate-700 rounded-md text-center ">
                  {book.publishYear}
                </td>
                <td className="p-4 border text-xl border-slate-700 rounded-md flex justify-center gap-3 items-center ">
                  <Link
                    to={`/books/show/${book._id}`}
                  >
                    <BsInfoCircle className="text-green-500" />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                  >
                    <AiOutlineEdit className="text-yellow-600" />
                  </Link>

                  <Link
                    to={`/books/delete/${book._id}`}
                  >
                    <AiOutlineDelete className="text-red-600" />
                  </Link>
                </td>
              </tr>
            );
          })
        ) : (
          <Errormodal />
        )}
      </tbody>
    </table>
  );
};

export default Table;
