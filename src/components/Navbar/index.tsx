import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-4 py-2">
      <div className="flex justify-center bg-slate-50 rounded-full text-slate-900 py-1">
        <Link href="/" className="font-bold text-xl">
          Pokepedia
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
