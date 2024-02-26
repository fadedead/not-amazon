import { useState } from "react";
import LocationImg from "../assets/location.svg";

function Location() {
  let [dialogFlag, setDialogState] = useState(false);

  return (
    <div>
      <div
        className="flex gap-1 text-white hover:border-white hover:border box-content p-2 text-xs"
        onClick={() => {
          setDialogState(true);
        }}
      >
        <img src={LocationImg} alt="" className="size-6 p-1" />
        <div>
          <p>Deliver to</p>
          <b>India</b>
        </div>
      </div>

      {dialogFlag && (
        <div
          className="h-full w-full absolute top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={() => {
            setDialogState(false);
          }}
        >
          <dialog
            open
            className="h-[30rem] w-[30rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg scale-75"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1 className="font-semibold text-xl bg-[#F0F2F2] p-5 rounded-t-lg">
              Choose your location
            </h1>
            <div className="p-5 flex flex-col gap-4">
              <p className="text-gray-600">
                Delivery options and delivery speeds may vary for different
                locations
              </p>

              <button className="w-full h-10 bg-[#F7CA00] p-1 rounded-lg">
                Sign in to see your addresses
              </button>

              <span className="flex items-center justify-evenly">
                <hr className="w-36 h-0.5" color="black" />
                <p className="text-gray-600"> or enter a zip code</p>
                <hr className="w-36 h-0.5" color="black" />
              </span>

              <span className="flex justify-between items-center">
                <input
                  type="text"
                  className="w-2/3 h-10 p-2 m-2 border-2 border-black rounded-lg"
                />
                <button className="w-28 h-10 p-1 border-gray-300 border-2 rounded-lg">
                  Apply
                </button>
              </span>

              <span className="flex items-center justify-center">
                <hr className="w-1/2 h-0.5" color="black" />
                <p className="p-1 text-gray-600"> or </p>
                <hr className="w-1/2 h-0.5" color="black" />
              </span>

              <span>
                <select
                  name="location"
                  id="loc"
                  className="w-full p-2 rounded-lg"
                >
                  <option value="earth">Earth</option>
                  <option value="mars">Mars</option>
                  <option value="moon">Moon</option>
                  <option value="uranus">Uranus</option>
                </select>
              </span>

              <button
                className="w-16 h-10 bg-[#F7CA00] p-1 rounded-lg self-end"
                onClick={() => {
                  setDialogState(false);
                }}
              >
                Done
              </button>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}

export { Location };
