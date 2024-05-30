import { ReactNode } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
export interface IAuthContextProvider {
  children: ReactNode;
}
