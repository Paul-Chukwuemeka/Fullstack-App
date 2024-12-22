import React, {
  useState,
  useEffect,
} from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import Errormodal from "../components/Errormodal";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditBook = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] =
    useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((res) => {
        setTitle(res.data.data.title);
        setAuthor(res.data.data.author);
        setPublishYear(res.data.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const handleEditBook = () => {
    setLoading(true);
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(
        `http://localhost:4000/books/${id}`,
        data
      )
      .then(() => {
        setLoading(false);
        console.log("hey");
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div className="text-3xl font-bold p-4">
      <h1 className="my-8">Edit Book</h1>
      <BackButton />
      {loading ? (
        <Spinner />
      ) : !error ? (
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
              handleEditBook();
            }}
            className="my-2 bg-sky-500 px-4 py-2 rounded-lg w-3/4"
          >
            Submit
          </button>
        </form>
      ) : (
        <Errormodal />
      )}
    </div>
  );
};

export default EditBook;
