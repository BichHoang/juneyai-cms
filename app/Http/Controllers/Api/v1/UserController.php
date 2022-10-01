<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends BaseController
{
    public function index() {
        $response = [
            'users' => User::all(),
        ];

        return $this->sendResponseSuccess($response);
    }
}
