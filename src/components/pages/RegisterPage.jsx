import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginCard } from "../generic/LoginCard";

function RegisterPage() {
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const [invalidInput, setInvalidInput] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState(null);

  async function createUser(fullname, username, password) {
    if (debounceTimer) clearTimeout(debounceTimer);

    setDebounceTimer(
      setTimeout(() => {
        fetch("https://fakestoreapi.com/users", {
          method: "POST",
          body: JSON.stringify({
            email: fullname + "@gmail.com",
            username: username,
            password: password,
            name: {
              firstname: fullname.split(" ")[0],
              lastname: fullname.split(" ")[1] || "",
            },
            address: {
              city: "The city",
              street: "1 new road",
              number: 69,
              zipcode: "69420666",
              geolocation: {
                lat: "-37.3159",
                long: "81.1496",
              },
            },
            phone: "1234567890",
          }),
        })
          .then((res) => res.json())
          .then((json) => json.id)
          .then((id) => alert(`Created user with id: ${id}`))
          .catch((e) => console.log(e));
      }, 500),
    );
  }
  return (
    <div className="w-lvw h-lvh p-8 flex flex-col items-center gap-4">
      <LoginCard>
        <h1 className="text-3xl font-bold">Create account</h1>

        <p className="font-bold">Your name</p>
        <input
          type="text"
          className="w-80 h-8 p-1 border-gray-400 border rounded-sm"
          onChange={(e) =>
            setUserData({ ...userData, fullname: e.target.value })
          }
        />
        {invalidInput && userData.fullname.length < 1 && (
          <p className="text-red-900">! Enter your name</p>
        )}

        <p className="font-bold">Mobile number or email</p>
        <input
          type="text"
          className="w-80 h-8 p-1 border-gray-400 border rounded-sm"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        {invalidInput && userData.username < 1 && (
          <p className="text-red-900">
            ! Enter your email or mobile phone number
          </p>
        )}

        <p className="font-bold">Password</p>
        <input
          type="password"
          className="w-80 h-8 p-1 border-gray-400 border rounded-sm"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        {invalidInput && userData.password.length < 6 && (
          <p className="text-red-900">! Minimum 6 characters required</p>
        )}

        <p className="font-bold">Re-enter password</p>
        <input
          type="password"
          className="w-80 h-8 p-1 border-gray-400 border rounded-sm"
          onChange={(e) =>
            setUserData({ ...userData, rePassword: e.target.value })
          }
        />
        {userData.password !== userData.rePassword && (
          <p className="text-red-900">! Passwords are not the same</p>
        )}

        <button
          className="w-80 h-8 bg-[#F7CA00] rounded-lg"
          onClick={() => {
            userData.fullname.length < 1 ||
            userData.username.length < 1 ||
            userData.password.length < 1 ||
            userData.rePassword.length < 1 ||
            userData.password !== userData.rePassword
              ? setInvalidInput(true)
              : createUser(
                  userData.fullname,
                  userData.username,
                  userData.password,
                );
          }}
        >
          continue
        </button>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
        <hr />
        <p className="font-bold">Buying for work?</p>
        <p className="text-blue-500">Create a free business account</p>

        <hr />
        <span>
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </span>
      </LoginCard>
    </div>
  );
}

export { RegisterPage };
