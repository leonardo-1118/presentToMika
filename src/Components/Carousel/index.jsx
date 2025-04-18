import { useEffect, useState } from "react";
import mika1 from '../../assets/mika1.jpg';
import mika2 from '../../assets/mika2.jpg';
import mika3 from '../../assets/mika3.jpg';
import mika4 from '../../assets/mika4.jpg';
import mika5 from '../../assets/mika5.jpg';
import mika6 from '../../assets/mika6.jpg';
import mika7 from '../../assets/mika7.jpg';
import mika8 from '../../assets/mika8.jpg';
import mika9 from '../../assets/mika9.jpg';
import mika10 from '../../assets/mika10.jpg';
import mika11 from '../../assets/mika11.jpg';
import mika12 from '../../assets/mika12.jpg';
import mika13 from '../../assets/mika13.jpg';
import mika14 from '../../assets/mika14.jpg';
import mika15 from '../../assets/mika15.jpg';

import { CarouselContainer, CarouselImage } from './styels.js'

const images = [mika1, mika2, mika3, mika4, mika5, mika6, mika7, mika8, mika9, mika10, mika11, mika12, mika13, mika14, mika15];

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
