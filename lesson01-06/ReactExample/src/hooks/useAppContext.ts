import {useContext} from 'react';
import {AppContext} from '../contexts/AppState';

export default function useAppContext() {
  return useContext(AppContext);
}
