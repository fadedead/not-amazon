import PropTypes from "prop-types";

// TODO: Get the stars for rating
function ItemCard({ data }) {
  return (
    <div className="p-4 flex gap-4">
      <img className="size-40" src={data.image} alt="" />
      <div className="flex flex-col">
        <h5 className="text-xl font-medium">{data.title}</h5>
        <span>
          {data.rating} {data.rating_count}
        </span>
        <div>$ {data.price}</div>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  data: PropTypes.object,
};

export { ItemCard };
