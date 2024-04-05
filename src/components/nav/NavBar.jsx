import { useEffect, useState } from "react";
import HamburgerImg from "../../assets/hamburger-menu.svg";
import { Category } from "../generic/Category";
import CrossImg from "../../assets/cross.svg";
import ProfileImg from "../../assets/profile.svg";

async function fetchCategories() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function NavBar() {
  const [showsideBar, setSidebarState] = useState(false);
  const [closing, setClosing] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((res) => {
        return res.map((item) => ({ name: item, link: `/category/${item}` }));
      })
      .then((res) => setCategories(res));
  }, []);

  const closeSidebar = () => {
    setClosing(true);
    setTimeout(() => {
      setSidebarState(false);
      setClosing(false);
    }, 190);
  };

  return (
    <>
      {showsideBar && (
        <div className="absolute z-10 top-0 w-full flex h-lvh bg-black bg-opacity-50 ">
          <div
            className={`w-96 bg-white overflow-y-auto ${closing ? "animate-slideOut" : "animate-slideIn"}`}
          >
            <div className="h-12 pl-6 flex items-center font-bold text-xl text-white bg-[#232F3E]">
              <img className="size-8 m-2" src={ProfileImg} alt="" />
              Hello, sign in
            </div>
            <Category
              title="Shop By department"
              items={categories}
              closeSidebar={closeSidebar}
            />
            <hr />
            <Category
              title="Programs & Features"
              items={[
                { name: "Gift Cards", link: "" },
                { name: "Amazon Live", link: "" },
                { name: "International Shopping", link: "" },
              ]}
              closeSidebar={closeSidebar}
            />
            <hr />
            <Category
              title="Help & Settings"
              items={[
                { name: "Your Account", link: "" },
                { name: "English", link: "" },
                { name: "United States", link: "" },
                { name: "Customer Service", link: "" },
                { name: "Sign In", link: "/signin" },
              ]}
              closeSidebar={closeSidebar}
            />
            <hr />
          </div>
          <div onClick={closeSidebar}>
            <img className="size-10 m-4" src={CrossImg} alt="close" />
          </div>
        </div>
      )}

      <div className="h-10 flex justify-start items-center bg-[#232F3E] border border-black">
        <div
          className="ml-4 p-2 flex items-center gap-1 text-xs text-white font-bold hover:border-white border border-transparent"
          onClick={() => {
            setSidebarState(!showsideBar);
          }}
        >
          <img src={HamburgerImg} alt="menu" className="size-4" />
          All
        </div>
      </div>
    </>
  );
}

export { NavBar };
