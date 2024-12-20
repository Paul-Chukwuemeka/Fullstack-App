import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <Link to={destination} >
      <BsArrowLeft className="text-4xl w-12 text-white bg-sky-400 px-2 py-1 rounded-xl" />
    </Link>
  );
};

export default BackButton;
