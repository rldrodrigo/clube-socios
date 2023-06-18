import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
    token: string | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
    signup: (name: string, email: string, documento: string, login: string, password: string) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>(null!);