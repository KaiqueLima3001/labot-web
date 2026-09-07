import "./HowItWorks.css";

import { howItWorks } from "@/constants/howItWorks";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function HowItWorks() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Como funciona"
          title="Automações em apenas três etapas"
          description="Do gatilho até a execução, tudo acontece de forma simples e visual."
        />

        <div className="how-grid">

          {howItWorks.map((item) => {

            const Icon = item.icon;

            return (

              <Card
                key={item.step}
                className="how-card"
              >

                <span className="how-card__step">
                  {item.step}
                </span>

                <Icon
                  className="how-card__icon"
                  size={30}
                />

                <Heading
                  as="h3"
                  size="xl"
                >
                  {item.title}
                </Heading>

                <Text variant="secondary">
                  {item.description}
                </Text>

              </Card>

            );

          })}

        </div>

      </Container>

    </Section>
  );
}