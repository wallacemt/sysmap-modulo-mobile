import {
  createContext,
  ReactNode,
  useCallback,
  useReducer,
  useState,
} from 'react';
import {ActionTypes, reducer} from './reducer/reducer';
import {AppState, initialState} from './state/state';

export interface AppContext {
  number: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const AppContext = createContext<AppState>(initialState);

interface AppStateProviderProps {
  children: ReactNode;
}
export function AppStateProvider({children}: AppStateProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  return (
    <AppContext.Provider
      value={{
        ...state,
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
