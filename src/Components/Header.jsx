import React, { useState } from "react";
import Login from "./Login";

export default function MethalodaiNewsHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = false; // You can replace this with your auth state

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/favicon.ico"
            alt="Methalodai Logo"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
          <h1 className="text-2xl font-bold tracking-tight">Methalodai News</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6 text-lg font-medium">
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Home
          </a>
          {isLoggedIn && (
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              Profile
            </a>
          )}
          {!isLoggedIn ? (
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              Login
            </a>
          ) : (
            <button
              className="hover:text-yellow-400 transition duration-300"
              onClick={() => alert("Logout clicked")}
            >
              Logout
            </button>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="sm:hidden bg-blue-800 px-6 py-4 space-y-3 text-lg font-medium">
          <a
            href="#"
            className="block hover:text-yellow-400 transition duration-300"
          >
            Home
          </a>
          {isLoggedIn && (
            <a
              href="#"
              className="block hover:text-yellow-400 transition duration-300"
            >
              Profile
            </a>
          )}
          {!isLoggedIn ? (
            <a
              href="#"
              className="block hover:text-yellow-400 transition duration-300"
            >
              Login
            </a>
          ) : (
            <button
              className="block w-full text-left hover:text-yellow-400 transition duration-300"
              onClick={() => alert("Logout clicked")}
            >
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
