import React from 'react';
import { motion } from 'framer-motion';
import './Integrations.css';
import { Section } from '../../ui/Section/Section';
import { Container } from '../../ui/Container/Container';
import { SectionHeader } from '../../shared/SectionHeader/SectionHeader';
import { Text } from '../../ui/Text/Text';
import { icons, type IconName } from '../../../lib/icons';
import { integrationsConstants } from '../../../constants/integrations';

interface IntegrationItem {
  id: string;
  name: string;
  logo: string; // Corrigido de 'icon' para 'logo', espelhando o seu arquivo constants
  enabled: boolean;
}

const getInfiniteArray = <T,>(arr: T[]): T[] => [
  ...arr, ...arr, ...arr, ...arr, ...arr, ...arr
];

export const Integrations: React.FC = () => {
  const half = Math.ceil(integrationsConstants.length / 2);
  const topRow = integrationsConstants.slice(0, half);
  const bottomRow = integrationsConstants.slice(half);

  const topRowInfinite = getInfiniteArray(topRow as IntegrationItem[]);
  const bottomRowInfinite = getInfiniteArray(bottomRow as IntegrationItem[]);

  // Função para renderizar o ícone baseado na string 'logo'
  const renderIcon = (logoName: string) => {
    // Usamos 'as IconName' para tranquilizar o TypeScript de que a string existe na nossa lista
    const IconComponent = icons[logoName as IconName] || icons.database;
    return <IconComponent size={24} />;
  };

  return (
    <Section className="integrationsSection" id="integrations">
      <div className="integrationGlow" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader 
            title="Conecte seu ecossistema"
            description="O Labot se integra nativamente com as ferramentas que você já utiliza, centralizando todo o seu fluxo de trabalho sem fricção."
            align="center"
          />
        </motion.div>

        <motion.div 
          className="marqueeWrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="marqueeTrack normal">
            {topRowInfinite.map((integration, index) => (
              <div key={`top-${index}`} className="integrationCard">
                <div className="integrationIcon">
                  {renderIcon(integration.logo)}
                </div>
                <div className="integrationName">
                  <Text>{integration.name}</Text>
                </div>
              </div>
            ))}
          </div>

          <div className="marqueeTrack reverse">
            {bottomRowInfinite.map((integration, index) => (
              <div key={`bottom-${index}`} className="integrationCard">
                <div className="integrationIcon">
                  {renderIcon(integration.logo)}
                </div>
                <div className="integrationName">
                  <Text>{integration.name}</Text>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};