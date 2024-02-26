import { useState } from "react";

function Language() {
  let [showMenu, setMenuState] = useState(false);

  return (
    <div
      className="relative text-white hover:border-white border-transparent border box-content p-2 pt-4 text-xs"
      onMouseEnter={() => {
        setMenuState(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => setMenuState(false), 500);
      }}
    >
      <b>EN &#x25BC;</b>
      {showMenu && (
        <div
          className="w-40 absolute top-10 p-4 flex flex-col items-center gap-3 border-2 text-black bg-white rounded-lg"
          onMouseEnter={() => clearTimeout()}
          onMouseLeave={() => {
            setTimeout(() => setMenuState(false), 500);
          }}
          onClick={() => {
            setMenuState(false);
          }}
        >
          <p>Choose language</p>
          <label className="hover:underline flex gap-2">
            <input type="radio" name="language" value="EN1" />
            English - EN - 1
          </label>
          <label className="hover:underline flex gap-2">
            <input type="radio" name="language" value="EN2" />
            English - EN - 2
          </label>
          <label className="hover:underline flex gap-2">
            <input type="radio" name="language" value="EN3" />
            English - EN - 3
          </label>
        </div>
      )}
    </div>
  );
}

export { Language };
