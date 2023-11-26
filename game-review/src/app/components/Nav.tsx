"use client"; // This is a client component
import { useState } from "react";
import Link from "next/link";

export const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
 <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container flex flex-wrap items-center justify-between">

          <div
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-blue-800 hover:opacity-60" href="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-blue-800 hover:opacity-60" href="/News">News</Link>
              </li>

                <li className="nav-item">
              <Link className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-blue-800 hover:opacity-60" href="/Search">Search</Link>
              </li>

              <li className="nav-item">
              <Link className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-blue-800 hover:opacity-60" href="/Favorite">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
