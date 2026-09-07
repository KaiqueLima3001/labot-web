import React from 'react';
import { motion, type Variants } from 'framer-motion';
import './Cases.css';
import { Section } from '../../ui/Section/Section';
import { Container } from '../../ui/Container/Container';
import { SectionHeader } from '../../shared/SectionHeader/SectionHeader';
import { Text } from '../../ui/Text/Text';
import { Heading } from '../../ui/Heading/Heading';
import { icons } from '../../../lib/icons';
import { testimonialsConstants } from '../../../constants/testimonials';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Atraso encadeado entre os cards
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

export const Cases: React.FC = () => {
  return (
    <Section className="casesSection" id="cases">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title={testimonialsConstants.title}
            description={testimonialsConstants.description}
            align="center"
          />
        </motion.div>

        <motion.div
          className="casesGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonialsConstants.items.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="caseCard">
              <div>
                <div className="starsContainer">
                  {/* Renderiza 5 estrelas baseadas no rating do constant */}
                  {[...Array(item.rating)].map((_, i) => (
                    <icons.star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <Text style={{ 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 'var(--line-height-relaxed)' 
                }}>
                  "{item.content}"
                </Text>
              </div>

              <div className="caseFooter">
                <div className="caseAuthorInfo">
                  <Heading style={{ fontSize: 'var(--text-base)' }}>
                    {item.author}
                  </Heading>
                  <Text style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                    {item.role}, {item.company}
                  </Text>
                </div>

                <div className="caseMetric">
                  <div className="metricValue">{item.metric}</div>
                  <div className="metricLabel">{item.metricLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};