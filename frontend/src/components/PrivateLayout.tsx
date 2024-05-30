import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../auth";

interface IPrivateRoute {
  children: ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={"/auth/login"} />;
  }
  return <>{children}</>;
};

export const PrivateLayout: React.FC = () => {
  return (
    <div className="flex">
      <PrivateRoute>
        <div className="min-h-screen flex flex-row flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
          <div className="w-full overflow-x-hidden">
            <Outlet />
          </div>
        </div>
      </PrivateRoute>
    </div>
  );
};
