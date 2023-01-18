import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { NavItemContainer, IconContainer, Title } from './styles';

interface NavItemProps {
  icon: ReactNode;
  title: string;
  path: string;
  isActive: boolean;
}

function NavItem({ icon, title, path, isActive }: NavItemProps) {
  return (
    <Link to={path}>
      <NavItemContainer isActive={isActive}>
        <IconContainer>{icon}</IconContainer>
        <Title>{title}</Title>
      </NavItemContainer>
    </Link>
  );
}

export default NavItem;
