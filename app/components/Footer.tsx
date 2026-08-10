import { profile } from "@/app/constants/resume";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 text-center text-xs text-subtle sm:px-10">
      &copy; {new Date().getFullYear()} {profile.first} {profile.last}
    </footer>
  );
}
