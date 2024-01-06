import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { useAuth } from "../../hooks/useAuth";
import { LoadingPage } from "../pages/LoadingPage";

export const Layout = ({ children }) => {
  const location = useLocation().pathname;
  const { loading } = useAuth();

  if (loading === true) {
    return <LoadingPage />
  }
  return location === "/signin" ? 
    (
      <>
        {
          children
        }
      </>
    )
    : 
    (
      <>
        <div className="flex h-screen overflow-hidden justify-start relative md:p-2 lg:p-3">
          <Sidebar />
          <div className="w-full relative">
            <Navbar />
            <div className="w-full h-full min-h-[80vh] overflow-y-scroll">{children}</div>
          </div>
        </div>
      </>
    )
};
