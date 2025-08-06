<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Services\BookService;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::with(['latestTransaction'])->get();

        return Inertia::render('Books/Index', [
            'books' => $books->map(function ($book) {
                return [
                    'id' => $book->id,
                    'name' => $book->name,
                    'author' => $book->author,
                    'publisher' => $book->publisher,
                    'isbn' => $book->isbn,
                    'category' => $book->category,
                    'status' => $book->status,
                    'due_date' => optional($book->latestTransaction)->due_date,
                ];
            }),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Books/Create', [
            'book' => null,
            'isEdit' => false
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request, BookService $bookService)
    {

        try {
            // Validate input
            $data = $request->validated();

            // User is written to the database
            $bookService->registerBook($data);
    
            return redirect('dashboard')->with('message', 'Book Registered successfully.');
        } catch (\Throwable $th) {
            logger($th);
            // For custom errors not caught by validation
            return redirect()->back()->with('error', 'Something went wrong. Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return Inertia::render('Books/Show', [
            'book' => $book,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        return Inertia::render('Books/Create', [
            'book' => $book,
            'isEdit' => true
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, BookService $bookService, Book $book)
    {
        $data = $request->validated();
        $bookService->editBook($data, $book);
        return redirect('dashboard')->with('message', 'Book Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        // $book = Book::findOrFail($id);
        $book->delete();
        return redirect()->back()->with('message', 'Book Deleted Successfully');
    }
}
