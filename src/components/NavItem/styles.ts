import styled from 'styled-components';

interface ActivePageProps {
  isActive: boolean;
}

export const NavItemContainer = styled.div<ActivePageProps>`
  margin: auto;
  width: 220px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 25px;
  background: ${({ isActive }) => (isActive ? '#90c359' : null)};

  &:hover {
    background: ${({ isActive }) => (!isActive ? '#90c3594b' : null)};
  }
`;

export const IconContainer = styled.svg`
  color: white;
  height: 35px;
  width: 20%;
  margin-right: 7px;
`;

export const Title = styled.h1`
  color: white;
  font-family: var(--title-font-family);
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;
