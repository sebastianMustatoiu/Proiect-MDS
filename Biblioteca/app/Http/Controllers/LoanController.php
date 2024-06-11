<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $loans = Loan::with('book')->where('user_id', $user->id)->get();
        return Inertia::render('MyLoans', [
            'loans' => $loans
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();
        $bookId = $request->input('book_id');
        $returnDate = $request->input('return_date');

        // Log the received data
        \Log::info('Store Loan Request:', ['book_id' => $bookId, 'return_date' => $returnDate]);

        if (!$bookId) {
            return redirect()->back()->withErrors(['book_id' => 'Book ID is required']);
        }

        $loan = new Loan();
        $loan->user_id = $user->id;
        $loan->book_id = $bookId;
        $loan->loan_date = Carbon::now();
        $loan->return_date = $returnDate;
        $loan->save();

        return redirect(route('loans.index'))->with('success', 'Loan has been added');
    }
     /**
     * Display the specified resource.
     */
    public function show(loan $loan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(loan $loan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, loan $loan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        $loan = loan::findOrFail($id);
        $user = auth()->user();

        if($loan->user_id === $user->id){
            $loan->delete();
            return redirect(route('loans.index'))->with('success', 'Loan has been deleted');
        }
        return redirect(route('loans.index'))->with('error', 'You are not authorized to delete this loan');
    }
}
