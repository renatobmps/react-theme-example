import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../Contexts/Theme';
import { dark, light } from './theme';

type props = {
    children: React.ReactNode;
}

export default function ThemeManager({ children }: props) {
    const context = useContext(Theme);
    const theme = context?.value;

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            {children}
        </ThemeProvider>
    )
}
