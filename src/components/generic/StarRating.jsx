import PropTypes from "prop-types";

function StarRating({ rating, ratingCount }) {
  let patternPos = "";

  if (rating <= 0) {
    patternPos = "bg-[-2px_-183px]";
  } else if (0 < rating && rating <= 1) {
    patternPos = "bg-[-2px_-142px]";
  } else if (1 < rating && rating <= 1.5) {
    patternPos = "bg-[-2px_-163px]";
  } else if (1.5 < rating && rating <= 2) {
    patternPos = "bg-[-2px_-102px]";
  } else if (2 < rating && rating <= 2.5) {
    patternPos = "bg-[-2px_-123px]";
  } else if (2.5 < rating && rating <= 3) {
    patternPos = "bg-[-2px_-63px]";
  } else if (3 < rating && rating <= 3.5) {
    patternPos = "bg-[-2px_-83px]";
  } else if (3.5 < rating && rating <= 4) {
    patternPos = "bg-[-2px_-23px]";
  } else if (4 < rating && rating <= 4.5) {
    patternPos = "bg-[-2px_-42px]";
  } else if (4.5 < rating && rating <= 5) {
    patternPos = "bg-[-2px_-3px]";
  }

  return (
    <div className="flex gap-2 items-center">
      <div className={`w-20 h-4 bg-star-pattern ${patternPos}`}></div>
      <p className="text-sm text-blue-800">{ratingCount}</p>
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
};

export { StarRating };
