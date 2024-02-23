import Logo from "../assets/Amazon_logo.svg";

function Header() {
  return (
    <>
      <img
        src={Logo}
        alt="LOGO"
        className="h-10 border-solid border-limegreen border-2"
      />
    </>
  );
}

export { Header };
