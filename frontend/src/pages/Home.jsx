import React, { useContext, useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../../url";
import Loader from "../components/Loader";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/User";

const Home = () => {
  const { search } = useLocation();
  const { user } = useContext(UserContext);
  // console.log(user);
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [search]);

  const fetchPost = async () => {
    try {
      setLoader(true);
      const res = await axios.get(URL + "/api/posts/" + search);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-[0.55rem] selection:text-blue-700 md:px-[185px] min-h-[80vh]">
        {loader ? (
          <div className="flex justify-center h-[40vh] items-center">
            <Loader />
          </div>
        ) : !noResult ? (
          posts.map((post) => (
            <Link to={user ? `posts/post/${post._id}` : "/login"}>
              <HomePosts key={post._id} post={post} />
            </Link>
          ))
        ) : (
          <h3 className="text-center text-[#36B535] md:text-2xl font-bold mt-16">
            No Post Availaible
          </h3>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
