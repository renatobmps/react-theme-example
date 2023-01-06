/*
    https://fakestoreapi.com/docs
*/

export default function productCategoryListGetter(): Promise<string[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const fetched = await fetch('https://fakestoreapi.com/products/categories');
            const data = await fetched.json();

            resolve(data);
        } catch (error: any) {
            reject(error?.message || 'Unexpected error');
        };
    });
};
