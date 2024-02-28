import { Link } from "react-router-dom";
import AmazonLogoImg from "../../assets/Amazon_logo_white.svg";
import { Language } from "./Language";
import { Location } from "./Location";
import { Returns } from "./Returns";
import { SearchBar } from "./SearchBar";
import { SignIn } from "./SignIn";
import { Cart } from "./Cart";

function Header() {
  return (
    <div className="h-14 w-full flex justify-evenly items-center bg-[#131A22] border-solid border-green-950 border-1">
      <Link to="/">
        <img
          src={AmazonLogoImg}
          alt="LOGO"
          className="h-7 border-transparent hover:border-white border box-content p-2"
        />
      </Link>
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
