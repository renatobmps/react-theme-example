import colorSchemeGetter from "./colorSchemeGetter";

export type themeVariant = 'light' | 'dark';

type props = {
    themeSetter: (newValue: themeVariant) => void;
    systemTheme: (newValue: boolean) => void;
    newValue?: themeVariant;
    resetTheme?: boolean;
}

type typeValidation = { [key: string]: boolean };

export default function handleTheme({
    themeSetter,
    systemTheme,
    newValue,
    resetTheme,
}: props) {
    if (resetTheme) {
        localStorage.removeItem('theme');
    }else{
        if (!!newValue) localStorage.setItem('theme', newValue);
    }

    const localValue = localStorage.getItem('theme');

    const validValues: typeValidation = {
        'dark': true,
        'light': true,
    };

    if (localValue && localValue.length && validValues[localValue]) {
        systemTheme(false);
        themeSetter(localValue as themeVariant);
    } else {
        systemTheme(true);
        themeSetter(colorSchemeGetter())
        localStorage.removeItem('theme');
    }
}