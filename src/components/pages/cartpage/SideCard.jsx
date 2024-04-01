import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SideCard({
  itemsCount,
  totalCostOfSelected,
  setGift,
  isGift,
  cartItems,
  selectedToBuy,
}) {
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    const currCheckoutItems = [];
    for (let obj of cartItems) {
      if (selectedToBuy[obj.id]) currCheckoutItems.push(obj);
    }

    setCheckoutItems(currCheckoutItems);
  }, [cartItems, selectedToBuy]);

  return (
    <div className="h-max w-1/5 p-6 flex gap-2 flex-col bg-white">
      <div className="flex gap-2 text-lg">
        <p>Subtotal</p>
        <p>({itemsCount} items):</p>
        <p className="font-semibold">${totalCostOfSelected}</p>
      </div>

      <span className="flex gap-1">
        <input
          type="checkbox"
          checked={isGift}
          onChange={() => setGift(!isGift)}
        />
        <p>This order contains a gift</p>
      </span>

      <Link to="/cart/checkout" state={{ checkoutItems, totalCostOfSelected }}>
        <button className="w-64 h-8 bg-[#FFD814] rounded-lg">
          Proceed to buy
        </button>
      </Link>
    </div>
  );
}

SideCard.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  totalCostOfSelected: PropTypes.number.isRequired,
  isGift: PropTypes.bool.isRequired,
  setGift: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  selectedToBuy: PropTypes.object.isRequired,
};

export { SideCard };
