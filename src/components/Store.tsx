import styled from "styled-components";
import CategoriesHandle from "./ProductsCategoryHandle";
import ProductsHandle from "./ProductsHandle";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-inline: auto;
    max-width: ${props => props.theme.maxWidth};
    padding: 0 1rem;
    width: 100%;
`;

export default function Store() {
    return (
        <Wrapper>
            <CategoriesHandle />
            <ProductsHandle />
        </Wrapper>
    );
};
