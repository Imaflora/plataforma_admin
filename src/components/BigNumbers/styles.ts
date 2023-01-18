import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  width: 25%;
  height: 130px;
  border-radius: 0 24px;
  text-align: center;
  display: grid;
  align-items: center;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 1px 2px -2px rgba(0, 0, 0, 0.15);
`;

export const ChildrenContainer = styled.p`
  margin-top: 20px;
  font-family: var(--title-font-family);
  font-size: 28px;
  font-weight: 700;
  color: #404040;
`;

export const TitleContainer = styled.div`
  font-family: var(--title-font-family);
  font-size: 20px;
  color: #90c359;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SubtitleContainer = styled.p`
  font-size: 12px;
  color: #404040;
  font-weight: 600;
  margin-bottom: -7px;
  text-transform: none;
`;
