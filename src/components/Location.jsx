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
        <div className="absolute top-1/2 left-1/2 flex justify-center items-center">
          <dialog open className="size-96">
            <button
              className="w-16 h-10 bg-[#F7CA00] p-1 rounded-lg"
              onClick={() => {
                setDialogState(false);
              }}
            >
              Done
            </button>
          </dialog>
        </div>
      )}
    </div>
  );
}

export { Location };
