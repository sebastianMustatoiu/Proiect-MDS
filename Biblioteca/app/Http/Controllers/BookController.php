<?php

namespace App\Http\Controllers;

use App\Models\book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = book::query();

        if(request('search')){
            $query->where('title','like','%'.request('search').'%')
                ->orWhere('author','like','%'.request('search').'%');
        }


        $categories = $query->pluck('category')->unique()->values();

        $publishers = $query->pluck('publisher')->unique()->values();

        $filters = [
            'Categories' => $categories,
            'Publishers' => $publishers,
        ];

    if(request('Categories')) {
        $appliedCategories = explode('_', request('Categories'));
        $query->whereIn('category', $appliedCategories);
    }
    else
        $appliedCategories = [];

    if(request('Publishers')) {
        $appliedPublishers = explode('_', request('Publishers'));
        $query->whereIn('publisher', $appliedPublishers);
    }
    else
        $appliedPublishers = [];

        if (count($appliedCategories) > 0){
            $query->whereIn('category', $appliedCategories);
        }

        if (count($appliedPublishers) > 0){
            $query->whereIn('publisher', $appliedPublishers);
        }

        $books = $query->paginate(20)->onEachSide(1)->withQueryString();

        return Inertia::render('Books/Books', [
            'books' => $books,
            'queryParams' => request()->query() ?: null,
            'filters' => $filters,

        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Books/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required', 'string','max:200'],
            'author' => ['required', 'string','max:200'],
            'image' => ['required', 'image', 'max:2048'],
            'publication_date' => ['required', 'date'],
        ]);

        $book = new Book();
        $book->title = $validatedData['title'];
        $book->author = $validatedData['author'];
        $book->publication_date = $validatedData['publication_date'];
        $image = $validatedData['image'];
        $imageName = $image->getClientOriginalName();
        $image->storeAs('images', $imageName, 'public');
        $book->image = '/storage/images/' . $imageName;

        $book->save();
        return Redirect(route('books.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(book $book)
    {
        //
    }
}
