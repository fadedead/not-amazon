import PropTypes from "prop-types";

function FilterCard({ filterKeys, data, setDisplayedData }) {
  const onFilter = (e, filterType, condition) => {
    const filtered = data.filter((object) => {
      return (
        condition[0] <= object[filterType] && object[filterType] <= condition[1]
      );
    });
    setDisplayedData(filtered);
  };

  return (
    <div>
      {Object.entries(filterKeys).map(([filterType, filterConditions]) => (
        <div key={filterType}>
          <div>{filterType}</div>
          <div>
            {Object.entries(filterConditions).map(([filterName, condition]) => (
              <div
                key={filterName}
                onClick={(e) => onFilter(e, filterType, condition)}
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
