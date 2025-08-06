<?php

    namespace App\Services;

    use App\Exceptions\CustomException;
    use App\Models\Book;

    class BookService
    {
        public function registerBook(array $data): Book
        {
            try{
                $book = new Book();
                $book->name = $data['name'];
                $book->author = $data['author'];
                $book->publisher = $data['publisher'];
                $book->accession_no = $data['accession_no'];
                $book->isbn = $data['isbn'];
                $book->call_no = $data['call_no'];
                $book->category = $data['category'];
                $book->save();
                return $book;
            } catch(\Throwable $th){
                logger($th);
                throw new CustomException('Unable to create book');
            }
        }

        public function editBook(array $data, Book $book): Book
        {
            try{
                // $book = Book::findOrFail($id);
                $book->update([
                    'name' => $data['name'],
                    'author' => $data['author'],
                    'publisher' => $data['publisher'],
                    'accession_no' => $data['accession_no'],
                    'isbn' => $data['isbn'],
                    'call_no' => $data['call_no'],
                    'category' => $data['category'],
                ]);
                return $book;
            } catch(\Throwable $th){
                logger()->error($th);
                throw new CustomException('Unable to update book');
            }
        }
    }