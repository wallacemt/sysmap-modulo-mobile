interface CountState {
    number: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    sum: (num: number) => void;
    multiply: (num: number) => void;
    divide: (num: number) => void;
}
interface AuthState {
    token: string | null;
    isAuthenticate: boolean | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshToken: () => Promise<void>;
    isLoading: boolean;
    user: any
}

export interface AppState {
    count: CountState;
    auth: AuthState;
}

export const initialState: AppState = {
    count: {
        number: 0,
        increment: () => {},
        decrement: () => {},
        reset: () => {},
        sum: (num: number) => {},
        multiply: (num: number) => {},
        divide: (num: number) => {},
    },
    auth: {
        token: null,
        isAuthenticate: null,
        login: async (email: string, password: string) => {},
        logout: () => {},
        refreshToken: async () => {},
        isLoading: false,
        user: null, 
    }
}
