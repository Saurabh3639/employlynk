"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForwardCircle } from "react-icons/io5";

const allServices = [
  {
    id: 1,
    name: "Talent Acquisition and Recruitment",
    link: "/services/ta-and-recruitment",
  },
  {
    id: 2,
    name: "Placement and Counseling",
    link: "/services/placement-and-counseling",
  },
  {
    id: 3,
    name: "Training and Development Programs",
    link: "/services/training-and-programs",
  },
  {
    id: 4,
    name: "HR empowerment",
    link: "/services/hr-empowerment",
  },
];

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="navbar bg-white shadow-md px-4 lg:px-8 lg:gap-6">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Employlynk"
            width={213}
            height={72}
            className="w-[142px] h-[48px] sm:w-[213px] sm:h-[72px]"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-6 items-center">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} className="btn btn-ghost rounded-field border-none shadow-none hover:bg-white">Services</div>
          <ul className="dropdown-content menu bg-base-100 rounded-box shadow w-64 mt-2 z-[1]">
            {allServices.map((service) => (
              <li key={service.id}>
                <Link href={service.link} className="flex items-center justify-between">
                  {service.name}
                  <IoArrowForwardCircle className="w-5 h-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/about-us" className="btn btn-ghost rounded-field border-none shadow-none hover:bg-white">About Us</Link>
        <Link href="/blogs" className="btn btn-ghost rounded-field border-none shadow-none hover:bg-white">Blogs</Link>
        <Link href="/contact-us" className="btn btn-ghost rounded-field border-none shadow-none hover:bg-white">Contact Us</Link>
      </div>

      {/* Auth Buttons */}
      <div className="hidden lg:flex items-center gap-2">
        {session ? (
          <>
            <span className="text-sm">Welcome, {session.user?.name || "User"}</span>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle">
                <IoIosArrowDown />
              </div>
              <ul className="dropdown-content menu bg-base-200 rounded-box mt-3 p-2 shadow w-48 z-[1]">
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline btn-sm">Sign In</Link>
            <Link href="/register" className="btn btn-primary btn-sm">Register</Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <LuMenu className="h-6 w-6" />
        </label>
        <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
          <li>
            <details>
              <summary>Services</summary>
              <ul>
                {allServices.map((service) => (
                  <li key={service.id}>
                    <Link href={service.link}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
          {!session && (
            <>
              <li><Link href="/login">Sign In</Link></li>
              <li><Link href="/register">Register</Link></li>
            </>
          )}
          {session && (
            <>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><button onClick={() => signOut()}>Logout</button></li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
   