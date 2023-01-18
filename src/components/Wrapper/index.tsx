import React from 'react';

import Header from '../Header';
import AsideMenu from '../AsideMenu';

import {
  ChildrenContainer,
  Container,
  ContentWrapper,
  HeaderContainer,
  MenuContainer,
} from './styles';

interface WrapperProps {
  dashboard?: boolean;
  children?: React.ReactNode;
}

function Wrapper({ children, dashboard = false }: WrapperProps) {
  if (dashboard) {
    return (
      <ContentWrapper>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <MenuContainer>
            <AsideMenu />
          </MenuContainer>
          <ChildrenContainer>{children}</ChildrenContainer>
        </Container>
      </ContentWrapper>
    );
  }

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <MenuContainer>
          <AsideMenu />
        </MenuContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </>
  );
}

export default Wrapper;
