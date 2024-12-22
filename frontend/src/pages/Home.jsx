import React from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import Errormodal from "../components/Errormodal";
import { MdOutlineAddBox } from "react-icons/md";
import { useState, useEffect } from "react";
import Table from "../components/Table";

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
        console.log(err)
        setError(true);
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
          {error && <Errormodal />}
          <Table books={books} error={error} />
        </>
      )}
    </div>
  );
};

export default Home;
