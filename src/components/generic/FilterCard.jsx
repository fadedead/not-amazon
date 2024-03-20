import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function FilterCard({ filterKeys, data, setDisplayedData }) {
  const [filters, setFilters] = useState({});

  const handleFilter = (e, filterType, condition) => {
    if (filters[filterType]?.toString() === condition?.toString()) {
      const newFilters = { ...filters };
      delete newFilters[filterType];
      setFilters(newFilters);
    } else {
      setFilters({ ...filters, [filterType]: condition });
    }
  };

  useEffect(() => {
    const filtered = data.filter((item) => {
      return Object.entries(filters).every(
        ([filterType, condition]) =>
          condition[0] <= item[filterType] && item[filterType] <= condition[1],
      );
    });
    setDisplayedData(filtered);
  }, [filters]);

  // TODO: Add styles
  // TODO: Get the value from object and make it bold
  return (
    <div>
      {Object.entries(filterKeys).map(([filterType, filterConditions]) => (
        <div key={filterType}>
          <div>{filterType}</div>
          <div>
            {Object.entries(filterConditions).map(([filterName, condition]) => (
              <div
                key={filterName}
                onClick={(e) => {
                  handleFilter(e, filterType, condition);
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
