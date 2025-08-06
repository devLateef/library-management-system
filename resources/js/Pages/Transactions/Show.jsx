import { Link } from "@inertiajs/react";
import DashboardLayout from "../Layouts/DashboardLayout";

const Show = ({ book, transactions }) => {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-6">
            <Link href="/dashboard" className="text-blue-600 hover:underline text-sm">
              ← Back to Books
            </Link>
          </div>
  
          <h1 className="text-2xl font-bold mb-4">Transactions for "{book.name}"</h1>
  
          <div className="mb-4 p-4 border rounded bg-gray-50">
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Category:</strong> {book.category}</p>
          </div>
  
          {transactions.length === 0 ? (
            <p className="text-gray-500 italic">No transactions found for this book.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-sm text-left text-gray-800 shadow rounded">
                <thead className="bg-gray-200 text-xs uppercase text-gray-600">
                  <tr>
                    <th className="px-4 py-2">Borrower</th>
                    <th className="px-4 py-2">Borrowed At</th>
                    <th className="px-4 py-2">Due Date</th>
                    <th className="px-4 py-2">Returned At</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2">{transaction.user?.first_name}</td>
                      <td className="px-4 py-2">{new Date(transaction.borrowed_at).toLocaleDateString()}</td>
                      <td className="px-4 py-2">{new Date(transaction.due_date).toLocaleDateString()}</td>
                      <td className="px-4 py-2">
                        {transaction.returned_at
                          ? new Date(transaction.returned_at).toLocaleDateString()
                          : <span className="text-red-500 italic">Not Returned</span>}
                      </td>
                      <td className="px-4 py-2">
                        {transaction.returned_at
                          ? <span className="text-green-600 font-semibold">Returned</span>
                          : <span className="text-yellow-600 font-semibold">Borrowed</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </DashboardLayout>
    );
  };  

export default Show;
