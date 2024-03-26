import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

function GridCard({ title, colCount, data, expansionText, categoryName }) {
  const navigate = useNavigate();

  const gridSizes = {
    1: `grid-cols-1`,
    2: `grid-cols-2`,
    3: `grid-cols-3`,
    4: `grid-cols-4`,
    5: `grid-cols-5`,
    6: `grid-cols-6`,
  };

  const imageToGridRatio = {
    1: "size-48",
    2: "size-24",
  };

  if (Object.keys(data).length < 1) {
    return (
      <div className="size-[22rem] bg-white flex justify-center items-center">
        <Loading size="size-12" />
      </div>
    );
  }

  return (
    <div
      className="size-[22rem] bg-white flex flex-col gap-2 justify-evenly"
      onClick={() => navigate(`/category/${categoryName}`)}
    >
      <p className="p-1 text-xl font-bold">{title}</p>
      <div
        className={`p-2 grid ${gridSizes[colCount]} size-80 gap-4 self-center justify-items-center items-center`}
      >
        {Object.entries(data).map(([name, url]) => (
          <div className={`${imageToGridRatio[colCount]}`} key={name}>
            <img className="size-full" src={url} alt={name} />
            <p className="text-ellipsis text-nowrap overflow-hidden">{name}</p>
          </div>
        ))}
      </div>
      <p className="p-2 text-blue-600">{expansionText}</p>
    </div>
  );
}

GridCard.propTypes = {
  title: PropTypes.string,
  colCount: PropTypes.number,
  data: PropTypes.object,
  expansionText: PropTypes.string,
  categoryName: PropTypes.string,
};

export { GridCard };
