import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import Menu from "./Menu";
import { UserContext } from "../context/User";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();
  const path = useLocation().pathname;

  // console.log(prompt);
  const showMenu = () => {
    setMenu(!menu);
  };
  const { user } = useContext(UserContext);
  // console.log(user);
  return (
    <div className="flex selection:text-green-500 items-center justify-between px-6 md:px-6 xl:px-[200px] py-[1.50rem]">
      <h1 className="text-green-500 text-base md:text-lg xl:text-xl font-extrabold">
        <Link to={"/"}>BLOG VERSE</Link>
      </h1>
      {path === "/" && (
        <div className="flex items-center justify-center space-x-0">
          <p className="flex items-center  gap-1 md:gap-2">
            <IoIosSearch
              className="cursor-pointer placeholder:text-green-500 hover:text-[#36B535]"
              size={20}
              onClick={() =>
                navigate(prompt ? "?search=" + prompt : navigate("/"))
              }
            />
            <input
              onChange={(e) => setPrompt(e.target.value)}
              className="outline-none focus:border-b-[1px] focus:border-b-[#36B535] text-sm md:text-base w-36 md:w-auto bg-black bg-opacity-5  py-[1.5px]   pl-1 pr-2 rounded-md"
              placeholder="Search a post"
              type="text"
            />
          </p>
        </div>
      )}
      <div className="hidden md:flex items-center cursor-pointer justify-center text-xl space-x-2 md:space-x-7">
        {user ? (
          <h3>
            <Link to={"/create"}>Create</Link>
          </h3>
        ) : (
          <h3 className="hover:bg-[#1e1e1e] py-2 px-6 hover:transition-colors hover:text-green-500 hover:rounded-lg">
            <Link to={"/login"}>Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu} className="cursor-pointer">
            <p className="cursor-pointer font-bold text-[#36B535] relative">
              <RiMenu4Line size={23} />
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3 className="bg-[#1e1e1e] rounded-full py-2 px-6 hover:bg-[#36B535] transition-colors">
            <Link to={"/register"}>Register</Link>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="text-lg md:hidden">
        <p>
          <RiMenu4Line className="cursor-pointer relative" size={23} />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
