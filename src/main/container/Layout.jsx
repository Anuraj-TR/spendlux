import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen overflow-hidden justify-start relative md:p-2 lg:p-3">
        <Sidebar />
        <div className="w-full relative">
          <Navbar />
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </>
  );
};
