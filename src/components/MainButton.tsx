import styled from "styled-components";

const MainButton = styled.button`
    border: 1px solid;
    border-radius: 5px;
    font-weight: 500;
    max-width: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: .2rem .5rem;
    white-space: nowrap;
    width: 100%;
    &:active {
        transform: translateY(10%);
        transition: .3s transform;
    }
`;

export default MainButton;