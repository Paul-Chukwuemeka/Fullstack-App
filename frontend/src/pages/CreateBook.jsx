import React, {
  useState,
  useEffect,
} from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] =
    useState("");
  const [loading, setLoading] = useState(false);

  const handleSaveFunc = () => {
    setLoading(true);
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .post("http://localhost:4000/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div className=" p-4">
      <h1 className="my-8 text-3xl font-bold">Create Book</h1>
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center gap-2
        border-2 border-sky-400 rounded-xl text-lg w-[500px] mx-auto p-4"
        >
          <label
            htmlFor="title"
            className="self-start"
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
          <label
            htmlFor="author"
            className="self-start"
            required
          >
            {" "}
            Author
          </label>
          <input
            required
            type="text"
            value={author}
            onChange={(e) =>
              setAuthor(e.target.value)
            }
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
          <label
            htmlFor="publishYear"
            className="self-start"
          >
            Publish Year{" "}
          </label>
          <input
            type="text"
            required
            value={publishYear}
            onChange={(e) =>
              setPublishYear(e.target.value)
            }
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />

          <button
            onClick={() => {
              handleSaveFunc();
            }}
            className="my-2 bg-sky-500 px-4 py-2 rounded-lg w-3/4"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateBook;
