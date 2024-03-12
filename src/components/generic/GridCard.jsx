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
    <div className="size-[22rem] bg-white flex flex-col gap-2 justify-evenly">
      <p className="text-xl p-1">{title}</p>
      <div
        className={`grid ${gridSizes[colCount]} size-80 gap-6 self-center justify-items-center items-center`}
      >
        {Object.entries(data).map(([name, url]) => (
          <div className="size-24" key={name}>
            <img className="size-full" src={url} alt={name} />
            <p className="text-ellipsis text-nowrap overflow-hidden">{name}</p>
          </div>
        ))}
      </div>
      <p className="p-2 text-blue-600">see more</p>
    </div>
  );
}

export { GridCard };
