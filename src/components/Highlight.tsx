import { Link } from "react-router-dom";
import styled, { DefaultTheme, StyledComponent } from "styled-components";
import AboutCompanyDescription from "./AboutCompanyDescription";
import MainButton from "./MainButton";
import Slideshow from "./SlideshowHandle";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-inline: auto;
    max-width: ${props => props.theme.maxWidth};
    padding: 1rem;
`;

const Button: StyledComponent<"button", DefaultTheme, {}, never> = styled(MainButton)`
    background: ${props => props.theme.pallete.blue[100]};
    color: #fff;
    font-size: 1.2rem;
    max-width: 9rem;
`;

export default function Highlight() {
    return (
        <>
            <Slideshow highLightText="Something important" />
            <Wrapper>
                <AboutCompanyDescription />
                <Link to="/contact" style={{ width: 'fit-content' }}>
                    <Button>
                        Contact me
                    </Button>
                </Link>
                <br />
            </Wrapper>
        </>
    )
}