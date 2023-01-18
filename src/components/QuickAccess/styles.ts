import styled from 'styled-components';

export const Card = styled.div`
  background: #90c359;
  height: 130px;
  width: 70%;
  border-radius: 0 24px;
  padding: 10px 20px;
  margin: auto;
  cursor: pointer;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 1px 2px -2px rgba(0, 0, 0, 0.15);
`;

export const IconContainer = styled.svg`
  color: white;
  height: 40%;
  width: 25%;
`;

export const TitleContainer = styled.h1`
  color: white;
  font-family: var(--title-font-family);
  font-weight: 400;
  font-size: 18px;
  padding: 0 10px;
`;
