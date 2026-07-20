"use client";
import { Links } from "@/lib/Constant/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const SideBar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="border border-background/20 p-2 "
        onClick={() => setOpen((pre) => !pre)}
      >
        {open ? (
          <IoMdClose className="text-background cursor-pointer" size={20} />
        ) : (
          <FiAlignJustify
            className="text-background cursor-pointer"
            size={20}
          />
        )}
      </button>

      {/* List */}
      <div
        className={`text-background z-60 fixed top-15 left-0 w-full border-b bg-foreground border-b-muted/20 p-3 hoverEffect
            ${
              open
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
      >
        <div className="flex flex-col p-5 justify-center items-center">
          {Links.map((ele, index) => {
            const active =
              path === ele.href ||
              (path.startsWith(ele.href) && ele.href !== "/");
            return (
              <Link
                href={ele.href}
                key={index}
                className={`font-bold text-xl md:text-2xl text-background mb-1 ${active ? "text-pink-300" : ""} `}
              >
                {ele.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
