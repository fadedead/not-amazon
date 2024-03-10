function GridCard({ title, colCount, data }) {
  const gridSizes = {
    1: `grid-cols-1`,
    2: `grid-cols-2`,
    3: `grid-cols-3`,
    4: `grid-cols-4`,
    5: `grid-cols-5`,
    6: `grid-cols-6`,
  };
  return (
    <div className="p-4 bg-white">
      <p className="text-xl p-1">{title}</p>
      <div
        className={`grid ${gridSizes[colCount]} justify-items-center items-center`}
      >
        {Object.entries(data).map(([name, url]) => (
          <div className="object-scale-down w-24" key={name}>
            <img src={url} alt={name} />
            <p className="text-ellipsis text-nowrap overflow-hidden">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { GridCard };
