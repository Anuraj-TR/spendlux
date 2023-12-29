import { useNavigate } from "react-router-dom";
// react icons
import { FaHome } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0)

  const listItems = [
    {
      icon: <FaHome className="w-full" />,
      label: "Home",
      action: () => {
        navigate("/");
      },
    },
    {
      icon: <GrTransaction className="w-full" />,
      label: "Expense",
      action: () => {
        navigate("/expense");
      },
    },
    {
      type: "toggle",
    },
    {
      icon: <GoGraph className="w-full" />,
      label: "Budget",
      action: () => {
        navigate("/budget");
      },
    },
    {
      icon: <IoPersonSharp className="w-full" />,
      label: "Profile",
      action: () => {
        navigate("/profile");
      },
    },
  ];

  return (
    <>
      <div className="absolute bottom-0 left-0 w-full bg-white z-10 md:static md:w-1/5 lg:w-1/6 shadow-md md:mr-3 lg:mr-4 md:rounded-2xl md:bg-primary">
        <div className="w-full">
          <ul className="w-full flex items-center justify-between p-2 md:flex-col lg:p-4">
            {listItems.map((item, index) => {
              return (
                (!item.type && (
                  <li
                    className="w-1/5 md:w-full md:mb-2"
                    key={index}
                    onClick={() => {
                      item.action();
                      setActiveIndex(index)
                    }}
                  >
                    <div className={`w-full inline-flex flex-col items-center justify-center px-3 py-3 lg:flex-row lg:justify-start text-grey cursor-pointer md:text-white md:hover:bg-white md:rounded-2xl md:hover:text-primary md:transition-all md:duration-300 md:hover:transition-all md:hover:duration-300 ${activeIndex == index ? 'text-primary font-medium bg-white md:text-primary md:border md:border-primary md:border-solid md:hover:bg-white': ''}`}>
                      <div className="w-full flex mb-1 items-center justify-center md:w-8 md:h-8 lg:mb-0 lg:mr-2">
                        {item.icon}
                      </div>
                      <div className="text-xs md:text-lg text-center">
                        {item.label}
                      </div>
                    </div>
                  </li>
                )) || (
                  <li
                    className="min-w-14 min-h-14 border bg-slate-400 rounded-full md:hidden"
                    key={index}
                  ></li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
