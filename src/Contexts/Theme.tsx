import { createContext, useState, useEffect } from 'react';
import handleTheme from '../adapters/handleTheme';

type props = {
    children: React.ReactNode;
}

export type themeVariant = 'light' | 'dark';

type result = {
    value: string;
    handler: (newValue: themeVariant | null) => void;
}

export const Theme = createContext<result | null>(null);

export default function ThemeContext({ children }: props) {
    const [currentTheme, setTheme] = useState<themeVariant>('light');
    const [, setSystemProvider] = useState<boolean | null>(null);

    useEffect(() => {
        handleTheme({
            systemTheme: setSystemProvider,
            themeSetter: setTheme,
            resetTheme: false,
        });
    }, []);

    const handler = (newValue: themeVariant | null) => {
        if (newValue) {
            handleTheme({
                systemTheme: setSystemProvider,
                themeSetter: setTheme,
                newValue,
                resetTheme: false,
            });
        } else {
            handleTheme({
                systemTheme: setSystemProvider,
                themeSetter: setTheme,
                resetTheme: true,
            });
        }
    }

    return (
        <Theme.Provider value={{
            value: currentTheme,
            handler,
        }}>
            {children}
        </Theme.Provider>
    )
}