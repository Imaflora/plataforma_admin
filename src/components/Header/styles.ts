import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavTitle = styled.a`
  margin-right: 22px;
  text-transform: uppercase;
  color: white;
  font-family: var(--title-font-family);
  font-weight: 600;
`;

export const ImafloraLogo = styled.img`
  height: 33.02px;
`;

export const UserButton = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 25px;
  border: 1px solid white;
  cursor: pointer;
`;
