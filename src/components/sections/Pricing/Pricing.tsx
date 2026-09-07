import React from 'react';
import { motion, type Variants } from 'framer-motion';
import './Pricing.css';
import { Section } from '../../ui/Section/Section';
import { Container } from '../../ui/Container/Container';
import { SectionHeader } from '../../shared/SectionHeader/SectionHeader';
import { Text } from '../../ui/Text/Text';
import { Heading } from '../../ui/Heading/Heading';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';
import { icons } from '../../../lib/icons';
import { pricingConstants } from '../../../constants/pricing';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

export const Pricing: React.FC = () => {
  return (
    <Section className="pricingSection" id="pricing">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title={pricingConstants.title}
            description={pricingConstants.description}
            align="center"
          />
        </motion.div>

        <motion.div 
          className="pricingGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricingConstants.plans.map((plan) => (
            <motion.div 
              key={plan.id} 
              variants={itemVariants}
              className={`pricingCard ${plan.isPopular ? 'popular' : ''}`}
            >
              {plan.isPopular && (
                <div className="popularBadgeWrapper">
                  <Badge className="popularBadgeContent">Mais Escolhido</Badge>
                </div>
              )}

              <div className="pricingHeader">
                <Heading>{plan.name}</Heading>
                <div style={{ marginTop: 'var(--space-2)' }}>
                  <Text style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                    {plan.description}
                  </Text>
                </div>
                
                <div className="pricingPrice">
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 'bold' }}>
                    <Heading>{plan.price}</Heading>
                  </div>
                  <Text style={{ color: 'var(--color-text-secondary)' }}>
                    {plan.period}
                  </Text>
                </div>
              </div>

              <div className="pricingFeatures">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="featureItem">
                    <div className="featureIcon">
                      <icons.success size={18} />
                    </div>
                    <Text style={{ fontSize: 'var(--text-sm)' }}>
                      {feature}
                    </Text>
                  </div>
                ))}
              </div>

              <Button fullWidth>
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};