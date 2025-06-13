"use client";

import Link from "next/link";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  // console.log("userInput", userInput);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("userInput in handleSubmit :", userInput);

    const res = await signIn("credentials", {
      email: userInput.email,
      password: userInput.password,
      // redirect: false,
    });
    if (res.error) {
      setError(res.error);
    } else {
      redirect("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            value={userInput.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={userInput.password}
            onChange={handleChange}
            required
          />
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <div className="card-actions mt-4">
            <button onClick={handleSubmit} className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="card-actions mt-2">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="btn btn-outline btn-secondary"
            >
              Login with Google
            </button>
          </div>
          <div className="card-actions mt-2">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="link underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
