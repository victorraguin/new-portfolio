"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 animate-float-icons right-5 text-white  py-2 px-2 rounded-full border shadow shadow-black bg-[#faeee1] dark:bg-black border-main"
        aria-label="Back to Top">
        <Image
          src="/portfolio-logo.png"
          alt="Logo"
          className="rotate-180"
          width={20}
          height={20}
          quality={100}
        />
      </button>
    )
  );
};

export default ButtonToTop;
