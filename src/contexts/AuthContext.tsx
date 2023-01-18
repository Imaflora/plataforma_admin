import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { User, AuthDataResponse } from '../utils/types';
import ROLES from '../utils/roles';

interface AuthContextType {
  user: User | null;
  profile?: ROLES;
  signIn: (data: AuthDataResponse) => void;
  logOut: () => void;
  cleanState: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getUser = localStorage.getItem('@user:admin');
  const [profile, setProfile] = useState<ROLES>();
  const [user, setUser] = useState<User | null>(
    (getUser && JSON.parse(getUser)) || null
  );

  function cleanState(): void {
    setUser(null);
    localStorage.clear();
    return;
  }

  function signIn({ token, user }: AuthDataResponse): void {
    cleanState();
    setUser(user);
    localStorage.setItem('@token:admin', token);
    localStorage.setItem('@user:admin', JSON.stringify(user));
    navigate('/dashboard');
    return;
  }

  function logOut(): void {
    cleanState();
    navigate('/');
    return;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        signIn,
        logOut,
        cleanState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
