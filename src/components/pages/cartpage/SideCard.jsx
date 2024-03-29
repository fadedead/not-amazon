import PropTypes from "prop-types";

function SideCard({ itemsCount, totalCostOfSelected, setGift, isGift }) {
  return (
    <div className="h-max w-1/5 p-6 flex gap-2 flex-col bg-white">
      <div className="flex gap-2 text-xl">
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

      <button className="w-64 h-8 bg-[#FFD814] rounded-lg">
        Proceed to buy
      </button>
    </div>
  );
}

SideCard.propTypes = {
  itemsCount: PropTypes.number,
  totalCostOfSelected: PropTypes.number,
  isGift: PropTypes.bool,
  setGift: PropTypes.func,
};

export { SideCard };
