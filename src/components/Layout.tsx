import React from "react";
import styled from "styled-components"
import MainHeader from "./MainHeader"

type layoutProps = {
    children: React.ReactNode,
    title?: string,
}

const Root = styled.div`
    background: ${props => props.theme.pallete.gray[900]};
    color: ${props => props.theme.pallete.gray[200]};
    min-height: 100vh;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-inline: auto;
    width: 100%;
`;

export default function Layout({
    children,
    title
}: layoutProps) {

    return (
        <Root>
            <MainHeader title={title} />
            <Main>{children}</Main>
        </Root>
    )
}