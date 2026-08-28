import "./Navbar.css";

import { Link } from "react-router-dom";

import { navigation } from "@/content/navigation";

import { cn } from "@/utils/cn";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

import type { NavbarProps } from "./Navbar.types";

import { navbarVariants } from "./Navbar.styles";

export function Navbar({
  transparent = true,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "navbar",
        transparent
          ? navbarVariants.transparent
          : navbarVariants.solid
      )}
    >
      <Container>
        <div className="navbar__container">

          <Logo />

          <nav
            className="navbar__nav"
            aria-label="Navegação principal"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="navbar__link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">

            <Link to="/login">
              <Button variant="ghost">
                Entrar
              </Button>
            </Link>

            <Link to="/contato">
              <Button>
                Começar grátis
              </Button>
            </Link>

          </div>

        </div>
      </Container>
    </header>
  );
}