import { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css'
import slideImagesGetter from '../adapters/slideImagesGetter';
import Slideshow from './SlideShow';

type props = {
    highLightText?: string;
}

export default function SlideshowHandle({ highLightText }: props) {
    const [urlImageList, setUrlImageList] = useState<string[] | null>(null);

    const handleList = async () => {
        const list = await slideImagesGetter();
        setUrlImageList(list);
    }

    useEffect(() => {
        handleList();
    }, [])

    if (!urlImageList) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <Slideshow urlList={urlImageList} highLightText={highLightText} />
    )
}