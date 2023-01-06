export default function currentPageGetter() {
    const path = window.location.pathname;

    const splittedPath = path.split('/');
    const currentPath = `/${splittedPath[1]}`;

    return currentPath;
};
