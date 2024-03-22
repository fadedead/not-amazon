import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function FilterCard({ filterKeys, data, setDisplayedData }) {
  const [filters, setFilters] = useState({});

  const handleFilter = (filterType, condition) => {
    if (filters[filterType]?.toString() === condition?.toString()) {
      const newFilters = { ...filters };
      delete newFilters[filterType];
      setFilters(newFilters);
    } else {
      setFilters({ ...filters, [filterType]: condition });
    }
  };

  // TODO: Add a no result found page thing
  useEffect(() => {
    const filtered = data.filter((item) => {
      return Object.entries(filters).every(
        ([filterType, condition]) =>
          condition[0] <= item[filterType] && item[filterType] <= condition[1],
      );
    });
    setDisplayedData(filtered);
  }, [filters, data, setDisplayedData]);

  return (
    <div>
      {Object.entries(filterKeys).map(([filterType, filterConditions]) => (
        <div className="mt-2" key={filterType}>
          <div className="text-lg font-bold capitalize">{filterType}</div>
          <div>
            {Object.entries(filterConditions).map(([filterName, condition]) => (
              <div
                className={
                  filters[filterType]?.toString() === condition?.toString()
                    ? "font-bold"
                    : ""
                }
                key={filterName}
                onClick={() => {
                  handleFilter(filterType, condition);
                }}
              >
                {filterName}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

FilterCard.propTypes = {
  filterKeys: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object),
  setDisplayedData: PropTypes.func,
};

export { FilterCard };
