import { useContext } from 'react';
import { DarkModeContext } from '../context';

export const useDarkMode = () => useContext(DarkModeContext);
