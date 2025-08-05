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
    }