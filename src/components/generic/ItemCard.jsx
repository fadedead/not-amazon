import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { StarRating } from "./StarRating";

function ItemCard({ data }) {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 flex gap-4"
      onClick={() => navigate(`/product/${data.id}`)}
    >
      <img className="size-40" src={data.image} alt="" />
      <div className="flex flex-col">
        <h5 className="text-xl font-medium">{data.title}</h5>
        <StarRating rating={data.rating} ratingCount={data.rating_count} />
        <div className="text-2xl font-normal">$ {data.price}</div>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  data: PropTypes.object,
};

export { ItemCard };
