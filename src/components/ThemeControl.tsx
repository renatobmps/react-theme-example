import { useContext } from "react";
import styled from "styled-components";
import { Theme } from "../Contexts/Theme";
import MenuItem from "./MainHeaderMenuItem";

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

export default function ThemeControl() {
    const context = useContext(Theme);
    const theme = context?.value;
    const handleTheme = context?.handler;

    return (
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
    )
}