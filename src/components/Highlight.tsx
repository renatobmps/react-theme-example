import { Link } from "react-router-dom";
import styled from "styled-components";
import AboutCompanyDescription from "./AboutCompanyDescription";
import MainButton from "./MainButton";
import Slideshow from "./SlideshowHandle";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-inline: auto;
    max-width: ${props => props.theme.maxWidth};
`;

const Button = styled(MainButton)`
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
                <Link to="/contact">
                    <Button>
                        Contact me
                    </Button>
                </Link>
                <br />
            </Wrapper>
        </>
    )
}