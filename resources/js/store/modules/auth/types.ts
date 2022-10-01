import { User } from '../../../models/user';

export interface AuthState {
    isAuthenticated: boolean;
    currentUser: User|Object;
    roles: string[];
}

export type ILogin = {
    email: string;
    password: string;
}
