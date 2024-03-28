import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../header/Header";
import { NavBar } from "../nav/NavBar";
import { Loading } from "../generic/Loading";

function CartPage() {
  // Since FakestoreAPI does not provide a working endpoint to add items to cart we will use local storage
  const navigate = useNavigate();

  const [isloading, setLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [selectedToBuy, setSelectedToBuy] = useState({});
  const [itemQuantity, setItemQuantity] = useState();
  const [isGift, setGift] = useState(false);

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

  const totalCostOfSelected = () => {
    let total = 0;
    for (let item of Object.keys(selectedToBuy)) {
      total +=
        cartItems.find((object) => object.id == item)?.price *
        parseInt(itemQuantity[item]);
    }

    return total;
  };

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || {};

    const getItemsUsingIds = async (ids) => {
      try {
        const prodcuts = [];

        for (let id of ids) {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const resJson = await res.json();
          prodcuts.push(resJson);
        }

        return prodcuts;
      } catch (error) {
        console.log(error);
      }
    };

    getItemsUsingIds(Object.keys(localCart))
      .then((res) => setCartItems(res))
      .then(() => setLoading(!isloading));

    setSelectedToBuy(localCart);
    setItemQuantity(localCart);
  }, []);

  if (isloading) {
    return (
      <div className="w-lvw h-lvh flex items-center justify-center">
        <Loading size="size-12" />
      </div>
    );
  }

  // Todo: Styling
  // Todo: Checkout page
  // Todo: Dynamic select
  // Todo: delete button

  return (
    <div className="h-lvh bg-[#eaeded]">
      <Header />
      <NavBar />
      <div className="flex justify-center">
        <div className="w-4/5 gap-8 flex justify-between">
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

                        <p className="text-sm font-normal text-green-900">
                          In stock
                        </p>

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
                            localStorageUpdateWithCart(
                              data.id,
                              event.target.value,
                            )
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

                      <p className="ml-auto text-xl font-semibold">
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
              <p>({Object.keys(selectedToBuy).length} items):</p>
              <p>{totalCostOfSelected()}</p>
            </div>
          </div>

          <div className="w-1/5 p-6 flex gap-2 flex-col bg-white">
            <div className="flex gap-2 text-xl">
              <p>Subtotal</p>
              <p>({Object.keys(selectedToBuy).length} items):</p>
              <p className="font-semibold">${totalCostOfSelected()}</p>
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
        </div>
      </div>
    </div>
  );
}

export { CartPage };
