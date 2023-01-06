import styled from "styled-components";

const MenuItem = styled.li`
    cursor: pointer;
    position: relative;
    padding: 1rem 0;
    & a {
        color: ${props => props.theme.pallete.gray[300]};
        text-decoration: none;
        &.active,
        &:hover {
            color: ${props => props.theme.pallete.gray[100]};
        }
    }
    &:hover ul {
        opacity: 1;
        visibility: visible;
    }
`;

export default MenuItem;