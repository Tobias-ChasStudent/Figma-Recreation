import "./ProductImages.css"
import Lightbox from "./Lightbox.jsx"
import { useState, useRef, useEffect } from "react";

const delay = 2500;
const imgSources = ["Shoe1.svg", "Shoe2.svg", "Shoe3.svg", "Shoe4.svg"]

export default function ProductImages({ isOpen, onOpen, onClose }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }


  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgSources.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="productImages">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imgSources.map((index) => (
            <div
              className="slide"
              key={index}

            >
              <img src={index} alt="" onClick={onOpen} />
            </div>
          ))}
        </div>
        <div className="slideshowDots">
          {imgSources.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      <Lightbox 
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}/>
    </div>
  );
}