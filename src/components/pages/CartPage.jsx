import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../header/Header";
import { NavBar } from "../nav/NavBar";

function CartPage() {
  // Since FakestoreAPI does not provide a working endpoint to add items to cart we will use local storage

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [selectedToBuy, setSelectedToBuy] = useState({});
  const [itemQuantity, setItemQuantity] = useState();

  const localStorageUpdateWithCart = (productId, newQuantity) => {
    setItemQuantity((itemQuantity) => {
      itemQuantity = { ...itemQuantity, [productId]: newQuantity };
      localStorage.setItem("cart", JSON.stringify(itemQuantity));
      return itemQuantity;
    });
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

    getItemsUsingIds(Object.keys(localCart)).then((res) => {
      setCartItems(res);
    });

    setSelectedToBuy(localCart);
    setItemQuantity(localCart);
  }, []);

  return (
    <div className="h-lvh bg-[#eaeded]">
      <Header />
      <NavBar />
      <div className="flex justify-center">
        <div className="w-4/5 flex justify-between">
          <div className="w-2/3">
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
                      <img
                        onClick={() => navigate(`/product/${data.id}`)}
                        className="size-24"
                        src={data.image}
                        alt=""
                      />
                      <div className="">
                        <p
                          onClick={() => navigate(`/product/${data.id}`)}
                          className="text-xl"
                        >
                          {data.title}
                        </p>
                        <p className="text-sm font-normal text-green-900">
                          In stock
                        </p>
                        <span className="flex gap-1">
                          <input type="checkbox" />
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
            <p>Subtotal</p>
          </div>
          <div className="w-1/4 border border-black"></div>
        </div>
      </div>
    </div>
  );
}

export { CartPage };
