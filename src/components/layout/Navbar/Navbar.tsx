import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { Text } from '../../ui/Text/Text';
import { Logo } from '../../ui/Logo/Logo';
import { icons } from '../../../lib/icons';
import { navigation } from '../../../constants/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Container>
          <div className="navbarContainer">
            
            {/* Reutilizando seu componente Logo oficial */}
            <a href="#" className="navbarBrand" onClick={closeMenu}>
              <Logo />
            </a>

            <nav className="navbarLinks">
              {navigation.map((item, index) => (
                <a key={index} href={item.href} className="navLink">
                  {/* Reutilizando Text para manter a escala tipográfica */}
                  <Text>{item.label}</Text>
                </a>
              ))}
            </nav>

            <div className="navbarActions">
              <Button variant="outline">Entrar</Button>
              <Button variant="primary">Começar grátis</Button>
            </div>

            <button 
              className="mobileMenuToggle" 
              onClick={toggleMenu}
              aria-label="Alternar menu"
            >
              {isMobileMenuOpen ? <icons.close size={28} /> : <icons.menu size={28} />}
            </button>
            
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobileMenuDrawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobileLinks">
              {navigation.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="mobileLink"
                  onClick={closeMenu}
                >
                  {/* Mantendo padronização tipográfica no menu mobile */}
                  <Text style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-medium)' }}>
                    {item.label}
                  </Text>
                </a>
              ))}
            </nav>
            <div className="mobileActions">
              <Button variant="outline" fullWidth onClick={closeMenu}>Entrar</Button>
              <Button variant="primary" fullWidth onClick={closeMenu}>Começar grátis</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};