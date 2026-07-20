"use client";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Profile from "./Profile/Profile";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-10 my-10">
        <div className="col-span-1 sm:col-span-8 text-center sm:text-left">
          <h1 className="text-background mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              {" "}
              Hi I`m
            </span>
            <br />
            <TypeAnimation
              sequence={["Frontend Developer", 1000, "Sara", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-ring text-base sm:text-lg mb-6 lg:text-xl">
            Computer and Information Science graduate and Frontend Developer
            specializing in React , Next js  and modern web technologies. Dedicated to
            building high-performance, responsive web applications with clean,
            scalable
          </p>

          {/* Links */}
          <Link
            href={"/"}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mr-4  "
          >
            HIRE ME
          </Link>

          <Link
            href={"/"}
            className=" inline-block sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white "
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>

        <div className="col-span-1 sm:col-span-4 flex justify-center sm:justify-end">
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
