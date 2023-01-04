import styled from 'styled-components';

type props = {
    children: string
}

const Title = styled.h1`
    border-left: 3px solid ${props => props.theme.pallete.blue[700]};
    font-size: 2rem;
    margin-top: 1em;
    margin-inline: auto;
    max-width: ${props => props.theme.maxWidth};
    padding: 0;
    padding-left: calc(1rem - 3px);
    width: 100%;
`

export default function MainTitle({ children }: props) {
    return (
        <Title>{children}</Title>
    )
}