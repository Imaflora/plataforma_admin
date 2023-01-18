import { ReactNode } from 'react';
import {
  Card,
  ChildrenContainer,
  SubtitleContainer,
  TitleContainer,
} from './styles';

interface BigNumbersProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

function BigNumbers({ title, subtitle, children }: BigNumbersProps) {
  return (
    <Card>
      <ChildrenContainer>{children}</ChildrenContainer>
      <TitleContainer>
        <SubtitleContainer>{subtitle}</SubtitleContainer>
        {title}
      </TitleContainer>
    </Card>
  );
}

export default BigNumbers;
