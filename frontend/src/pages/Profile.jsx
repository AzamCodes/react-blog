import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfilePost from "./ProfilePost";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../../url";
import { UserContext } from "../context/User";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const param = useParams().id;
  const [posts, setPosts] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updated, setUpdated] = useState(false);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const res = await axios.get(URL + "/api/users/" + user._id);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(user);

  useEffect(() => {
    fetchProfile();
  }, [param]);

  const fetchUserPost = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id);
      console.log(res.data);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUserPost();
  }, [param]);

  const handleUserUpdate = async () => {
    setUpdated(false);

    try {
      const res = await axios.put(
        URL + "/api/users/" + user._id,
        { username, email, password },
        { withCredentials: true }
      );
      setUpdated(true);

      console.log(res.data);
    } catch (err) {
      console.log(err);
      setUpdated(false);
    }
  };

  const handleUserdelete = async () => {
    try {
      await axios.delete(URL + "/api/users/" + user._id, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="selection:text-blue-600 px-4 md:px-[100px] md:gap-5 gap-6 mt-8 flex md:flex-row flex-col-reverse">
        <div className=" flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl md:text-3xl font-bold mb-0 md:mb-2">
            Your Posts:
          </h1>
          {posts?.map((p) => (
            <ProfilePost key={p._id} p={p} />
          ))}
        </div>
        <div className="md:w-[30%] w-full ">
          <div className="md:sticky md:top-16 flex flex-col  md:space-y-4 space-y-3">
            <h1 className="text-xl md:text-2xl font-bold mb-4">Profile</h1>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              className="px-4 py-2  outline-none bg-[#1e1e1e] text-white rounded-md"
              placeholder="Your Username"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="px-4 py-2  outline-none bg-[#1e1e1e] text-white rounded-md"
              placeholder="Your Email"
            />
            {/* <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="px-4 py-2  outline-none bg-[#1e1e1e] text-white rounded-md"
              placeholder="Your Password"
            /> */}
            <div className="flex items-center space-x-4 mt-8"></div>
            <button
              onClick={handleUserUpdate}
              className="bg-transparent ease-out transition-150 hover:tracking-widest hover:ease-in text-[#36B535]  ring-1 ring-[#36B535] font-semibold px-4 py-2 hover:bg-[#36B535] hover:text-white  hover:font-extralight hover:right-0 rounded-md"
            >
              Update
            </button>
            <button
              onClick={handleUserdelete}
              className="bg-black ring-1 ease-out transition-150 hover:ease-in ring-red-500 text-red-500 font-semibold px-4 py-2 hover:bg-red-700 hover:text-white hover:tracking-wider rounded-md"
            >
              Delete
            </button>
          </div>
          {updated && (
            <h3 className="mt-4 text-green-500 text-sm text-center">
              User has been updated successfull!
            </h3>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
