"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import MobileSidebar from "./Sidebar";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);



  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };



  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-300"
        >
          <Image
            src="/images/officialLogo.png"
            alt="logo"
            width={70}
            height={70}
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <SlideTabs />
        {isOpen && (
          <>
             {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />
          )}
          <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
      </div>
    </header>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="hidden md:flex relative w-fit rounded-full p-1"
    >
      <Tab setPosition={setPosition} link="/">
        Home
      </Tab>
      <Tab setPosition={setPosition} link="/about">
        About
      </Tab>
      <Tab setPosition={setPosition} link="/projects">
        Projects
      </Tab>
      <Tab setPosition={setPosition} link="/contact">
        Contact
      </Tab>
      <Tab setPosition={setPosition} link="/playground">
        Playground
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};
type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  link: string;
};

const Tab: React.FC<TabProps> = ({ children, setPosition, link }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  return (
    <Link
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      href={link}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </Link>
  );
};
type CursorProps = {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gray-100 md:h-12"
    />
  );
};

