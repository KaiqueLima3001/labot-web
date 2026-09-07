import React from 'react';
import './CTA.css';
import { Section } from '../../ui/Section/Section';
import { Container } from '../../ui/Container/Container';
import { Heading } from '../../ui/Heading/Heading';
import { Text } from '../../ui/Text/Text';
import { Button } from '../../ui/Button/Button';

export const CTA: React.FC = () => {
  return (
    <Section className="ctaSection">
      <Container>
        <div className="ctaWrapper">
          <div className="ctaGlow" />
          
          <div className="ctaContent">
            <Heading style={{ fontSize: 'var(--text-4xl)' }}>
              Pronto para transformar sua operação?
            </Heading>
            
            <Text style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}>
              Junte-se a empresas que já economizaram milhares de horas automatizando tarefas repetitivas com o Labot.
            </Text>

            <div className="ctaActions">
              <Button variant="primary">
                Começar gratuitamente
              </Button>
              <Button variant="outline">
                Falar com consultor
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};