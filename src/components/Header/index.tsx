import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link key="0" to="/">
          Listagem
        </Link>
        <Link key="1" to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
