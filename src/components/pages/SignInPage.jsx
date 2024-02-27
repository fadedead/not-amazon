import { useState } from "react";
import AmazonLogoImg from "../../assets/Amazon_logo.svg";
import { Link } from "react-router-dom";

function SignInPage() {
  const [showHelp, setHelpState] = useState(false);
  const [inputValue, setValueState] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  return (
    <div className="w-lvw h-lvh p-8 flex flex-col items-center gap-4">
      <Link to="/">
        <img src={AmazonLogoImg} alt="Amazon" className="w-24 h-8 fill-black" />
      </Link>
      <div className="w-96 p-4 flex-col flex gap-2 border-gray-400 border rounded-xl scale-90">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="font-bold">Email or mobile phone number</p>
        <input
          type="text"
          className="w-80 h-8 border-gray-400 border rounded-sm"
          onChange={(e) => setValueState(e.target.value)}
        />
        {invalidInput && (
          <p className="text-red-900">
            ! Enter your email or mobile phone number
          </p>
        )}
        <button
          className="w-80 h-8 bg-[#F7CA00] rounded-lg"
          onClick={() => {
            inputValue.length < 1
              ? setInvalidInput(true)
              : setInvalidInput(false);
          }}
        >
          continue
        </button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p className="text-blue-600" onClick={() => setHelpState(!showHelp)}>
          &#x25BC; Need help?
        </p>
        {showHelp && (
          <ul className="text-blue-600 ml-2">
            <li>For got your password?</li>
            <li>Other issues with Sign-In</li>
          </ul>
        )}
        <hr />
        <p className="font-bold">Buying for work?</p>
        <p className="text-blue-500">Shop on Amazon Business</p>
      </div>
      <div className="w-80 flex justify-evenly items-center">
        <hr className="h-1 w-24" />
        <p className="text-xs">New to Amazon?</p>
        <hr className="h-1 w-24" />
      </div>
      <button className="w-80 border border-gray-400 rounded-lg">
        Create your Amazon account
      </button>
    </div>
  );
}

export { SignInPage };
