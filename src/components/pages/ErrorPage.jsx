import { Link } from "react-router-dom";
import AmazonLogoImg from "../../assets/Amazon_logo_black.svg";

function ErrorPage() {
  return (
    <div className="w-lvw h-lvh p-4 flex flex-col items-center">
      <Link to="/">
        <img src={AmazonLogoImg} alt="Amazon" className="w-24 h-8 fill-black" />
      </Link>
      <div className="w-auto p-4 flex-col flex gap-2 ">
        <div>
          <p className="text-xl text-orange-500">Looking for something?</p>
          <p className="text-lg">
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </p>
        </div>
        <span className="text-lg font-semibold">
          <p>
            Go to Amazon.in's{" "}
            <Link to="/" className="underline text-blue-900">
              Home
            </Link>{" "}
            Page
          </p>
        </span>
      </div>
    </div>
  );
}

export { ErrorPage };
