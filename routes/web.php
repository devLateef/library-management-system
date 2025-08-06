<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', [AuthController::class, 'showHome']);
Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register.form');
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth')->group( function(){
    Route::get('/dashboard', [AuthController::class, 'showDashboard']);
    Route::post('/books/create', [BookController::class, 'store']);
    Route::get('/books/create', [BookController::class, 'create']);
    Route::get('/books/{book}', [BookController::class, 'show']);
    Route::get('/books/{book}/edit', [BookController::class, 'edit']);
    Route::put('/books/{book}', [BookController::class, 'update']);
    Route::get('/users/create', [UserController::class, 'create']);
    Route::post('/users/create', [UserController::class, 'store']);
    Route::put('/profile/update', [UserController::class, 'update']);
    Route::get('/profile/update', [UserController::class, 'edit']);
    Route::get('/profile', [UserController::class, 'profile'])->name('profile');
    Route::delete('/books/{book}', [BookController::class, 'destroy'])->name('book.destroy');
    Route::post('/books/{book}/borrow', [TransactionController::class, 'borrow']);
    Route::post('/books/{book}/return', [TransactionController::class, 'return']);
    Route::get('/transactions/book/{book}', [TransactionController::class, 'showByBook']);
    // Route::get('/books', [BookController::class, 'index']);


    Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions.index');
    Route::post('/transactions/borrow', [TransactionController::class, 'store'])->name('transactions.borrow');
    Route::put('/transactions/{transaction}/return', [TransactionController::class, 'returnBook'])->name('transactions.return');
});