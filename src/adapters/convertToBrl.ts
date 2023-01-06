export default function convertToBrl(value: number): string {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
};
