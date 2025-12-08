import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import TestConnection from "../backend/testConnection";
import Googlelogo from "./assets/icon.png";
import supabase from "../backend/supabaseInit";
function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUpWithEmail(email, password) {
    const { data: sessionData, error } = supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error("SignUp Error:", error.message);
    } else {
      console.log(sessionData);
      console.log("User signedup successfully");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await signUpWithEmail(email, password);
    alert(`${lastname} ${firstname}. This is your email ${email}`);
    console.log(firstname);
  }
  return (
    <>
      <div className=" h-screen bg-gray-900 flex justify-center items-center">
        <TestConnection />
        <div className="bg-gray-300 w-md p-4 rounded-md">
          <div className="mb-3">
            <h1 className="text-2xl font-mono font-semibold text-slate-800 text-center">
              Register Your Account
            </h1>
            <p className="text-gray-700 text-sm">
              Already have an account?
              <a href="" className="underline ml-3">
                Sign in
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 ">
            <InputField
              label="First Name"
              id="firstName"
              placeholder="John"
              onChange={(e) => setFirstname(e.target.value)}
              autocomplete="given-name"
            />
            <InputField
              label="Last Name"
              id="lastName"
              placeholder="Doe"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              autocomplete="family-name"
            />
            <InputField
              label="Email"
              id="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange={(e) => setEmail(e.target.value)}
              autocomplete="email"
            />
            <InputField
              label="Password"
              id="password"
              type="password"
              placeholder="***********"
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
              autocomplete="current-password"
            />
            <Button text="Sign Up" />
            <div className="flex justify-evenly flex-col">
              <div className="relative">
                <hr className="border-gray-400" />
                <span className="absolute flex justify-center w-8 transform top-0 left-1/2 -translate-x-6 -translate-y-3 px-4 bg-gray-300 text-gray-400">
                  or
                </span>
              </div>
              <button
                type="button"
                className="cursor-pointer mt-3 w-4/5 self-center flex bg-gray-200 hover:scale-95 transition-all border border-gray-500 rounded-full px-3 py-2 justify-evenly"
              >
                <img src={Googlelogo} alt="" className="w-7 h-7" />
                <span className="text-gray-700 text-xl">
                  Sign up with Google
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="absolute top-0 bg-purple-500 text-left p-3 pl-20 w-1/2 left-1/4 font-serif font-bold text-gray-100">
        Name: --{firstname} {lastname} <br />
        Email:  {email}
      </div> */}
    </>
  );
}

export default App;
