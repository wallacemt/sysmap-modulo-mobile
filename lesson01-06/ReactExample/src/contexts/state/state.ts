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
    isAuthenticate: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshToken: () => Promise<void>;
    isLoading: boolean;
}

export interface AppState {
    count: CountState;
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
    // auth: {
    //     token: null,
    //     isAuthenticate: false,
    //     login: async (email: string, password: string) => {},
    //     logout: () => {},
    //     refreshToken: async () => {},
    //     isLoading: false,
    // }
}
