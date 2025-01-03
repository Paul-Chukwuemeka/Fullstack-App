import {
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Errormodal from "./Errormodal";
import PropTypes from "prop-types";

const Card = ({ error, books }) => {
  return (
    <div className=" grid grid-cols-2 w-full gap-10 lg:gap-10 p-4 px-10 lg:grid-cols-4 ">
      {!error ? (
        books.map((book) => {
          return (
            <div
              key={book._id}
              className="bg-white p-2 hover:shadow-lg relative rounded-md border border-slate-700 "
            >
              <p className="p-1  font-bold text-xl capitalize ">
                {book.title}
              </p>
              <p className="p-2  font-lg text-lg capitalize ">
                {book.author}
              </p>
              <p className="p-0.5  absolute top-1 right-1 bg-sky-400 text-white rounded-md">
                {book.publishYear}
              </p>
              <div className="p-4  text-2xl flex justify-between gap-3 items-center ">
                <Link
                  to={`/books/show/${book._id}`}
                >
                  <BsInfoCircle className="text-green-500 hover:text-sky-500" />
                </Link>
                <Link
                  to={`/books/edit/${book._id}`}
                >
                  <AiOutlineEdit className="text-yellow-600 hover:text-sky-500" />
                </Link>

                <Link
                  to={`/books/delete/${book._id}`}
                >
                  <AiOutlineDelete className="text-red-600 hover:text-sky-500" />
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <Errormodal />
      )}
    </div>
  );
};

Card.propTypes = {
  error: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired,
};
export default Card;
