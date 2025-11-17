import { useRef, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const formRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (form.checkValidity()) {
      form.reset();
      alert(`${lastname} ${firstname}. This is your email ${email}`);
      console.log(firstname)
    }
  }
  return (
    <>
      <div className=" h-screen bg-gray-900 flex justify-center items-center">
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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-3 "
          >
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
              autocomplete="new-password"
            />
            <Button text="Sign Up" />
          </form>
        </div>
      </div>
      <div className="absolute top-0 bg-purple-500 text-left p-3 pl-20 w-1/2 left-1/4 font-serif font-bold text-gray-100">
        Name: --{firstname} {lastname} <br />
        Email:  {email}
      </div>
    </>
  );
}

export default App;
