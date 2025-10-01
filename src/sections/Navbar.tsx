"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import LogoIcon from "@/assets/logo.svg";
import DownArrow from "@/assets/downarrow.svg";

const navLinks = [
  { label: "Course", href: "#course" },
  { label: "Teacher", href: "#teacher" },
  { label: "How to use", href: "#how-to-use" },
  { label: "About us", href: "#about-us" },
];

const courseLinks = [
  { label: "Math", href: "#math" },
  { label: "Literature", href: "#literature" },
  { label: "English", href: "#english" },
  { label: "Art", href: "#art" },
  { label: "All Courses", href: "#allcourses" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-white z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="flex justify-between items-center mx-6 md:mx-24 py-4">
        {/* Logo */}
        <div className="flex items-center gap-x-4">
          <Image src={LogoIcon} alt="Logo Edudu" className="cursor-pointer" />
          <h1 className="font-bold text-[22px] md:text-[26px] cursor-pointer">
            Edudu
          </h1>
        </div>

        {/* Links (desktop) */}
        <ul className="hidden lg:flex gap-x-10">
          {/* Course com submenu */}
          <li className="relative group">
            <a
              href="#course"
              className="flex items-center gap-1 text-[16px] md:text-[17px] hover:-translate-y-[2px] transition-transform duration-200 hover:text-[#FAB900] hover:font-bold"
            >
              Course
              <Image src={DownArrow} alt="arrow" className="w-5 h-5" />
            </a>

            {/* Submenu */}
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200">
              {courseLinks.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#FAB900] hover:font-semibold"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Outros links */}
          {navLinks.slice(1).map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-block text-[16px] md:text-[17px] hover:-translate-y-[2px] transition-transform duration-200 hover:text-[#FAB900] hover:font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botões (desktop) */}
        <div className="hidden md:flex gap-x-6">
          <button className="cursor-pointer font-semibold hover:text-[#FAB900]">
            Sign up
          </button>
          <button className="cursor-pointer font-semibold text-white bg-[#362B0E] rounded-2xl py-2 px-4 hover:bg-[#FAB900] hover:border-[#FAB900] hover:text-[#362B0E] hover:font-bold hover:shadow-lg">
            Log in
          </button>
        </div>

        {/* Hamburguer (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`h-0.5 w-6 bg-[#FAB900] transition  ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#FAB900] transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#FAB900] transition ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-white shadow-lg">
          {/* Course com submenu */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setIsCourseOpen(!isCourseOpen)}
              className="flex items-center gap-1 text-lg font-medium hover:text-[#FAB900] "
            >
              Course
              <Image
                src={DownArrow}
                alt="arrow"
                className={`w-4 h-4 transition-transform ${
                  isCourseOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCourseOpen && (
              <ul className="flex flex-col gap-2 rounded-2xl mt-2 bg-gray-100 px-10 py-3 ">
                {courseLinks.map((course) => (
                  <li key={course.label} >
                    <a
                      href={course.href}
                      className="block text-base hover:text-[#FAB900] hover:font-semibold hover:-translate-y-[1px] transition-transform duration-200"
                    >
                      {course.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Outros links */}
          {navLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg hover:text-[#FAB900] hover:font-bold hover:-translate-y-[2px] transition-transform duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Botões */}
          <button className="cursor-pointer font-semibold hover:text-[#FAB900]">
            Sign up
          </button>
          <button className="cursor-pointer font-semibold text-white bg-[#362B0E] border border-[#362B0E] rounded-2xl py-2 px-4 hover:bg-[#FAB900] hover:border-[#FAB900] hover:text-[#362B0E] hover:font-bold hover:shadow-lg">
            Log in
          </button>
        </div>
      )}
    </nav>
  );
}
