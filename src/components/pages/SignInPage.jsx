import AmazonLogoImg from "../../assets/Amazon_logo.svg";

function SignInPage() {
  return (
    <div className="w-lvw h-lvh p-4 flex justify-center">
      <img src={AmazonLogoImg} alt="Amazon" className="w-24 h-8 fill-black" />
      <div></div>
    </div>
  );
}

export { SignInPage };
