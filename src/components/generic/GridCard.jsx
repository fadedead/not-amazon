function GridCard({ title, colCount, data }) {
  console.log(data);
  return (
    <div className="">
      <p>{title}</p>
      <div className={`grid grid-cols-${colCount} gap-4`}>
        {Object.entries(data).map(([name, url]) => (
          <div className="object-scale-down" key={name}>
            <img src={url} alt={name} />
            <p className="text-ellipsis text-nowrap overflow-hidden">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { GridCard };
