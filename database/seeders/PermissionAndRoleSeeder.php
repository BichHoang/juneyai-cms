<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use App\Models\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PermissionAndRoleSeeder extends Seeder
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
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // USER MODEL
        $userPermission1 = Permission::create(['name' => 'create:user']);
        $userPermission2 = Permission::create(['name' => 'read:user']);
        $userPermission3 = Permission::create(['name' => 'update:user']);
        $userPermission4 = Permission::create(['name' => 'delete:user']);

        // ROLE MODEL
        $rolePermission1 = Permission::create(['name' => 'create:role']);
        $rolePermission2 = Permission::create(['name' => 'read:role']);
        $rolePermission3 = Permission::create(['name' => 'update:role']);
        $rolePermission4 = Permission::create(['name' => 'delete:role']);

        // PERMISSION MODEL
        $permission1 = Permission::create(['name' => 'create:permission']);
        $permission2 = Permission::create(['name' => 'read:permission']);
        $permission3 = Permission::create(['name' => 'update:permission']);
        $permission4 = Permission::create(['name' => 'delete:permission']);

        // ADMINS
        $adminPermission1 = Permission::create(['name' => 'create:admin']);
        $adminPermission2 = Permission::create(['name' => 'read:admin']);
        $adminPermission3 = Permission::create(['name' => 'update:admin']);
        $adminPermission4 = Permission::create(['name' => 'delete:admin']);

        // Misc
        $miscPermission = Permission::create(['name' => 'N/A']);

        $ownerRole = Role::create(['name' => 'owner']);
        $adminRole = Role::create(['name' => 'admin']);
        $managerRole = Role::create(['name' => 'manager']);
        $userRole = Role::create(['name' => 'user']);

        $ownerRole->syncPermissions([
            $userPermission1,
            $userPermission2,
            $userPermission3,
            $userPermission4,
            $rolePermission1,
            $rolePermission2,
            $rolePermission3,
            $rolePermission4,
            $permission1,
            $permission2,
            $permission3,
            $permission4,
            $adminPermission1,
            $adminPermission2,
            $adminPermission3,
            $adminPermission4,
        ]);

        $adminRole->syncPermissions([
            $userPermission1,
            $userPermission2,
            $userPermission3,
            $userPermission4,
            $rolePermission1,
            $rolePermission2,
            $rolePermission3,
            $rolePermission4,
            $permission1,
            $permission2,
            $permission3,
            $permission4,
            $adminPermission2,
        ]);

        $managerRole->syncPermissions([
            $userPermission2,
            $rolePermission2,
            $permission2,
            $adminPermission2,
        ]);

        $userRole->syncPermissions([
            $miscPermission,
        ]);

        $owner = User::create([
            'first_name' => 'Nam Nam',
            'last_name' => 'Hoang',
            'email' => 'owner@juneyai.com',
            'avatar' => self::LOGO,
            'password' => Hash::make(self::PASSWORD),
            'remember_token' => \Illuminate\Support\Str::random(10),
        ]);
        $owner->syncRoles([$ownerRole]);

        $admin = User::create([
            'first_name' => 'Bich',
            'last_name' => 'Hoang',
            'email' => 'admin@juneyai.com',
            'avatar' => self::LOGO,
            'password' => Hash::make(self::PASSWORD),
            'remember_token' => \Illuminate\Support\Str::random(10),
        ]);
        $admin->syncRoles([$adminRole]);
    
        $manager = User::create([
            'first_name' => 'Oc',
            'last_name' => 'Manager',
            'email' => 'manager@juneyai.com',
            'avatar' => self::LOGO,
            'password' => Hash::make(self::PASSWORD),
            'remember_token' => \Illuminate\Support\Str::random(10),
        ]);
        $manager->syncRoles([$managerRole]);

        $user = User::create([
            'first_name' => 'Kim Cua',
            'last_name' => 'Hoang',
            'email' => 'user@juneyai.com',
            'avatar' => self::LOGO,
            'password' => Hash::make(self::PASSWORD),
            'remember_token' => \Illuminate\Support\Str::random(10),
        ]);
        $user->syncRoles([$userRole]);
    }
}
