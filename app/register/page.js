"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [userInput, setUserInput] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  // console.log("userInput", userInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, contact, email, password, confirm_password } = userInput;
    if (password !== confirm_password) {
      alert("Passwords do not match");
      return;
    }
    const res = await axios.post("/api/register", {
      name,
      contact,
      email,
      password,
    });
    setUserInput({
      name: "",
      contact: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    alert("User registered successfully");
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Register</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            value={userInput.name}
            onChange={handleChange}
          />
          <label htmlFor="contact">Contact</label>
          <input
            type="tel"
            name="contact"
            placeholder="Contact"
            className="input"
            value={userInput.contact}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            value={userInput.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={userInput.password}
            onChange={handleChange}
          />
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="input"
            value={userInput.confirm_password}
            onChange={handleChange}
          />
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Register
            </button>
          </div>
          <div className="card-actions">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="link underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
