import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

function ItemCarousel({ items }) {
  const navigate = useNavigate();
  const [startIdx, setStartIdx] = useState(0);

  const prev = () => {
    setStartIdx((startIdx) => (startIdx > 0 ? startIdx - 1 : startIdx));
  };

  const next = () => {
    setStartIdx((startIdx) =>
      startIdx + 10 <= items.length - 1 ? startIdx + 1 : startIdx,
    );
  };

  if (items.length < 1) {
    return (
      <div className="h-56 bg-white flex justify-center items-center">
        <Loading size={"size-12"} />
      </div>
    );
  }

  return (
    <div className="flex justify-evenly bg-white">
      <button
        onClick={prev}
        className="relative h-56 w-12 border border-transparent hover:border-black"
      >
        <p className="scale-x-50">&#10094;</p>
      </button>

      <div className="p-8 w-auto flex gap-6 overflow-hidden">
        {items.slice(startIdx, startIdx + 10).map((item, index) => (
          <img
            className="size-32"
            onClick={() => navigate(`/product/${item.id}`)}
            key={index}
            src={item.image}
            alt=""
          />
        ))}
      </div>

      <button
        onClick={next}
        className="relative h-56 w-12 border border-transparent hover:border-black"
      >
        <p className="scale-x-50">&#10095;</p>
      </button>
    </div>
  );
}
ItemCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { ItemCarousel };
