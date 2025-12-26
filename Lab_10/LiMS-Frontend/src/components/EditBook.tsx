import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api, { type Book } from "../api";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    publicationYear: 0,
    genre: "",
    copiesAvailable: 0,
    shelfLocation: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await api.get(`/books/${id}`);
        setBook(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBook();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/books/${id}`, book);
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
      <h3 className="mb-4 fw-bold">Edit Book</h3>
      <form onSubmit={handleUpdate}>
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
        <div className="mb-3">
          <label className="form-label small fw-bold">Copies</label>
          <input
            type="number"
            className="form-control bg-light border-0"
            value={book.copiesAvailable}
            onChange={(e) =>
              setBook({ ...book, copiesAvailable: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="mb-4">
          <label className="form-label small fw-bold">Shelf Location</label>
          <input
            className="form-control bg-light border-0"
            value={book.shelfLocation || ""}
            onChange={(e) =>
              setBook({ ...book, shelfLocation: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-info text-white me-2">
          Update
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

export default EditBook;
