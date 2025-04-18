// src/Components/Carousel/styles.js
import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 230px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;
`;

export const CarouselImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;
