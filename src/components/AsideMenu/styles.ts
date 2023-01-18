import styled from 'styled-components';

export const UserAvatarContainer = styled.section`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.img`
  border: 3px solid white;
  width: 150px;
  border-radius: 50%;
`;

export const UserInfoContainer = styled.section`
  height: 80px;
  text-align: center;
`;

export const UserName = styled.h1`
  font-family: var(--title-font-family);
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

export const UserRole = styled.h2`
  font-family: var(--title-font-family);
  font-size: 18px;
  font-weight: 400;
  color: #feaf00;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  margin: auto;
  display: flex;
  align-items: center;
  color: #ff7161;
  font-family: var(--title-font-family);
  font-size: 20px;
  font-weight: 400;
  margin-top: 40px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  margin-right: 10px;
`;
