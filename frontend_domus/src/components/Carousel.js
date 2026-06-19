
import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    overflow: hidden;
`;

const Slide = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    transition: all 1s ease-in-out;
`;

const Dots = styled.div`
    text-align: center;
    margin-top: 10px;
`;

const Dot = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})`
  height: 10px;
  width: 10px;
  margin: 0 1rem;
  background-color: ${props => props.active ? '#333' : '#bbb'};
  border-radius: 50%;
  display: inline-block;
  cursor : pointer;
`;


const Carousel = ({images}) => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const total = images.length;

    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setCurrent((prev) => (prev + 1) % total);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [paused, total]);

    return (
        <div ref = {carouselRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <Container>
                <Slide src={images[current]} alt={`Imagem ${current + 1}`} />
            </Container>
            <Dots>
                {images.map((_, index) => (
                    <Dot key={index} active={index === current} onClick={() => setCurrent(index)} />
                ))}
            </Dots>
        </div>
    );
};

export default Carousel;
