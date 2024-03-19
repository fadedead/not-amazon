import PropTypes from "prop-types";

function ItemCard({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col">
      <div>{data.title}</div>
      <span>
        {data.rating.rate} {data.rating.count}
      </span>
      <div>{data.price}</div>
    </div>
  );
}

ItemCard.propTypes = {
  data: PropTypes.object,
};

export { ItemCard };
