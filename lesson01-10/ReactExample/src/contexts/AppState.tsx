import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {ActionTypes, reducer} from './reducer/reducer';
import {AppState, initialState} from './state/state';
import api, {getHeaders} from '../api/api';
import * as Keychain from 'react-native-keychain';

export interface AppContext {
  number: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
const TOKEN_STORAGE_KEY = 'com.reactexample.token';
const USER_STORAGE_KEY = 'com.reactexample.user';

export const AppContext = createContext<AppState>(initialState);

interface AppStateProviderProps {
  children: ReactNode;
}
export function AppStateProvider({children}: AppStateProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const load = async () => {
      try {
        const token = await Keychain.getGenericPassword({
          service: TOKEN_STORAGE_KEY,
        });
        const user = await Keychain.getGenericPassword({
          service: USER_STORAGE_KEY,
        });

        if (token && user) {
          dispatch({
            type: ActionTypes.LOGIN,
            payload: {token: token.password, user: JSON.parse(user.password)},
          });
        } else {
          dispatch({type: ActionTypes.LOGOUT, payload: null});
        }
      } catch (error) {
        console.log(error);
      }
    };

    load();
  }, []);

  async function storageAuthData(token: string, user: any) {
    const a = await Keychain.setGenericPassword('token', token, {
      service: TOKEN_STORAGE_KEY,
    });
    const b = await Keychain.setGenericPassword('user', JSON.stringify(user), {
      service: USER_STORAGE_KEY,
    });
  }

  async function removeAuthData() {
    await Keychain.resetGenericPassword({service: TOKEN_STORAGE_KEY});
    await Keychain.resetGenericPassword({service: USER_STORAGE_KEY});
  }

  const increment = useCallback(() => {
    dispatch({type: ActionTypes.INCREMET});
  }, []);

  const decrement = useCallback(() => {
    dispatch({type: ActionTypes.DECREMENT});
  }, []);
  const reset = useCallback(() => {
    dispatch({type: ActionTypes.RESET});
  }, []);

  const sum = useCallback((num: number) => {
    dispatch({type: ActionTypes.RESET, payload: num});
  }, []);
  const multiply = useCallback((num: number) => {
    dispatch({type: ActionTypes.RESET, payload: num});
  }, []);
  const divide = useCallback((num: number) => {
    dispatch({type: ActionTypes.RESET, payload: num});
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const data = {
        email,
        password,
      };
      const response = await api.post('/auth/sign-in', JSON.stringify(data), {
        headers: getHeaders(),
      });

      const responseData: any = response.data;
      console.log(responseData);
      const user = {
        id: responseData.id,
        name: responseData.name,
        email: responseData.email,
        cpf: responseData.cpf,
        avatar: responseData.avatar,
        xp: responseData.xp,
        level: responseData.level,
        achiviments: responseData.achiviments,
      };

      storageAuthData(responseData.token, user);
      dispatch({
        type: ActionTypes.LOGIN,
        payload: {token: responseData.token, user},
      });
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await removeAuthData();
      dispatch({type: ActionTypes.LOGOUT});
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        auth: {
          ...state.auth,
          login,
          logout,
        },
        count: {
          ...state.count,
          increment,
          decrement,
          reset,
          sum,
          multiply,
          divide,
        },
      }}>
      {children}
    </AppContext.Provider>
  );
}
