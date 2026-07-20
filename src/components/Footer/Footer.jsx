import { Links, socials } from "@/lib/Constant/Links";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-background/10 ">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sara Zakarya
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Front-End Developer
          </p>
        </div>

        <nav className="flex gap-6">
          {Links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-background font-bold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label ,targt}) => (
            <Link
              key={label}
              href={href}
              target={targt}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-foreground/10 py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sara Zakarya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
