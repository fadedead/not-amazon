import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Loading } from "../../generic/Loading";

function CartItems({
  cartItems,
  setCartItems,
  selectedToBuy,
  setSelectedToBuy,
  itemQuantity,
  setItemQuantity,
  isGift,
  setGift,
  totalCostOfSelected,
}) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [noItems, setNoItems] = useState(false);

  const localStorageUpdateWithCart = (productId, newQuantity) => {
    setItemQuantity((itemQuantity) => {
      if (newQuantity == 0) {
        deleteItem(productId);
        return;
      }
      itemQuantity = { ...itemQuantity, [productId]: newQuantity };
      localStorage.setItem("cart", JSON.stringify(itemQuantity));
      return itemQuantity;
    });
  };

  const deleteItem = (productId) => {
    setCartItems((cartItems) => {
      const index = cartItems.find((object) => object.id == productId);
      cartItems.splice(index, 1);
      if (cartItems.length == 0) setNoItems(true);
      return cartItems;
    });

    setItemQuantity((itemQuantity) => {
      delete itemQuantity[productId];
      localStorage.setItem("cart", JSON.stringify(itemQuantity));
      return itemQuantity;
    });

    setSelectedToBuy((selectedToBuy) => {
      delete selectedToBuy[productId];
      return selectedToBuy;
    });
  };

  const handleSelectUpdate = (productId) => {
    setSelectedToBuy((prevSelected) => {
      const updatedSelected = { ...prevSelected };

      if (!updatedSelected[productId]) {
        updatedSelected[productId] = itemQuantity[productId];
      } else {
        delete updatedSelected[productId];
      }

      return updatedSelected;
    });
  };

  useEffect(() => {
    if (cartItems.length > 0) setLoading(false);

    const loadtime = setTimeout(() => {
      if (cartItems.length < 1) {
        setLoading(false);
        setNoItems(true);
      }
    }, 2000);

    return () => {
      clearTimeout(loadtime);
    };
  }, [cartItems]);

  if (loading) {
    return (
      <div className="w-4/5 p-6 flex justify-center items-center bg-white">
        <Loading size="size-12" />
      </div>
    );
  }

  if (noItems) {
    return (
      <div className="w-4/5 p-6 bg-white">
        <p>Shopping Cart</p>
        <div className="flex justify-center items-center">
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-4/5 p-6 bg-white">
      <div>
        <p>Shopping Cart</p>
        <p>Deselect all items</p>
      </div>

      <div className="flex flex-col gap-4">
        {cartItems.map((data) => {
          return (
            <div key={data.id}>
              <hr className="h-[2px] bg-gray-300" />
              <br />
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  checked={selectedToBuy[data.id] ? true : false}
                  onChange={() => handleSelectUpdate(data.id)}
                />

                <img
                  onClick={() => navigate(`/product/${data.id}`)}
                  className="size-24 cursor-pointer"
                  src={data.image}
                  alt=""
                />

                <div className="">
                  <p
                    onClick={() => navigate(`/product/${data.id}`)}
                    className="text-xl cursor-pointer"
                  >
                    {data.title}
                  </p>

                  <p className="text-sm font-normal text-green-900">In stock</p>

                  <span className="flex gap-1">
                    <input
                      type="checkbox"
                      checked={isGift && selectedToBuy[data.id]}
                      onChange={() => setGift(!isGift)}
                    />
                    <p>Add gift options</p>
                  </span>

                  <select
                    name="quantity"
                    id="quantity"
                    value={itemQuantity[data.id]}
                    onChange={(event) =>
                      localStorageUpdateWithCart(data.id, event.target.value)
                    }
                  >
                    {Array.from({ length: 6 }, (_, index) => {
                      return (
                        <option key={index} value={index}>
                          {index == 0 ? `(${index}) delete` : `${index}`}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <p className="ml-auto text-xl font-semibold">$ {data.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <hr className="h-[2px] bg-gray-300" />
      <div className="flex gap-1 justify-end">
        <p>Subtotal</p>
        <p>({Object.keys(selectedToBuy).length} items):</p>
        <p>{totalCostOfSelected}</p>
      </div>
    </div>
  );
}

CartItems.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
  setCartItems: PropTypes.func,
  selectedToBuy: PropTypes.object,
  setSelectedToBuy: PropTypes.func,
  itemQuantity: PropTypes.object,
  setItemQuantity: PropTypes.func,
  isGift: PropTypes.bool,
  setGift: PropTypes.func,
  totalCostOfSelected: PropTypes.number,
};

export { CartItems };
