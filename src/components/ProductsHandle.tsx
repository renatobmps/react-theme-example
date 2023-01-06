import { useState, useEffect } from 'react';
import productListGetter, { product } from '../adapters/productListGetter';
import Loading from './Loading';
import ProductList from './ProductList';
import ProductListEmpty from './ProductListEmpty';

export default function ProductsHandle() {
    const [productList, setProductList] = useState<product[] | null>(null);

    const handleList = async () => {
        const products = await productListGetter();
        setProductList(products);
    };

    useEffect(() => {
        handleList();
    }, []);

    if (!productList) return <Loading height='50vh' />
    if (!productList.length) return <ProductListEmpty />

    return <ProductList list={productList} />
}