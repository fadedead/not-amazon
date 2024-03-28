import { useEffect, useState } from "react";
import { Header } from "../../header/Header";
import { NavBar } from "../../nav/NavBar";
import { Loading } from "../../generic/Loading";
import { CartItems } from "./CartItems";
import { SideCard } from "./SideCard";

function CartPage() {
  // Since FakestoreAPI does not provide a working endpoint to add items to cart we will use local storage

  const [cartItems, setCartItems] = useState([]);
  const [selectedToBuy, setSelectedToBuy] = useState({});
  const [itemQuantity, setItemQuantity] = useState();
  const [isGift, setGift] = useState(false);

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

    getItemsUsingIds(Object.keys(localCart)).then((res) => setCartItems(res));

    setSelectedToBuy(localCart);
    setItemQuantity(localCart);
  }, []);

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
          <CartItems
            cartItems={cartItems}
            setCartItems={setCartItems}
            selectedToBuy={selectedToBuy}
            setSelectedToBuy={setSelectedToBuy}
            itemQuantity={itemQuantity}
            setItemQuantity={setItemQuantity}
            isGift={isGift}
            setGift={setGift}
            totalCostOfSelected={totalCostOfSelected()}
          />

          <SideCard
            itemsCount={Object.keys(selectedToBuy).length}
            totalCostOfSelected={totalCostOfSelected()}
            setGift={setGift}
            isGift={isGift}
          />
        </div>
      </div>
    </div>
  );
}

export { CartPage };
