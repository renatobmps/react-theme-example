import styled from "styled-components";
import convertToBrl from "../adapters/convertToBrl";
import { product } from "../adapters/productListGetter";

type props = {
    list: product[];
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 2rem 1rem;
    justify-content: center;
    &:hover > * {
        backdrop-filter: blur(10px);
        opacity: .7;
    }
`;

const Card = styled.a`
    background: linear-gradient(
        ${props => props.theme.pallete.gray[800]},
        transparent
    );
    color: ${props => props.theme.pallete.gray[200]};
    border-radius: .5rem;
    box-shadow: 1px 1px 13px -4px grey;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    overflow: hidden;
    padding: .8rem;
    transition: .6s;
    text-decoration: none;
    width: 100%;
    &:hover {
        backdrop-filter: none;
        box-shadow: 1px 1px 13px -4px #000;
        opacity: 1;
    }
`;

const CoverDimmer = styled.header`
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    display: flex;
    height: 10rem;
    justify-content: center;
    overflow: hidden;
    padding: 0.5rem;
    width: 100%;
`;

const Cover = styled.img`
    max-height: 100%;
    max-width: 100%;
`;

const Label = styled.main`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Details = styled.footer`
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
`;

const Rate = styled.small`
    font-size: 0.7rem;
`;

const Price = styled.span`
    color: ${props => props.theme.pallete.blue[700]};
    font-size: 1.2rem;
    font-weight: 900;
`;

export default function ProductList({ list }: props) {

    return (
        <Grid>
            {list.map(product => (
                <Card key={product.id} href={`products/${product.id}`} title={product.title}>
                    <CoverDimmer>
                        <Cover src={product.image} alt={`${product.title} cover`} />
                    </CoverDimmer>
                    <Label>{product.title}</Label>
                    <Details>
                        <Rate>
                            {product.rating.rate}({product.rating.count})
                        </Rate>
                        <Price>
                            {convertToBrl(product.price)}
                        </Price>
                    </Details>
                </Card>
            ))}
        </Grid>
    )
}