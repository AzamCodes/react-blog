import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { URL } from "../../url";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
      console.log(res.data);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="selection:text-blue-600 flex items-center justify-between px-2 md:px-6 xl:px-[200px] py-4">
        <h1 className=" text-base md:text-lg xl:text-xl text-green-500 font-bold">
          <Link to={"/"}>BLOG VERSE</Link>
        </h1>
        <h3 className="bg-[#1e1e1e] rounded-full py-2 px-6 hover:bg-[#36B535] transition-colors">
          <Link to={"/login"}>Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center bg-zinc-950 h-[70vh]">
        <div className="flex flex-col justify-center space-y-4 w-[80%] xl:w-[25%]">
          <h1 className="text-xl md:text-2xl font-bold text-left ">
            Create an Account
          </h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-[0.65rem] py-[0.75rem] text-base md:text-lg md:px-2 border-2 bg-transparent border-slate-50 outline-0 rounded-md"
            type="text"
            placeholder="Enter your Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-[0.65rem] py-[0.75rem] text-base md:text-lg md:px-2 border-2 bg-transparent border-slate-50 outline-0 rounded-md"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-[0.65rem] py-[0.75rem] text-base md:text-lg md:px-2 md:py-4 border-2 bg-transparent border-slate-50 outline-0 rounded-md"
            type="password"
            placeholder="Enter your Password"
          />
          <button
            onClick={handleRegister}
            className="bg-black/55  text-white w-full md:py-3.5 py-2 text-lg md:text-2xl tracking-wide font-semibold rounded-md hover:bg-[#fff] hover:font-light  transition duration-150 ease-out hover:ease-in hover:scale-100 hover:tracking-wider hover:text-black"
          >
            Register
          </button>
          {error && (
            <h3 className="text-red-600 text-sm self-center">
              Something Went Wrong!
            </h3>
          )}
          <div className="flex justify-center items-center space-x-2 md:space-x-4">
            <p className="text-gray-100 text-sm">Already have an account?</p>
            <p className="text-gray-500 text-sm hover:text-white">
              <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
