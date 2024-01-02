import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const SignUpPage = () => {
  const { googleSignIn, user } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (user != null) {
      navigate('/')
    }  
  },[user])

  return (
    <>
      <div className="flex flex-col items-center justify-between h-screen bg-white lg:flex-row-reverse">
        <div className="w-full min-h-[300px] flex items-center justify-center lg:w-1/2">
          <img
            src={"/assets/images/signin-bg.jpg"}
            alt="signin background image"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full max-w-[500px] text-center p-3 flex-1 mx-auto">
          <h2 className="text-2xl font-medium text-primary capitalize mb-3 md:text-3xl md:mb-4 lg:text-5xl lg:mb-5">
            personal finance simplified
          </h2>
          <p className="text-base font-normal text-tertiary mb-3 md:text-lg md:mb-4 lg:mb-5">
            Spendlux make it easy to take controll of your money. Optimize your
            spending and grow your savings automatically.
          </p>
          <div className="flex w-full p-2">
            <button className="w-full max-w-[250px] px-4 py-2 bg-primary border border-primary rounded-md text-base font-medium text-white mx-auto" onClick={googleSignIn}>
              Start now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
