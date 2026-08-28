import "./Hero.css";

import { Link } from "react-router-dom";

import { heroContent } from "@/content/hero";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { DashboardPreview } from "./DashboardPreview/DashboardPreview";

export function Hero() {
  return (
    <Section className="hero">
      <Container>
        <div className="hero__container">

          {/* Conteúdo */}

          <div className="hero__content">

            <Badge>
              {heroContent.badge}
            </Badge>

            <Heading
              as="h1"
              size="6xl"
            >
              {heroContent.title}
            </Heading>

            <Text
              size="lg"
              variant="secondary"
            >
              {heroContent.description}
            </Text>

            <div className="hero__actions">

              <Link
                to={heroContent.primaryButton.href}
              >
                <Button>
                  {heroContent.primaryButton.label}
                </Button>
              </Link>

              <a
                href={heroContent.secondaryButton.href}
              >
                <Button variant="outline">
                  {heroContent.secondaryButton.label}
                </Button>
              </a>

            </div>

            <div className="hero__stats">

              {heroContent.stats.map((item) => (
                <div
                  key={item.label}
                  className="hero__stat"
                >
                  <Heading
                    as="h3"
                    size="2xl"
                  >
                    {item.value}
                  </Heading>

                  <Text
                    size="sm"
                    variant="secondary"
                  >
                    {item.label}
                  </Text>

                </div>
              ))}

            </div>

          </div>

          {/* Preview */}

          <div className="hero__preview">
              <DashboardPreview />
          </div>

        </div>
      </Container>
    </Section>
  );
}