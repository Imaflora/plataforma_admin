export interface User {
  name: string;
  photoURL?: string;
  email: string;
  id: string;
}

export interface AuthDataResponse {
  token: string;
  user: User;
  message: string;
}
