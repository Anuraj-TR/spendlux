import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logOut, googleSignIn } = UserAuth();
  
  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <div className="flex items-center justify-between w-full p-2">
        <div className="w-2/3  p-3">
          {
            user && `Hellow ${user?.displayName}`
          }
        </div>
        <div className="flex-1 flex">
          {user?.displayName ? (
            <button
              className="inline-block px-4 py-2 bg-primary border border-primary rounded-md ml-auto"
              onClick={handleLogOut}
            >
              logOut
            </button>
          ) : (
            <button
              className="inline-block px-4 py-2 bg-primary border border-primary rounded-md ml-auto"
              onClick={handleGoogleSignIn}
            >
              LogIn
            </button>
          )}
        </div>
      </div>
    </>
  );
};
