import { useContext } from "react";
import { AuthContext } from "../main/context/AuthContext";

export const useAuth = () => {
  return useContext(AuthContext);
}