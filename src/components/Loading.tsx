import styled, { keyframes } from 'styled-components';

type props = {
  children?: React.ReactNode;
  height?: string;
}

const Dimmer = styled.div`
  background: #0000000d;
  backdrop-filter: blur(10px);
  display: grid;
  font-size: 1.5rem;
  height: ${({ height }: { height?: string }) => `calc(${height} - 0.5rem)` ?? 'auto'};
  padding: 1rem;
  place-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
    animation: ${spin} 1s linear infinite;
    display: block;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.pallete.blue[300]};
    border-right: 3px dotted ${props => props.theme.pallete.blue[700]};
    border-top-style: dotted;
    height: 2em;
    width: 2em;
`;

export default function Loading({ children, height }: props) {
  return (
    <Dimmer height={height}>{children || <Circle />}</Dimmer>
  )
}