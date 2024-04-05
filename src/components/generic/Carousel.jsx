import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 7000);
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 7000);
  };

  const autoNext = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide || isPaused) return;
    const slideInterval = setInterval(autoNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, isPaused]);

  return (
    <div className="overflow-hidden relative">
      <div>
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#E3E6E6] to-transparent"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="absolute top-0 left-0 h-56 w-12 border border-transparent hover:border-black"
        >
          <p className="scale-x-50">&#10094;</p>
        </button>
        <button
          onClick={next}
          className="absolute top-0 right-0 h-56 w-12 border border-transparent hover:border-black"
        >
          <p className="scale-x-50">&#10095;</p>
        </button>
      </div>
    </div>
  );
}
Carousel.propTypes = {
  children: PropTypes.array.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};

export { Carousel };
