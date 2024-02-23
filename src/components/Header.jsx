import Logo from "../assets/Amazon_logo.svg";
import { SearchBar } from "./SearchBar";

function Header() {
  return (
    <div className="h-10vh flex justify-evenly items-center bg-[#131A22]  border-solid border-green-950 border-2">
      <img src={Logo} alt="LOGO" className="h-10" />
      <SearchBar />
    </div>
  );
}

export { Header };
