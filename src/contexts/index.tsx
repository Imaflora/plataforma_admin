import React from 'react';
import { AuthProvider } from './AuthContext';

const Contexts = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default Contexts;
