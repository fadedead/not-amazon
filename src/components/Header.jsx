import Logo from "../assets/Amazon_logo.svg";
import { Cart } from "./Cart";
import { Language } from "./Language";
import { Location } from "./Location";
import { Returns } from "./Returns";
import { SearchBar } from "./SearchBar";
import { SignIn } from "./SignIn";

function Header() {
  return (
    <div className="h-14 w-full flex justify-evenly items-center bg-[#131A22] border-solid border-green-950 border-1">
      <img
        src={Logo}
        alt="LOGO"
        className="h-7 hover:border-white hover:border box-content p-2"
      />
      <Location />
      <SearchBar />
      <Language />
      <SignIn />
      <Returns />
      <Cart />
    </div>
  );
}

export { Header };
