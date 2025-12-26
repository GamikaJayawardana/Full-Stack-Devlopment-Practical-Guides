import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api, { type Book } from "../api";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "Modern Computing",
      author: "Gamika Jayawardhana",
      publicationYear: 2024,
      genre: "Education",
      copiesAvailable: 5,
      shelfLocation: "A-1",
    },
    {
      id: "2",
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      publicationYear: 2009,
      genre: "Cyber Security",
      copiesAvailable: 1,
      shelfLocation: "A-3",
    },
  ]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("/books");
        setBooks(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
  }, []);

  const deleteBook = async (id: string) => {
    try {
      await api.delete(`/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card shadow-sm border-0 p-4">
      <h3 className="mb-4 fw-bold">Library — Book List</h3>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Shelf</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publicationYear}</td>
              <td>{book.genre}</td>
              <td>{book.shelfLocation || "-"}</td>
              <td>
                <Link
                  to={`/edit/${book.id}`}
                  className="btn btn-outline-secondary btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteBook(book.id!)}
                  className="btn btn-danger btn-sm text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
