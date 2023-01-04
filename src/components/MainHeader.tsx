import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../Contexts/Theme';

type headerProps = {
    title?: string,
}

const Header = styled.header`
    align-items: center;
    background: ${props => props.theme.pallete.gray[800]};
    display: flex;
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

const MenuItem = styled.li`
    position: relative;
    padding: 1rem 0;
    & a {
        color: ${props => props.theme.pallete.gray[300]};
        text-decoration: none;
        &:hover {
            color: ${props => props.theme.pallete.gray[100]};
        }
    }
    &:hover ul {
        opacity: 1;
        visibility: visible;
    }
`;

const ThemeMenu = styled.ul`
    opacity: 0;
    position: absolute;
    top: 100%;
    transition: all .3s;
    right: 0;
    visibility: hidden;
    z-index: 2;
    & button {
        background: ${props => props.theme.pallete.gray[800]};
        border: none;
        color: ${props => props.theme.pallete.gray[200]};
        overflow: hidden;
        padding: .5rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 8rem;
        &:hover {
            background: ${props => props.theme.pallete.gray[700]};
            color: ${props => props.theme.pallete.gray[100]};
        }
    }
`;

export default function MainHeader({ title }: headerProps) {
    const context = useContext(Theme);
    const theme = context?.value;
    const handleTheme = context?.handler;

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
                    <MenuItem>
                        <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/about">About</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/contact">Contact</Link>
                    </MenuItem>
                    <MenuItem>
                        Theme ({theme})
                        <ThemeMenu>
                            <li><button onClick={() => {
                                handleTheme ? handleTheme('light') : alert('Charging...')
                            }}>Light</button></li>
                            <li><button onClick={() => {
                                handleTheme ? handleTheme('dark') : alert('Charging...')
                            }}>Dark</button></li>
                            <li><button onClick={() => {
                                handleTheme ? handleTheme(null) : alert('Charging...')
                            }}>Automatic</button></li>
                        </ThemeMenu>
                    </MenuItem>
                </NavigationList>
            </Navigation>
        </Header>
    )
};
