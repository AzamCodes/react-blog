import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "./components/Comment";
import { useNavigate, useParams } from "react-router-dom";
import { URL, IF } from "../url";
import { UserContext } from "./context/User";
import Loader from "./components/Loader";
import axios from "axios";

const PostDetails = () => {
  const postId = useParams().id;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const { user } = useContext(UserContext);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + postId);
      setPost(res.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(URL + "/api/posts/" + postId, {
        withCredentials: true,
      });
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPostComments = async () => {
    try {
      const res = await axios.get(URL + "/api/comments/post/" + postId);
      // console.log(comments);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostComments();
  }, [postId]);

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        URL + "/api/comments/create",
        {
          comment: comment,
          author: user.username,
          postId: postId,
          userId: user._id,
        },
        { withCredentials: true }
      );

      // setComment("");
      // fetchPostComments();
      // window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      {loader ? (
        <div className="flex items-center justify-center h-[80vh] w-full">
          <Loader />
        </div>
      ) : (
        <div className="px-4 md:px-[200px] mt-8 bg-black">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              {post.title}
            </h1>
            {user?._id === post.userId && (
              <div className="flex items-center justify-center space-x-2">
                <p
                  className="cursor-pointer hover:text-[#36B535] transition-colors"
                  onClick={() => navigate("/edit/" + postId)}
                >
                  <BiEdit size={20} />
                </p>
                <p
                  className="cursor-pointer hover:text-red-500 transition-colors"
                  onClick={handleDeletePost}
                >
                  <MdDelete size={20} />
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center  justify-between mt-2 md:mt-4">
            <p className="text-sm text-green-500 tracking-wide">
              @{post.username}
            </p>
            <div className="flex space-x-2 text-sm text-gray-400">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img
            src={IF + post.photo}
            className="w-full mx-auto mt-8 rounded-xl"
          />
          <p className="mt-3 text-base md:text-lg">{post.desc}</p>
          <div className=" flex items-center mt-8 space-x-2 ">
            <p className="text-sm font-semibold">Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              {post.categories?.map((c, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-md font-medium tracking-wide px-2 py-1 text-xs"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-4 ">
            <h3 className="mt-5 mb-4 font-semibold">Comments:</h3>

            {comments?.map((c) => (
              <Comment key={c._id} c={c} post={post} />
            ))}
          </div>
          {/* Write a Comment */}
          <div className="flex w-full flex-col md:gap-2  md:flex-row">
            <input
              onChange={(e) => setComment(e.target.value)}
              type="text"
              className="md:w-[80%] bg-transparent ring-1 ring-slate-500 outline-none mt-3 px-2 py-2 md:px-3 rounded-md md:rounded-xl md:py-3  md:mt-4"
              placeholder="Enter Comment"
            />
            <button
              onClick={postComment}
              className="bg-gray-100 hover:bg-slate-300 duration-150 ease-in text-base md:text-xl tracking-wider  text-black font-semibold px-2 py-2 md:rounded-xl md:px-4 md:py-2 md:w-[20%] rounded-md mt-4 md:mt-4"
            >
              Add Comment
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PostDetails;
