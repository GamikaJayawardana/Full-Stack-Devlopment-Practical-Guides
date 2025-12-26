import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
        <div className="container">
          <Link
            className="navbar-brand fw-bold text-primary d-flex align-items-center"
            to="/"
          >
            <div
              className="bg-primary text-white rounded p-1 me-2"
              style={{ width: "35px", textAlign: "center" }}
            >
              LB
            </div>
            Library Manager
          </Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Books
            </Link>
            <Link className="nav-link text-primary ms-3" to="/add">
              Add Book
            </Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
