<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\laravelreact;
use Illuminate\Http\Request;

class LaravelreactController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $new = new laravelreact;
        $new->name =  $request->name;
        $new->email =  $request->email;
        $new->save();
        return response()->json([
            'message' => 'Your Data Is Saved Sucessfully',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\laravelreact  $laravelreact
     * @return \Illuminate\Http\Response
     */
    public function show(laravelreact $laravelreact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\laravelreact  $laravelreact
     * @return \Illuminate\Http\Response
     */
    public function edit(laravelreact $laravelreact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\laravelreact  $laravelreact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, laravelreact $laravelreact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\laravelreact  $laravelreact
     * @return \Illuminate\Http\Response
     */
    public function destroy(laravelreact $laravelreact)
    {
        //
    }
}
