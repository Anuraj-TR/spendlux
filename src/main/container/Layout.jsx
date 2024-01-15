import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  const location = useLocation().pathname;
  return location === "/signin" ? (
    <>{children}</>
  ) : (
    <>
      <div className="pb-20 flex h-screen overflow-hidden justify-start relative md:p-2 lg:p-3">
        <Sidebar />
        <div className="w-full relative pb-4">
          <Navbar />
          <div className="w-full h-full overflow-y-scroll no-scrollbar px-3 md:px-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
