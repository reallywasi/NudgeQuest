"use client";
import React, { useState } from "react";

const Homeheader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">NudgeQuest</h1>
        <nav className="hidden md:flex space-x-4">
          <a
            href="/dashboard"
            className="text-lg font-medium hover:text-secondary"
          >
            Sign Up
          </a>
          <a
            href="/dashboard"
            className="text-lg font-medium hover:text-secondary"
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="text-lg font-medium hover:text-secondary"
          >
            Dashboard
          </a>
        </nav>
        <button
          onClick={toggleMenu}
          className="md:hidden text-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={`md:hidden absolute top-16 right-4 bg-white text-gray-800 rounded-lg shadow-lg transition-transform ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-80"
          } ease-in-out duration-300`}
        >
          <nav className="flex flex-col p-4">
            <a
              href="/dashboard"
              className="text-lg font-medium py-2 hover:text-secondary"
            >
              Sign Up
            </a>
            <a
              href="/dashboard"
              className="text-lg font-medium py-2 hover:text-secondary"
            >
              Login
            </a>
            <a
              href="/dashboard"
              className="text-lg font-medium py-2 hover:text-secondary"
            >
              Dashboard
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Homeheader;
