import React from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import Errormodal from "../components/Errormodal";
import {
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import { useState, useEffect } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/books")
      .then(async (res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">
          Books List
        </h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-sky-400" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
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
                      <td  className="p-2 border border-slate-700 rounded-md text-center capitalize ">{index + 1}</td>
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
        </>
      )}
    </div>
  );
};

export default Home;
