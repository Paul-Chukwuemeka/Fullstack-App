import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import Errormodal from "../components/Errormodal";
import { MdOutlineAddBox } from "react-icons/md";
import { useState, useEffect } from "react";
import Table from "../components/Table";
import Card from "../components/Card";


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [displayType, setDisplaytype] =
    useState("table");

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
        console.log(err);
        setError(true);
      });
  }, []);

  return (
    <div className="p-4 h-screen">
      <div className="flex justify-between items-center px-2">
        <h1 className="text-3xl font-bold my-8">
          Books List
        </h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-sky-400" />
        </Link>
      </div>
      <div className="flex justify-end items-center text-white  text-lg px-2">
        <button
          className="mr-2 font-extrabold hover:bg-sky-500 bg-sky-400 rounded-md p-1"
          onClick={() => setDisplaytype("table")}
        >
          Table
        </button>
        <button
          className="mr-2 font-extrabold bg-sky-400 hover:bg-sky-500 rounded-md p-1"
          onClick={() => setDisplaytype("row")}
        >
          List
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error && <Errormodal />}
          {displayType === "table" ? (
            <Table books={books} error={error} />
          ) : (
            <Card books={books} error={error} />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
