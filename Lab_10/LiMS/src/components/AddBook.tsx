import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { type Book } from "../api";

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    publicationYear: 1999,
    genre: "",
    copiesAvailable: 10,
    shelfLocation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/books", book);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="card shadow-sm border-0 p-4 mx-auto"
      style={{ maxWidth: "700px" }}
    >
      <h3 className="mb-4 fw-bold">Add Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small fw-bold">Title</label>
          <input
            className="form-control bg-light border-0"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">Author</label>
          <input
            className="form-control bg-light border-0"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">Publication Year</label>
          <input
            type="number"
            className="form-control bg-light border-0"
            value={book.publicationYear}
            onChange={(e) =>
              setBook({ ...book, publicationYear: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">Genre</label>
          <input
            className="form-control bg-light border-0"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="form-label small fw-bold">Copies Available</label>
          <input
            type="number"
            className="form-control bg-light border-0"
            value={book.copiesAvailable}
            onChange={(e) =>
              setBook({ ...book, copiesAvailable: parseInt(e.target.value) })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Save Book
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="btn btn-outline-secondary border-0"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddBook;
