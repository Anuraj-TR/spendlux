import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdWavingHand } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { user, logOut } = useAuth();
  
  return (
    <>
      <div className="flex items-center justify-end w-full p-2">
        <div className="inline-flex items-center capitalize p-3">
          {user && (
            <>
              <span>Hello {user.firstName}</span>
              <span className="ml-2">
                <MdWavingHand size={25} color="#ffff00"/>
              </span>
            </>
          )}
        </div>
        <div className="inline-flex">
          {user && (
            <button
              className="inline-flex items-center px-4 py-2 transition-all duration-300 capitalize text-primary bg-white hover:text-white hover:bg-primary hover:border border-primary rounded-md ml-auto"
              onClick={logOut}
            >
              <span className="hidden md:inline-block md:mr-2">logout</span>
              <span>
                <RiLogoutCircleRLine />
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
