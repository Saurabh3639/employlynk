import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center px-4 py-8 rounded bg-gray-100 shadow">
      <div className="w-full grid grid-cols-3 text-sm">
        <div>&nbsp;</div>
        <div>© 2025 Employlynk. All rights reserved</div>
        <div className="w-full flex items-center justify-center gap-6">
          <span className="cursor-pointer">Privacy Policy </span>
          <span className="cursor-pointer">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
