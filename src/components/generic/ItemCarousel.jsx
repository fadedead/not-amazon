import PropTypes from "prop-types";

function ItemCarousel({ items }) {
  return <div>{items}</div>;
}

ItemCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { ItemCarousel };
