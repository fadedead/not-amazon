import { useState } from "react";
import CartImg from "../../assets/cart.svg";

function Cart() {
  let [cartCount, setCartCount] = useState(0);

  return (
    <div className="flex text-white hover:border-white border-transparent border box-content p-2 text-xs">
      <img src={CartImg} alt="Cart" className="size-9" />
      <p className="text-xl relative right-5 bottom-1 p-0 text-[#FF9900] font-semibold">
        {cartCount}
      </p>
      <b className="self-end">Cart</b>
    </div>
  );
}

export { Cart };
