import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  padding: 0 24px;
  background: #024669;
  top: 0;
  width: 100vp;
  height: 60px;
`;

export const MenuContainer = styled.div`
  overflow-y: auto;
  background: #024669;
  width: 20%;
  min-width: 240px;
  max-width: 280px;
  height: calc(100vh - 60px);
`;

export const ChildrenContainer = styled.main`
  padding: 30px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
