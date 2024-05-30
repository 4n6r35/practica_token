import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../auth";

interface IPublicRoute {
  children: ReactNode;
}

const PublicRoute: React.FC<IPublicRoute> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return <>{children}</>;
};

export const PublicLayout: React.FC = () => {
  return (
    <PublicRoute>
      <Outlet />
    </PublicRoute>
  );
};
