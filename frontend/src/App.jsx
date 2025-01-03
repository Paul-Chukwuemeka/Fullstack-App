import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";

const App = () => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books/create"
            element={<CreateBook />}
          />
          <Route
            path="/books/edit/:id"
            element={<EditBook />}
          />
          <Route
            path="/books/delete/:id"
            element={<DeleteBook />}
          />
          <Route
            path="/books/show/:id"
            element={<ShowBook />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
