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
      if (newQuantity === 0) {
        deleteItem(productId);
        delete itemQuantity[productId];
        localStorage.setItem("cart", JSON.stringify(itemQuantity));
        return { ...itemQuantity };
      }
      itemQuantity = { ...itemQuantity, [productId]: newQuantity };
      localStorage.setItem("cart", JSON.stringify(itemQuantity));
      return { ...itemQuantity };
    });
  };

  const deleteItem = (productId) => {
    setCartItems((cartItems) => {
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId,
      );
      if (updatedCartItems.length === 0) setNoItems(true);
      return updatedCartItems;
    });

    setSelectedToBuy((selectedToBuy) => {
      const updatedSelected = { ...selectedToBuy };
      delete updatedSelected[productId];
      return updatedSelected;
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

  const handleSelectAll = (bool) => {
    setSelectedToBuy(() => {
      const updatedSelected = {};
      if (bool) {
        for (let product of cartItems) {
          updatedSelected[product.id] = true;
        }
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
        <p className="text-3xl">Shopping Cart</p>
        {cartItems.length === Object.keys(selectedToBuy).length ? (
          <p className="text-blue-900" onClick={() => handleSelectAll(false)}>
            Deselect all items
          </p>
        ) : (
          <p className="text-blue-900" onClick={() => handleSelectAll(true)}>
            Select all items
          </p>
        )}
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

                <div className="flex flex-col gap-1">
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

                  <div className="flex gap-2">
                    <select
                      name="quantity"
                      id="quantity"
                      value={itemQuantity[data.id]}
                      onChange={(event) =>
                        localStorageUpdateWithCart(data.id, event.target.value)
                      }
                      className="w-8"
                    >
                      {Array.from({ length: 6 }, (_, index) => (
                        <option key={index} value={index}>
                          {index === 0 ? `(${index}) delete` : `${index}`}
                        </option>
                      ))}
                    </select>
                    <p
                      onClick={() => localStorageUpdateWithCart(data.id, 0)}
                      className="text-blue-900 cursor-pointer"
                    >
                      delete
                    </p>
                  </div>
                </div>

                <p className="w-24 ml-auto text-xl font-semibold">
                  $ {data.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <hr className="h-[2px] bg-gray-300" />
      <div className="flex gap-1 justify-end">
        <p>Subtotal</p>
        <p>
          (
          {Object.keys(selectedToBuy).reduce(
            (acc, val) => acc + parseInt(itemQuantity[val]),
            0,
          )}{" "}
          items):
        </p>
        <p>{totalCostOfSelected}</p>
      </div>
    </div>
  );
}

// PropTypes for type checking
CartItems.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
  selectedToBuy: PropTypes.object.isRequired,
  setSelectedToBuy: PropTypes.func.isRequired,
  itemQuantity: PropTypes.object.isRequired,
  setItemQuantity: PropTypes.func.isRequired,
  isGift: PropTypes.bool.isRequired,
  setGift: PropTypes.func.isRequired,
  totalCostOfSelected: PropTypes.number.isRequired,
};

export { CartItems };
