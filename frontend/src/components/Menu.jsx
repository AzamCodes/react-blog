import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/User";
import axios from "axios";
import { URL } from "../../url";

const Menu = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await axios.get(URL + "/api/auth/logout", {
      withCredentials: true,
    });
    // console.log(res);
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="bg-[#111111] w-[200px] z-10 flex flex-col items-start absolute top-14 right-4 md:right-8 rounded-md p-4 space-y-4">
      {!user && (
        <h3 className="text-white text-sm md:text-lg hover:text-[#36B535] cursor-pointer">
          <Link to="/login">Login</Link>
        </h3>
      )}
      {!user && (
        <h3 className="text-white text-sm md:text-lg hover:text-[#36B535] cursor-pointer">
          <Link to="/register">Register</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm md:text-lg hover:text-[#36B535] cursor-pointer">
          <Link to={"/profile/" + user._id}>Profile</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm md:text-lg hover:text-[#36B535] cursor-pointer">
          <Link to="/create">Write</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm md:text-lg hover:text-[#36B535] cursor-pointer">
          <Link to={"/myblogs/" + user._id}>My blogs</Link>
        </h3>
      )}
      {user && (
        <h3
          onClick={handleLogout}
          className="text-white text-sm md:text-lg hover:text-[#36B535] cursor-pointer"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
