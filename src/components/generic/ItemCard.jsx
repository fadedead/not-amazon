import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function ItemCard({ data }) {
  const navigate = useNavigate();
  let patternPos = "";

  if (data.rating <= 0) {
    patternPos = "bg-[-2px_-183px]";
  } else if (0 < data.rating && data.rating <= 1) {
    patternPos = "bg-[-2px_-142px]";
  } else if (1 < data.rating && data.rating <= 1.5) {
    patternPos = "bg-[-2px_-163px]";
  } else if (1.5 < data.rating && data.rating <= 2) {
    patternPos = "bg-[-2px_-102px]";
  } else if (2 < data.rating && data.rating <= 2.5) {
    patternPos = "bg-[-2px_-123px]";
  } else if (2.5 < data.rating && data.rating <= 3) {
    patternPos = "bg-[-2px_-63px]";
  } else if (3 < data.rating && data.rating <= 3.5) {
    patternPos = "bg-[-2px_-83px]";
  } else if (3.5 < data.rating && data.rating <= 4) {
    patternPos = "bg-[-2px_-23px]";
  } else if (4 < data.rating && data.rating <= 4.5) {
    patternPos = "bg-[-2px_-42px]";
  } else if (4.5 < data.rating && data.rating <= 5) {
    patternPos = "bg-[-2px_-3px]";
  }

  return (
    <div
      className="p-4 flex gap-4"
      onClick={() => navigate(`/product/${data.id}`)}
    >
      <img className="size-40" src={data.image} alt="" />
      <div className="flex flex-col">
        <h5 className="text-xl font-medium">{data.title}</h5>
        <span className="flex gap-2 items-center">
          <div className={`w-20 h-4 bg-star-pattern ${patternPos}`}></div>
          <p className="text-sm text-blue-800">{data.rating_count}</p>
        </span>
        <div className="text-2xl font-normal">$ {data.price}</div>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  data: PropTypes.object,
};

export { ItemCard };
