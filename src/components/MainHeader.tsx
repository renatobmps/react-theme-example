import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import currentPageGetter from '../adapters/currentPageGetter';
import { menuItem } from '../adapters/menuItemsGetter';
import MenuItem from './MainHeaderMenuItem';
import ThemeControl from './ThemeControl';

type headerProps = {
    title?: string,
    menu: menuItem[],
}

const Header = styled.header`
    align-items: center;
    background: ${props => props.theme.pallete.gray[800]};
    display: flex;
    position: sticky;
    top: 0%;
    z-index: 2;
`;

const Navigation = styled.nav`
    display: flex;
    flex: 1;
    margin-inline: auto;
    max-width: ${props => props.theme.maxWidth};
    padding: 0 1rem;
    width: 100%;
`;

const NavigationList = styled.ul`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    gap: 1rem;
`;

export default function MainHeader({ title, menu }: headerProps) {
    useEffect(() => {
        if (!!title) {
            const titleDom = document.querySelector('head title') as HTMLTitleElement;
            titleDom.innerHTML = title;
        };
    }, [title]);

    return (
        <Header>
            <Navigation>
                <NavigationList>
                    {
                        menu.map(menuItem => {
                            const active = currentPageGetter() === menuItem.url;
                            return (
                                <MenuItem key={`header-menu-${menuItem.url}`}>
                                    <Link to={menuItem.url} className={active ? 'active' : ''}>{menuItem.label}</Link>
                                </MenuItem>
                            )
                        })
                    }
                    <ThemeControl />
                </NavigationList>
            </Navigation>
        </Header>
    )
};
