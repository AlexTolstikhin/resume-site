import { navLinks, profile } from "@/app/constants/resume";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="text-sm font-semibold tracking-tight text-navy">
          {profile.first} {profile.last}
        </a>
        <nav className="flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b-2 border-navy pb-0.5 text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded bg-navy px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
