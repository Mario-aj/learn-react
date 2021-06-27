import { useContext } from 'react';
import { ThemeContext } from 'src/contexts/theme-context';

export const useTheme = () => useContext(ThemeContext);
