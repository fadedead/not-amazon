import { useEffect, useState } from "react";
import SearchImg from "../assets/search-icon.svg";

function SearchBar() {
  const [category, setCategory] = useState(["All"]);
  const [catWidth, setCatWidth] = useState(
    `calc(${(category[0].length || 8) / 2}rem + 16px)`,
  );

  const [brClr, setClr] = useState("border-0");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((availableCategories) =>
        setCategory((arr) => arr.concat(availableCategories)),
      );
  }, []);

  const handleSelectChange = (event) => {
    setCatWidth(`calc(${event.target.value.length / 2}rem + 16px)`);
  };

  return (
    <div className={`w-1/2 flex items-center ${brClr}`}>
      <div
        className={`h-8 bg-[#D4D4D4] p-1 flex justify-center items-center rounded-l-sm text-xs active:border-[#FF9900] active:border-2`}
      >
        <select
          name="category"
          id="category"
          className="bg-[#D4D4D4] outline-0 "
          style={{ width: `${catWidth}` }}
          onChange={handleSelectChange}
        >
          {Array.from(new Set(category)).map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        className="w-full h-8 m-0 focus:outline-0 p-1"
        onFocus={() => {
          setClr("border-[#FF9900] border-2 rounded-sm");
        }}
        onBlur={() => {
          setClr("border-0");
        }}
      />

      <div className="size-8 bg-[#FF9900] rounded-r-sm">
        <img src={SearchImg} alt="" className="size-8 p-1" />
      </div>
    </div>
  );
}

export { SearchBar };
