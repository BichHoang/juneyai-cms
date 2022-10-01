<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Faker\Factory;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    const LOGO = '/images/user_1.jpg';
    const PASSWORD = '12345678';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        $limit = 10;
        for ($i = 0; $i < $limit; $i++) {
            $userFaker = User::create([
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'email' => $faker->unique()->email,
                'avatar' => self::LOGO,
                'password' => Hash::make(self::PASSWORD),
                'remember_token' => \Illuminate\Support\Str::random(10),
            ]);
            $roleName = $faker->randomElement(['manager', 'user', 'admin']);
            $userFaker->syncRoles($roleName);
        }
    }
}
