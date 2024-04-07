import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Category({ title, items, closeSidebar }) {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-white">
      <div className="text-xl font-bold">{title}</div>

      <div>
        {items.map((obj) => {
          return (
            <div
              key={obj.name}
              onClick={() => {
                navigate(obj.link);
                closeSidebar();
              }}
              className="pt-4 flex justify-between gap-6"
            >
              {obj.name} <span>&#10095;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Category.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  closeSidebar: PropTypes.func,
};

export { Category };
