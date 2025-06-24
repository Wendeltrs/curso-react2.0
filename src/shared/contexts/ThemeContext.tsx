import { Box, ThemeProvider } from "@mui/material";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";

interface IThemeContext {
    themeName: 'light' | 'dark',
    toggleTheme: () => void
}

interface IAppThemeProviderProps {
    children: React.ReactNode
}

export const ThemeContext = createContext({} as IThemeContext);

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(themeName === 'light' ? 'dark' : 'light');
    }, [themeName]);

    const theme = useMemo(() => {
        if (themeName === 'light') {
            return LightTheme;
        }

        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '100vw', height: '100vh', bgcolor: theme.palette.background.default }}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}