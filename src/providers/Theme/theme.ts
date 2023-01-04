import { DefaultTheme } from "styled-components";

const shared = {
    borderRadius: '5px',
    maxWidth: '56rem',
    pallete: {
        blue: {
            100: '#2C74B3',
            300: '#205295',
            700: '#144272',
            900: '#0A2647',
        }
    }
};

export const dark: DefaultTheme = {
    ...shared,
    pallete: {
        ...shared.pallete,
        gray: {
            100: '#AAAAAA',
            200: '#888888',
            300: '#777777',
            400: '#555555',
            500: '#444444',
            600: '#333333',
            700: '#222222',
            800: '#111111',
            900: '#000000',
        },
    },
};

export const light: DefaultTheme = {
    ...shared,
    pallete: {
        ...shared.pallete,
        gray: {
            100: '#333333',
            200: '#666666',
            300: '#777777',
            400: '#888888',
            500: '#AAAAAA',
            600: '#BBBBBB',
            700: '#CECECE',
            800: '#DDDDDD',
            900: '#EFEFEF',
        },
    },
};
