import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../../url";
import HomePosts from "../components/HomePosts";
import { UserContext } from "../context/User";

const MyBlogs = () => {
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
      const res = await axios.get(URL + "/api/posts/user/" + user._id);
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
    <div>
      <Navbar />
      <div className="selection:text-blue-600 px-4 md:px-[200px] min-h-[80vh]">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResult ? (
          posts.map((post) => (
            <>
              <Link to={user ? `/posts/post/${post._id}` : "/login"}>
                <HomePosts key={post._id} post={post} />
              </Link>
            </>
          ))
        ) : (
          <h3 className="text-center md:text-2xl text-[#36B535] font-bold mt-16">
            No Posts available
          </h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogs;
