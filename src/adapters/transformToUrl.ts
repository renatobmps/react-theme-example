type numberDictionary = {
    [key: string]: string,
};

export default function transformToUrl(name: string): string {
    const numberDictionary: numberDictionary = {
        0: 'o',
        1: 'i',
        2: 'a',
        3: 'e',
        4: 'a',
        5: 's',
        6: 'g',
        7: 't',
        8: 'b',
        9: 'q',
    };
    const lowerCase = name.toLocaleLowerCase();
    const withoutNumbers = lowerCase.split('').map(letter => (
        numberDictionary[letter] ? numberDictionary[letter] : letter
    )).join('');
    const withoutAccents = withoutNumbers.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const justLetters = withoutAccents.replace(/[^a-z\s_]/g, '');
    const withUnderline = justLetters.trim().replace(/\s/g, '_');
    const removedDuplicatesSpaces = withUnderline.replace(/__+/g, '_');

    return removedDuplicatesSpaces;
}