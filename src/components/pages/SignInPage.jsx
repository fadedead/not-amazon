import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginCard } from "../generic/LoginCard";

function SignInPage() {
  const [showHelp, setHelpState] = useState(false);
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [showPass, setShowPassword] = useState(false);

  async function handleLogin(username, password) {
    const payload = JSON.stringify({
      username,
      password,
    });
    return fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })
      .then((res) => res.json())
      .then((json) => alert(`Valid user token generated: ${json.token}`))
      .catch(() =>
        alert(`User not in DB, try username: donero and password: ewedon`),
      );
  }

  if (showPass) {
    return (
      <div className="w-lvw h-lvh p-8 flex flex-col items-center gap-4">
        <LoginCard>
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p>
            {creds.username}{" "}
            <span
              className="text-blue-600"
              onClick={() => setShowPassword(false)}
            >
              change
            </span>
          </p>
          <p className="font-bold">Password</p>
          <input
            type="password"
            className="w-90 h-8 p-1 border-gray-400 border rounded-sm"
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
          {invalidPassword && (
            <p className="text-red-900">! Enter your password</p>
          )}
          <button
            className="w-90 h-8 mt-2 bg-[#F7CA00] rounded-lg"
            onClick={() => {
              creds.password.length < 1
                ? setInvalidPassword(true)
                : handleLogin(creds.username, creds.password);
            }}
          >
            Sign In
          </button>
          <p>
            <input type="checkbox" className="mr-1" />
            keep me signed in.
          </p>

          <div className="w-80 flex justify-evenly items-center">
            <hr className="h-1 w-48" />
            <p className="text-xs">or</p>
            <hr className="h-1 w-48" />
          </div>

          <button className="w-full h-8 border border-gray-400 rounded-lg">
            Sign in with a code
          </button>
        </LoginCard>
      </div>
    );
  }

  return (
    <div className="w-lvw h-lvh p-8 flex flex-col items-center gap-4">
      <LoginCard>
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="font-bold">Email or mobile phone number</p>
        <input
          type="text"
          className="w-90 h-8 p-1 border-gray-400 border rounded-sm"
          onChange={(e) => setCreds({ ...creds, username: e.target.value })}
        />
        {invalidUsername && (
          <p className="text-red-900">
            ! Enter your email or mobile phone number
          </p>
        )}
        <button
          className="w-90 h-8 bg-[#F7CA00] rounded-lg"
          onClick={() => {
            creds.username.length < 1
              ? setInvalidUsername(true)
              : setShowPassword(true);
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
            <li>Forgot your password?</li>
            <li>Other issues with Sign-In</li>
          </ul>
        )}
        <hr />
        <p className="font-bold">Buying for work?</p>
        <p className="text-blue-500">Shop on Amazon Business</p>
      </LoginCard>
      <div className="w-80 flex justify-evenly items-center">
        <hr className="h-1 w-24" />
        <p className="text-xs">New to Amazon?</p>
        <hr className="h-1 w-24" />
      </div>
      <Link to="/register">
        <button className="w-80 border border-gray-400 rounded-lg">
          Create your Amazon account
        </button>
      </Link>
    </div>
  );
}

export { SignInPage };
