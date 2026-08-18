import { profile } from "@/app/constants/resume";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-line text-xs text-subtle">
      <Container className="py-8 text-center">
        &copy; {new Date().getFullYear()} {profile.first} {profile.last}
      </Container>
    </footer>
  );
}
