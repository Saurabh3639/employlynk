"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Employlynk</span>
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-field"
                >
                  Welcome, {session?.user?.name || "User"}
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link href="/dashboard" className="">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <div className="" onClick={() => signOut()}>
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <button>
                <Link href="/login">Sign In</Link>
              </button>
              <button>
                <Link href="/register">Register</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
