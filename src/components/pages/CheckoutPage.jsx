import { useLocation } from "react-router-dom";
import AmazonLogoImg from "../../assets/Amazon_logo_black.svg";
import padLockImg from "../../assets/lock.svg";
function CheckoutPage() {
  const location = useLocation();
  const checkoutItems = location.state.checkoutItems;
  const totalCheckoutPrice = location.state.totalCostOfSelected;

  // Todo: display items in thier position
  return (
    <div className="h-dvh ">
      <div className="h-16 m-auto w-[60%] flex justify-between items-center">
        <img className="h-8" src={AmazonLogoImg} alt="Amazon" />
        <p>Checkout</p>
        <img className="h-6" src={padLockImg} alt="secure" />
      </div>
      <hr />
      <div className="w-[80%] m-auto flex gap-8 justify-center">
        <div className="p-6 w-4/5 flex flex-col gap-8">
          <div>
            <p className="text-xl font-bold">Enter delivery address</p>
            <textarea
              className="w-96 h-24 border border-black"
              name="adres"
              id="adres"
            ></textarea>
          </div>
          <div>
            <p className="text-xl font-bold">Payment method</p>
            <input type="radio" /> Cash on Delivery/Pay on Delivery
          </div>
          <div>
            <p className="text-xl font-bold">Items and delivery</p>
          </div>
        </div>

        <div className="h-max w-1/5 p-6 flex gap-2 flex-col">checkout</div>
      </div>
    </div>
  );
}

export { CheckoutPage };
