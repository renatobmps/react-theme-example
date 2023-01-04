import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components';

type props = {
    urlList: string[];
    highLightText?: string;
}

const SlideShow = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
    & * {
        height: 100%;
        width: 100%;
    }
    & img {
        object-fit: cover;
    }
`;

const Text = styled.p`
    background: #00000090;
    backdrop-filter: blur(10px);
    bottom: 0;
    color: #fff;
    font-size: 2rem;
    height: auto;
    letter-spacing: .195rem;
    line-height: 2.8rem;
    padding: 1.5rem 1rem;
    position: absolute;
    z-index: 1;
    width: 100%;
`;

export default function Slideshow({ urlList, highLightText }: props) {

    return (
        <SlideShow className="slide-container">
            <Zoom scale={1}>
                {
                    urlList.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt=""
                        />
                    ))
                }
            </Zoom>
            {
                highLightText ? <Text>{highLightText}</Text> : ''
            }
        </SlideShow>
    )
}