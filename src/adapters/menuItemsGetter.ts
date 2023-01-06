export type menuItem = {
    url: string;
    label: string;
    active: boolean;
}

export default function menuItemsGetters(): menuItem[] {
    const menu = [
        { url: '/', label: 'Home', active: false },
        { url: '/about', label: 'About', active: false },
        { url: '/products', label: 'Products', active: false },
        { url: '/contact', label: 'Contact', active: false },
    ];

    return menu;
}