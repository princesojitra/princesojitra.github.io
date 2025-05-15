import React, { useState } from 'react';
import '../styles/ImageCarousel.css';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={goToPrevious} aria-label="Previous image">
        ‹
      </button>
      
      <div className="carousel-image-container">
        <img 
          src={images[currentIndex]} 
          alt={`Screenshot ${currentIndex + 1}`} 
          className="carousel-image"
        />
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button 
              key={index} 
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <button className="carousel-button next" onClick={goToNext} aria-label="Next image">
        ›
      </button>
    </div>
  );
};

export default ImageCarousel;