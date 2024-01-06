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
  return location === "/signin" ? (
    <>{children}</>
  ) : (
    <>
      <div className="pb-20 flex h-screen overflow-hidden justify-start relative md:p-2 lg:p-3">
        <Sidebar />
        <div className="w-full relative pb-4">
          <Navbar />
          <div className="w-full h-full overflow-y-scroll no-scrollbar px-4 md:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
