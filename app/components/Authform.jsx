// Authform.jsx
import React, { useState } from "react";
import Link from "next/link";

export default function Authform(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/server", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    
    // console.log("Email:", email);
    // console.log("Password:", password);
    // if (props.formType === 'Login') {
    //     if (email === "nxhettry@gmail.com") {
    //         console.log("Welcome boss! how are you?");
    //     } else {
    //         console.log("Welcome Client")
    //     }// Handle login logic
    // } else {
    //     console.log("Signup");// Handle signup logic
    // }
  };

  return (
    <div className="min-h-[87vh] w-screen border-2 border-red-400 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the app!</h1>
      <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow text-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow text-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {props.formType}
          </button>
        </div>
      </form>
      <div className="mt-4">
        <p>
          {props.buttonText} instead?{" "}
          <Link
            onClick={props.buttonAction}
            className="text-blue-500 underline"
            href="#"
          >
            {props.buttonText}
          </Link>
        </p>
      </div>
    </div>
  );
}
