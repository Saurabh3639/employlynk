"use client";

import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import BubbleCard from "../_components/BubbleCard";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h1>Welcome, {session?.user?.name || "User"}</h1>
      <button onClick={() => signOut()} className="btn mt-4">
        Log out
      </button>

      <div className="mt-8">
        <BubbleCard text="Why Felix-ITs for AI-Powered Courses?" dark={true} />
        <BubbleCard text="Why Choose AI-Based Learning?" dark={false} />
      </div>
    </div>
  );
}
