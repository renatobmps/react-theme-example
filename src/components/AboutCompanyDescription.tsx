import styled from "styled-components"

const Paragraph = styled.p`
    color: ${props => props.theme.pallete.gray[100]};
    letter-spacing: 0.05rem;
    line-height: 1.2rem;
`;

export default function AboutCompanyDescription() {
    return (
        <>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo repellendus provident accusamus aliquam nobis quisquam eius aspernatur saepe sequi officiis modi aliquid dolores consequuntur impedit non ratione, obcaecati laudantium minus.</Paragraph>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae nobis culpa quis? Quaerat autem, ipsum mollitia quidem error velit, aut dolor eius esse nesciunt illo quo exercitationem tempora odit.</Paragraph>
        </>
    )
}