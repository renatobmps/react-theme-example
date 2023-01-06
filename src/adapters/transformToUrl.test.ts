import transformToUrl from "./transformToUrl";

describe('transformToUrl', () => {
    it('should to convert correct URL', () => {
        const name = 'S0m3  name with várious   problems to be formated. ';
        const result = transformToUrl(name);

        expect(result).toBeTruthy();
        expect(typeof result).toBe('string');
        expect(result).toBe('some_name_with_various_problems_to_be_formated');
    });

    it('should to convert correct URL same with _', () => {
        const name = 'S0m3 _ name_with várious   problems to be formated. ';
        const result = transformToUrl(name);

        expect(result).toBeTruthy();
        expect(typeof result).toBe('string');
        expect(result).toBe('some_name_with_various_problems_to_be_formated');
    });
})