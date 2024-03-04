"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const FloatingCTA = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Link
        href={`/`}
        className={`fixed top-4 left-1 bg-blue-500 text-white p-4 rounded-full animate-pulse transition-all duration-300 ease-in-out`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12H8" />
          <path d="m12 8-4 4 4 4" />
        </svg>
      </Link>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full animate-bounce ${
          showButton ? "visible" : "invisible"
        } transition-all duration-300 ease-in-out`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up"
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      </button>
    </>
  );
};

export default FloatingCTA;
