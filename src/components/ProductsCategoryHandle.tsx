import { useState, useEffect } from 'react';
import productCategoryListGetter from '../adapters/productCategoryListGetter';
import Loading from './Loading';
import ProductCategoryList from './ProductCategoryList';
import ProductCategoryListEmpty from './ProductCategoryListEmpty';

export default function ProductCategorysHandle() {
    const [list, setList] = useState<string[] | null>(null);

    const handleList = async () => {
        const data = await productCategoryListGetter();
        setList(data);
    };

    useEffect(() => {
        handleList();
    }, []);

    if (!list) return <Loading />
    if (!list.length) return <ProductCategoryListEmpty />

    return <ProductCategoryList list={list} />
}