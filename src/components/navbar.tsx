import * as React from "react";
import Link from "next/link";

import DarkModeToggle from "./darkmode-toggle";

const Navbar = () => {
  return (
    <nav className="h-18 mx-auto flex w-full justify-between bg-slate-950 px-12 py-4">
      <div>
        <Link href="/" passHref>
          <span className="text-2xl font-bold text-accent-foreground text-white">
            Pudgy Penguin Viewer
          </span>
        </Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
