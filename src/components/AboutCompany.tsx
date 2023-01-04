import styled from "styled-components";
import AboutCompanyDescription from "./AboutCompanyDescription";
import AboutCompanyGallery from "./AboutCompanyGallery";

const Wrapper = styled.div`
    display: inherit;
    flex-direction: inherit;
    gap: inherit;
    margin-inline: inherit;
    max-width: ${props => props.theme.maxWidth};
    padding: 0 1rem;
    width: inherit;
`;

export default function AboutCompany() {
    return (
        <Wrapper>
            <AboutCompanyDescription />
            <AboutCompanyGallery />
            <br />
        </Wrapper>
    )
}