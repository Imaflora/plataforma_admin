import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, IconContainer, TitleContainer } from './styles';

interface QuickAccessProps {
  icon: ReactNode;
  title: string;
  path: string;
}

function QuickAccess({ icon, title, path }: QuickAccessProps) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`${path}`)}>
      <IconContainer>{icon}</IconContainer>
      <TitleContainer>{title}</TitleContainer>
    </Card>
  );
}

export default QuickAccess;
