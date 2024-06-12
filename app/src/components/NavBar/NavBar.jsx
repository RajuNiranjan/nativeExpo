import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="h-14 bg-gray-500 flex items-center justify-between px-14 sticky top-0">
      <div>
        <Link href="/" className="text-2xl font-bold">
          <span className="text-white">Next</span>_
          <span className="text-gray-400">Express</span>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/">
          <p
            className={`${
              pathName === "/" ? "text-white" : "text-gray-700"
            } font-bold transition-all duration-300 `}>
            Home
          </p>
        </Link>
        <Link href="/sign-in">
          <p
            className={`${
              pathName === "/sign-in" ? "text-white" : "text-gray-700"
            } font-bold transition-all duration-300 `}>
            Sign In
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
