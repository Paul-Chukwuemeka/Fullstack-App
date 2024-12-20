import axios from "axios";
import React, { useState } from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  if (loading) {
    return <Spinner />;
  }
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/books/${id}`)
      .then(() => {
        navigate("/");
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-8">
      <h1 className="my-6 text-3xl ">
        Delete book
      </h1>
      <BackButton />
      <div className="mx-auto w-[500px] rounded-lg bg-white text-center p-8">
        <p className="font-bold text-xl">
          Are you sure you want to delete this
          book?
        </p>
        <button className="bg-red-500 px-7 py-2 mt-8
         text-white rounded-lg"
         onClick={handleDelete}
         >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
