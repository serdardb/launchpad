<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class JsRenderController extends Controller
{
    public function aipad()
    {
        return view('launchpad.aipad');
    }

    public function aipad_callback(Request $request)
    {
        Log::info($request->data);
        return $request->data;
    }
}
