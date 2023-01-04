const fakeImageUrlList: string[] = [
    'https://picsum.photos/600',
    'https://via.placeholder.com/600',
    'https://source.unsplash.com/random',
];

export default function slideImagesGetter(): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fakeImageUrlList);
        }, 2000);
    })
}