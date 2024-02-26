import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [showMenu, setMenuState] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setMenuState(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setMenuState(false), 500);
  };

  const handleMenuMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  const handleMenuMouseLeave = () => {
    timeoutId = setTimeout(() => setMenuState(false), 500);
  };

  return (
    <Link
      to="signin"
      className="relative text-white hover:border-white border-transparent border box-content p-2 text-xs"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label>Hello, sign in</label> <br />
      <b>Accounts & Lists &#x25BC;</b>
      {showMenu && (
        <div
          className="w-96 absolute -left-24 mt-4 p-4 flex flex-col items-center gap-3 border-2 text-black bg-white rounded-lg"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <button className="w-48 h-8 bg-[#F7CA00] p-1 rounded-lg">
              Sign In
            </button>
            <p>New customer? Start here</p>
          </div>
          <div className="flex gap-10">
            <div>
              <h3 className="font-bold">Your Lists</h3>
              <p> Create a List </p>
              <p> Find a List or Registry </p>
            </div>
            <div>
              <h3 className="font-bold">Your Account</h3>
              <p> Account </p>
              <p> Orders </p>
              <p> Recommendations </p>
              <p> Browsing History </p>
              <p> Watchlist </p>
              <p> Video Purchases & Rentals </p>
              <p> Kindle Unlimited </p>
              <p> Content & Devices </p>
              <p> Subscribe & Save Items </p>
              <p> Memberships & Subscriptions </p>
              <p> Music Library </p>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}

export { SignIn };
