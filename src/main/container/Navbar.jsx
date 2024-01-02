import { UserAuth } from "../context/AuthContext";
import { RiLogoutCircleRLine } from "react-icons/ri";

export const Navbar = () => {
  const { user, logOut } = UserAuth();
  
  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
      <div className="flex items-center justify-between w-full p-2">
        <div className="w-2/3  p-3">
          {user && `Hellow ${user?.displayName}`}
        </div>
        <div className="flex-1 flex">
          {user?.displayName && (
            <button
              className="inline-flex items-center px-4 py-2 transition-all duration-300 capitalize text-primary bg-white hover:text-white hover:bg-primary hover:border border-primary rounded-md ml-auto"
              onClick={handleLogOut}
            >
              <span className="hidden md:inline-block md:mr-2">logout</span>
              <span><RiLogoutCircleRLine /></span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
