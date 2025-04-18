import { useEffect, useState } from "react";
import mika1 from '../../assets/mika1.jpg';
import mika2 from '../../assets/mika2.jpg';
import mika3 from '../../assets/mika3.jpg';
import mika4 from '../../assets/mika4.jpg';
import mika5 from '../../assets/mika5.jpg';
import { CarouselContainer, CarouselImage } from './styels.js'

const images = [mika1, mika2, mika3, mika4, mika5];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CarouselContainer>
      {images.map((img, index) => (
        <CarouselImage
          key={index}
          src={img}
          alt={`Slide ${index}`}
          active={index === current}
        />
      ))}
    </CarouselContainer>
  );
}

export default Carousel;
