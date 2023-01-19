import React from "react";
import './slider.css';

  const delay = 3000;
  const pattern = 'images/car/';
  const images = [
    'bugatti-chiron-alice.jpeg',
    'bugatti-chiron-beige.jpg',
    'bugatti-chiron-violet.jpeg',
    'bugatti-chiron-fullwhite.jpeg',
    'bugatti-chiron-white_and_black.jpeg'
  ];

function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout(); 
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((src, index) => (
          <img className="slide" key={index} src={pattern+src} alt=''/>
        ))}
      </div>
    </div>
  );
}

export default Slider;