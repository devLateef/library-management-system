<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function borrow(Request $request, Book $book)
    {
        $request->validate([
            'return_date' => 'required|date|after:today',
        ]);
    
        Transaction::create([
            'user_id' => Auth::id(),
            'book_id' => $book->id,
            'borrowed_at' => now(),
            'due_date' => $request->return_date,
            'status' => 'borrowed',
            'fine' => 0,
        ]);
        $book->update(['status' => 'Borrowed']);
        return redirect()->back()->with('Message', 'Book borrowed successfully!');
    }

    public function return(Book $book)
    {
        $transaction = $book->transactions()
        ->where('user_id', auth()->id())
        ->where('status', 'borrowed')
        ->latest()
        ->first();

    if ($transaction) {
        $now = now();
        $due = \Carbon\Carbon::parse($transaction->due_date);
        $fine = $now->greaterThan($due) ? $now->diffInDays($due) * 100 : 0;

        $transaction->update([
            'returned_at' => $now,
            'status' => 'returned',
            'fine' => $fine,
        ]);

        $book->update(['status' => 'Available']);
    }

    return redirect()->back()->with('Message', 'Book returned successfully!');
    }

    public function showByBook(Book $book)
    {
        $transactions = $book->transactions()->with('user')->get();

        return Inertia::render('Transactions/Show', [
            'book' => $book,
            'transactions' => $transactions,
        ]);
    }
}
