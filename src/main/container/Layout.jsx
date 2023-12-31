import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  const location = useLocation().pathname;

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
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </>
    )
};
