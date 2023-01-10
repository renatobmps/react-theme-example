import styled from "styled-components";
import transformToUrl from "../adapters/transformToUrl";

type props = {
    list: string[];
}

const Carousel = styled.div`
    display: flex;
    gap: 1rem;
    overflow: auto;
    padding: .8rem 1px;
`;

const Card = styled.a`
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 2px 0px gray;
    color: ${props => props.theme.pallete.blue[700]};
    font-weight: 800;
    max-width: 10rem;
    min-width: 8rem;
    overflow: hidden;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`;

export default function ProductCategoryList({ list }: props): JSX.Element {
    return (
        <Carousel>
            {
                list.map((category) => (
                    <Card
                        key={`product-category-${category}`}
                        href={`/category/${transformToUrl(category)}`}
                        title={category}
                    >
                        #{category}
                    </Card>
                ))
            }
        </Carousel>
    )
}