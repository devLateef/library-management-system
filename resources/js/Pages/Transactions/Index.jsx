import React from 'react';
import { useForm, router } from '@inertiajs/react';

export default function Transactions({ transactions, auth }) {
    const { data, setData, post } = useForm({ book_id: '' });

    const handleBorrow = (e) => {
        e.preventDefault();
        post(route('transactions.borrow'));
    };

    const handleReturn = (id) => {
        router.put(route('transactions.return', id));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
            <h1 className="text-xl font-bold mb-4">📚 Book Transactions</h1>

            <form onSubmit={handleBorrow} className="mb-6 flex gap-4">
                <input
                    type="number"
                    placeholder="Book ID"
                    value={data.book_id}
                    onChange={(e) => setData('book_id', e.target.value)}
                    className="border rounded px-4 py-2 w-1/2"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Borrow Book
                </button>
            </form>

            <table className="w-full border text-sm">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-2 py-1">#</th>
                        <th className="border px-2 py-1">Book</th>
                        <th className="border px-2 py-1">Borrowed At</th>
                        <th className="border px-2 py-1">Due Date</th>
                        <th className="border px-2 py-1">Status</th>
                        <th className="border px-2 py-1">Returned</th>
                        <th className="border px-2 py-1">Fine</th>
                        <th className="border px-2 py-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t, i) => (
                        <tr key={t.id}>
                            <td className="border px-2 py-1">{i + 1}</td>
                            <td className="border px-2 py-1">{t.book?.name}</td>
                            <td className="border px-2 py-1">{t.borrowed_at}</td>
                            <td className="border px-2 py-1">{t.due_date}</td>
                            <td className="border px-2 py-1">{t.status}</td>
                            <td className="border px-2 py-1">{t.returned_at ?? '—'}</td>
                            <td className="border px-2 py-1">₦{t.fine ?? 0}</td>
                            <td className="border px-2 py-1">
                                {t.status === 'borrowed' && (
                                    <button
                                        onClick={() => handleReturn(t.id)}
                                        className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                                    >
                                        Return
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
