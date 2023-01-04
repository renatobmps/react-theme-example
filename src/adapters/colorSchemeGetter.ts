export default function colorSchemeGetter(): 'dark' | 'light' {
    const matched = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return matched ? 'dark' : 'light';
}