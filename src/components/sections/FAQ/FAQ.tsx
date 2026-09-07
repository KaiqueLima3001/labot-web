import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';
import { Section } from '../../ui/Section/Section';
import { Container } from '../../ui/Container/Container';
import { SectionHeader } from '../../shared/SectionHeader/SectionHeader';
import { icons } from '../../../lib/icons';
import { faqConstants } from '../../../constants/faq';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <Section className="faqSection" id="faq">
      <Container>
        <SectionHeader
          title={faqConstants.title}
          description={faqConstants.description}
          align="center"
        />

        <div className="faqContainer">
          {faqConstants.items.map((item) => {
            const isActive = openIndex === item.id;

            return (
              <div key={item.id} className={`faqItem ${isActive ? 'active' : ''}`}>
                <button 
                  className="faqQuestion"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isActive}
                >
                  <span>{item.question}</span>
                  <div className="faqIcon">
                    <icons.chevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faqAnswer">
                        <div className="faqAnswerContent">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};