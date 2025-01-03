import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import Errormodal from "../components/Errormodal";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [error ,setError] = useState(false)
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((res) => {
        setBook(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(true);
      });
  }, []);

  return (
    <div className="w-full h-screen p-10">
      <h1 className="text-3xl font-bold my-8">
        Show Book
      </h1>
      <BackButton />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          !error ? (
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-full p-4">
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">
                  Id
                </span>
                <span>{book._id}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">
                  Title
                </span>
                <span>{book.title}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">
                  Author
                </span>
                <span className="capitalize">{book.author}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">
                  Publish Year
                </span>
                <span>{book.publishYear}</span>
              </div>
            </div>
          ) : (
            <Errormodal />
          )
        )}
      </div>
    </div>
  );
};

export default ShowBook;
