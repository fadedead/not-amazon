import PropTypes from "prop-types";

function ItemCard({ data }) {
  return (
    <div className="flex flex-col">
      <div>{data.title}</div>
      <span>
        {data.rating} {data.rating_count}
      </span>
      <div>{data.price}</div>
    </div>
  );
}

ItemCard.propTypes = {
  data: PropTypes.object,
};

export { ItemCard };
