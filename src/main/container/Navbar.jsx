import { UserAuth } from "../context/AuthContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdWavingHand } from "react-icons/md";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [userName, setUserName] = useState('')

  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setUserName(user?.displayName.split(' ')[0])
  },[user])
  

  return (
    <>
      <div className="flex items-center justify-end w-full p-2">
        <div className="inline-flex items-center capitalize p-3">
          {userName && (
            <>
              <span>Hello {userName}</span>
              <span className="ml-2">
                <MdWavingHand size={25} color="#ffff00"/>
              </span>
            </>
          )}
        </div>
        <div className="inline-flex">
          {userName && (
            <button
              className="inline-flex items-center px-4 py-2 transition-all duration-300 capitalize text-primary bg-white hover:text-white hover:bg-primary hover:border border-primary rounded-md ml-auto"
              onClick={handleLogOut}
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
