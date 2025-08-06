import { Link } from "@inertiajs/react";
import DashboardLayout from "../Layouts/DashboardLayout";

const BookShow = ({ book }) => {
  return (
    <DashboardLayout>
      <div className="w-full max-w-6xl mx-auto bg-white shadow rounded-lg p-8 -mt-2">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Book Details</h1>

        <table className="w-full text-sm text-left border border-gray-300">
          <tbody>
            <tr className="border-b">
              <th className="px-6 py-4 bg-gray-100 w-1/4 text-gray-700">Name</th>
              <td className="px-6 py-4 text-gray-800">{book.name}</td>
            </tr>
            <tr className="border-b">
              <th className="px-6 py-4 bg-gray-100 text-gray-700">Author</th>
              <td className="px-6 py-4 text-gray-800">{book.author}</td>
            </tr>
            <tr className="border-b">
              <th className="px-6 py-4 bg-gray-100 text-gray-700">Publisher</th>
              <td className="px-6 py-4 text-gray-800">{book.publisher}</td>
            </tr>
            <tr className="border-b">
              <th className="px-6 py-4 bg-gray-100 text-gray-700">Category</th>
              <td className="px-6 py-4 text-gray-800">{book.category}</td>
            </tr>
            <tr className="border-b">
              <th className="px-6 py-4 bg-gray-100 text-gray-700">ISBN</th>
              <td className="px-6 py-4 text-gray-800">{book.isbn}</td>
            </tr>
            <tr className="border-b">
              <th className="px-6 py-4 bg-gray-100 text-gray-700">Status</th>
              <td className="px-6 py-4 text-gray-800">{book.status}</td>
            </tr>
            {book.status !== "Available" && book.borrowed_by && (
              <tr>
                <th className="px-6 py-4 bg-gray-100 text-gray-700">Borrowed By</th>
                <td className="px-6 py-4 text-gray-800">{book.borrowed_by.name}</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookShow;
