import { useNavigate, useLocation } from "react-router-dom";
import AmazonLogoImg from "../../assets/Amazon_logo_black.svg";
import padLockImg from "../../assets/lock.svg";
import { useEffect, useState } from "react";

function CheckoutPage() {
  const navigate = useNavigate();

  const location = useLocation();
  const [checkoutItems, setCheckoutItems] = useState(
    location.state.checkoutItems,
  );
  const [totalCheckoutPrice, setTotalCheckoutPrice] = useState(
    parseInt(location.state.totalCostOfSelected),
  );

  const handleQuantityChange = (id, newQuantity) => {
    setCheckoutItems((prevCheckoutItems) => {
      const updatedCheckoutItems = prevCheckoutItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      return updatedCheckoutItems;
    });
  };

  const handlePurchase = () => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    for (let val of checkoutItems) {
      const id = val.id;
      delete localCart[id];
    }
    localStorage.setItem("cart", JSON.stringify(localCart));
    navigate("/cart");
  };

  useEffect(() => {
    const newTotalPrice = checkoutItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );

    setTotalCheckoutPrice(newTotalPrice);
  }, [checkoutItems]);

  return (
    <div className="h-dvh">
      <div className="h-16 m-auto w-[60%] flex justify-between items-center">
        <img className="h-8" src={AmazonLogoImg} alt="Amazon" />
        <p className="text-3xl">Checkout</p>
        <img className="h-6" src={padLockImg} alt="secure" />
      </div>
      <hr />
      <div className="w-[60%] m-auto p-4 flex gap-8 justify-center">
        <div className="p-6 w-4/5 flex flex-col gap-4">
          <div>
            <p className="text-xl font-bold">Enter delivery address</p>
            <textarea
              className="w-96 h-24 p-1 border border-black"
              name="adres"
              id="adres"
            ></textarea>
          </div>
          <hr />
          <div>
            <p className="text-xl font-bold">Payment method</p>
            <input type="radio" /> Cash on Delivery/Pay on Delivery
          </div>
          <hr />
          <div>
            <p className="text-xl font-bold">Items and delivery</p>
            <div className="flex flex-col gap-2">
              {checkoutItems.map((data) => {
                return (
                  <div
                    className="w-2/3 p-4 flex gap-2 border border-gray-500"
                    key={data.id}
                  >
                    <img
                      className="size-12 self-center"
                      src={data.image}
                      alt=""
                    />
                    <div className="flex gap-4 justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-xl cursor-pointer">{data.title}</p>

                        <p className="text-sm font-normal text-green-900">
                          In stock
                        </p>

                        <div className="flex gap-2">
                          <select
                            name="quantity"
                            id="quantity"
                            className="w-8"
                            value={data.quantity}
                            onChange={(event) =>
                              handleQuantityChange(data.id, event.target.value)
                            }
                          >
                            {Array.from({ length: 5 }, (_, index) => (
                              <option key={index + 1} value={index + 1}>
                                {index + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <p className="w-32 text-xl font-semibold text-right">
                        $ {data.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-max w-1/3 p-6 flex flex-col gap-2 border border-gray-400 rounded-lg">
          <button
            className="h-8 rounded-lg bg-[#ffd814]"
            onClick={() => handlePurchase()}
          >
            Place your order
          </button>
          <p className="text-xs text-center">
            By placing your order, you agree to Amazon's privacy notice and
            conditions of use.
          </p>
          <hr />

          <p className="text-lg font-bold">Order Summary</p>
          <div className="flex justify-between text-xs">
            <p>Items: </p>
            <p>${totalCheckoutPrice}</p>
          </div>
          <div className="flex justify-between text-xs">
            <p>Delivery: </p>
            <p>$0</p>
          </div>

          <hr />
          <div className="flex justify-between text-lg font-semibold text-red-700">
            <p>Order Total:</p>
            <p>${totalCheckoutPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CheckoutPage };
