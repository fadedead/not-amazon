import { useState } from "react";
import SearchImg from "../assets/search-icon.svg";

function SearchBar() {
  const [category, setCategory] = useState("All");

  const [brClr, setClr] = useState("border-0");

  return (
    <div className={`w-1/2 flex items-center ${brClr}`}>
      <div className="size-8 w-10 bg-[#D4D4D4] p-2 flex rounded-l-sm text-xs">
        <p>{category} </p>
        <p>&#x25BC;</p>
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
