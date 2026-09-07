import "./Features.css";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Heading} from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { features } from "@/constants/features";

export function Features() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Recursos"
          title="Tudo o que você precisa para automatizar processos"
          description="Uma plataforma moderna para conectar sistemas, criar fluxos inteligentes e aumentar a produtividade da sua equipe."
        />

        <div className="features__grid">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <Card
                key={feature.title}
                variant="outlined"
                className="feature-card"
              >

                <Icon
                  className="feature-card__icon"
                  size={28}
                />

                <Heading
                  as="h3"
                  size="xl"
                >
                  {feature.title}
                </Heading>

                <Text variant="secondary">
                  {feature.description}
                </Text>

              </Card>

            );

          })}

        </div>

      </Container>

    </Section>
  );
}