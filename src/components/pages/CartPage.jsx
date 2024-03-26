import { Header } from "../header/Header";
import { NavBar } from "../nav/NavBar";

function CartPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="w-lvw flex justify-center bg-[#eaeded]">
        <div className="w-4/5 flex">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export { CartPage };
