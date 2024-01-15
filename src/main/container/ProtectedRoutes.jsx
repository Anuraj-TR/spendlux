import { Navigate,Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"


export const ProtectedRoutes = () => {
  const { user } = useAuth();

  return (!user ? <Navigate to={'/signin'} /> : <Outlet /> )
}
