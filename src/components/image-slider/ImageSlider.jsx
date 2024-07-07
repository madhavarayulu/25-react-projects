import { useEffect, useState } from 'react';
import './image-slider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

function ImageSlider({ baseUrl, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}?page=${page}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [baseUrl, limit, page]);

  function handleSlideChange(direction) {
    if (direction === 'left') {
      setCurrentSlide(
        currentSlide === 0 ? images.length - 1 : currentSlide - 1
      );
    } else if (direction === 'right') {
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }
  }

  return (
    <div className="image-slider">
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">Loading...</div>}
      {!error && !loading && (
        <>
          <FaArrowLeft
            onClick={() => handleSlideChange('left')}
            className="arrow arrow-left"
          />
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={`Image ${index + 1}`}
              className={
                currentSlide === index
                  ? 'current-image'
                  : 'current-image hide-current-image'
              }
            />
          ))}
          <FaArrowRight
            onClick={() => handleSlideChange('right')}
            className="arrow arrow-right"
          />
          <span className="circle-indicators">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
              ></button>
            ))}
          </span>
        </>
      )}
    </div>
  );
}

export default ImageSlider;
