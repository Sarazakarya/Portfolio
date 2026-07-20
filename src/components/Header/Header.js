"use client";
import { Links } from "@/lib/Constant/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <div className="flex gap-8 items-center">
      {Links.map((ele, index) => {
        const isHome = ele.href === "/";
        const active = isHome && path === "/";

        return (
          <Link
            href={ele.href}
            key={index}
            className={`group relative font-semibold text-lg transition-colors duration-300 ${
              active
                ? "text-background"
                : "text-muted-foreground hover:text-background"
            }`}
          >
            {ele.name}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                active ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
