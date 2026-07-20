"use client"
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-foreground px-4 text-center">
      <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-8xl font-bold text-transparent md:text-9xl">
        404
      </h1>

      <h2 className="text-2xl font-bold text-background md:text-3xl">
        Page Not Found
      </h2>

      <Link
        href="/"
        className="mt-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-bold text-white transition-transform hover:scale-105"
      >
        <FaHome size={18} />
        Home
      </Link>
    </div>
  );
}
