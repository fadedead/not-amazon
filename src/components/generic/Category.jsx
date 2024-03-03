import PropTypes from "prop-types";

function Category({ title, items }) {
  return (
    <div className="p-4 bg-white">
      <div className="text-xl font-bold">{title}</div>

      <div>
        {items.map((item) => {
          return (
            <div key={item} className="pt-4 flex justify-between gap-6">
              {item} <span>&#10095;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Category.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};

export { Category };
