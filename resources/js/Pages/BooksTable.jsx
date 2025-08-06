import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

const BooksTable = ({ books }) => {
  const { delete: destroy } = useForm();
  const borrowForm = useForm({ return_date: "" });
  const returnForm = useForm();

  const [showModal, setShowModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const submit = (e, bookId) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this book?")) {
      destroy(`/books/${bookId}`);
    }
  };

  const openBorrowModal = (bookId) => {
    setSelectedBookId(bookId);
    setShowModal(true);
  };

  const handleBorrowSubmit = () => {
    const today = new Date();
    const selectedDate = new Date(borrowForm.data.return_date);

    if (!borrowForm.data.return_date) {
      alert("Please select a return date.");
      return;
    }

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      alert("Return date must be after today.");
      return;
    }

    borrowForm.post(`/books/${selectedBookId}/borrow`, {
      onSuccess: () => {
        setShowModal(false);
        setSelectedBookId(null);
        borrowForm.setData("return_date", "");
      },
    });
  };

  const handleReturn = (bookId) => {
    if (confirm("Are you sure you want to return this book?")) {
      returnForm.post(`/books/${bookId}/return`);
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white text-sm text-left text-gray-800">
        <thead className="bg-gray-200 text-xs uppercase text-gray-600">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Author</th>
            <th className="px-4 py-3">Publisher</th>
            <th className="px-4 py-3">ISBN</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Days Left</th>
            <th className="px-4 py-3 text-center w-64">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {books.map((book) => (
            <tr key={book.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{book.name}</td>
              <td className="px-4 py-3">{book.author}</td>
              <td className="px-4 py-3">{book.publisher}</td>
              <td className="px-4 py-3">{book.isbn}</td>
              <td className="px-4 py-3">{book.category}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded ${
                    book.status === "Available"
                      ? "bg-green-600"
                      : "bg-red-600"
                  } text-white`}
                >
                  {book.status}
                </span>
              </td>
              <td className="px-4 py-3">
                {book.status !== "Available" && book.due_date ? (
                  (() => {
                    const today = new Date();
                    const dueDate = new Date(book.due_date);
                    const diffTime =
                      dueDate.getTime() - today.setHours(0, 0, 0, 0);
                    const diffDays = Math.ceil(
                      diffTime / (1000 * 60 * 60 * 24)
                    );
                    return (
                      <span
                        className={`text-sm font-medium ${
                          diffDays <= 0 ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {diffDays <= 0
                          ? "Overdue"
                          : `${diffDays} day${diffDays > 1 ? "s" : ""}`}
                      </span>
                    );
                  })()
                ) : (
                  "-"
                )}
              </td>

              <td className="px-4 py-3 text-center">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Link
                    href={`/books/${book.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold"
                  >
                    View
                  </Link>

                  <Link
                    href={`/books/${book.id}/edit`}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-semibold"
                  >
                    Edit
                  </Link>

                  {book.status === "Available" ? (
                    <button
                      onClick={() => openBorrowModal(book.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-semibold"
                    >
                      Borrow
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleReturn(book.id)}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-xs font-semibold"
                      >
                        Return
                      </button>

                      <Link
                        href={`/transactions/book/${book.id}`}
                        className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded text-xs font-semibold"
                      >
                        Details
                      </Link>
                    </>
                  )}

                  <button
                    onClick={(e) => submit(e, book.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Borrow Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Select Return Date</h2>
            <input
              type="date"
              className="w-full border p-2 rounded mb-4"
              value={borrowForm.data.return_date}
              onChange={(e) =>
                borrowForm.setData("return_date", e.target.value)
              }
              min={new Date().toISOString().split("T")[0]}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-3 py-1 rounded"
                onClick={() => {
                  setShowModal(false);
                  borrowForm.setData("return_date", "");
                  setSelectedBookId(null);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded"
                onClick={handleBorrowSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksTable;
