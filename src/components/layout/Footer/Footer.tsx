import React from 'react';
import './Footer.css';
import { Container } from '../../ui/Container/Container';
import { Text } from '../../ui/Text/Text';
import { Logo } from '../../ui/Logo/Logo';
import { icons } from '../../../lib/icons';
import { footerNav } from '../../../constants/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footerGrid">
          
          <div className="footerBrand">
            <a href="#" aria-label="Página Inicial" className="footerLogoLink">
              <Logo />
            </a>
            
            <div className="footerDescription">
              <Text>{footerNav.description}</Text>
            </div>
            
            <div className="footerSocial">
              <a href="#" className="socialLink" aria-label="Twitter">
                <icons.message size={20} />
              </a>
              <a href="#" className="socialLink" aria-label="LinkedIn">
                <icons.users size={20} />
              </a>
            </div>
          </div>

          {footerNav.columns.map((column, index) => (
            <div key={index} className="footerColumn">
              <span className="footerColumnTitle">{column.title}</span>
              <ul className="footerLinks">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="footerLink">
                      <Text>{link.label}</Text>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        <div className="footerBottom">
          <div className="footerCopyright">
            <Text>© {currentYear} Labot. Todos os direitos reservados.</Text>
          </div>
          
          <a href="#" className="footerStatus">
            <span className="statusDot" />
            <div className="footerStatusText">
              <Text>Todos os sistemas operacionais</Text>
            </div>
          </a>
        </div>
      </Container>
    </footer>
  );
};