/*
    https://fakestoreapi.com/docs
*/

type productRating = {
    rate: number,
    count: number,
}

export type product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: productRating,
};

export default function productListGetter(): Promise<product[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const fetched = await fetch('https://fakestoreapi.com/products');
            const data = await fetched.json();

            resolve(data);
        } catch (error: any) {
            reject(error?.message || 'Unexpected error');
        };
    });
};
