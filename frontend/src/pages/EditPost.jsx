import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { URL } from "../../url";
import { UserContext } from "../context/User";

const EditPost = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const postId = useParams().id;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/" + postId);
      // console.log(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setFile(res.data.photo);
      setCats(res.data.categories);
      // console.log(setTitle);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;
      // console.log(data)
      //img upload
      try {
        const imgUpload = await axios.post(URL + "/api/upload", data);
        // console.log(imgUpload.data)
      } catch (err) {
        console.log(err);
      }
    }
    //post upload

    try {
      const res = await axios.put(URL + "/api/posts/" + postId, post, {
        withCredentials: true,
      });
      navigate("/posts/post/" + res.data._id);
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i);
    setCats(updatedCats);
  };

  const addCategory = () => {
    let updatedCats = [...cats];

    updatedCats.push(cat);

    setCat("");
    setCats(updatedCats);
  };

  return (
    <div>
      <Navbar />
      <div className="selection:text-blue-600 px-4 md:px-[200px] mt-8 min-h-[82vh] ">
        <h1 className="font-bold md:text-2xl text-xl mt-8">Update a Post</h1>
        <form className="w-full flex flex-col gap-4 md:gap-0 space-x-0 md:space-y-8 mt-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="px-4 py-2 outline-none bg-[#111111] rounded-md"
            placeholder="Title"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className=" file:bg-[#1e1e1e] py-2 file:px-4 hover:transition-all text-xs md:text-sm hover:border-transparent  file:border-green-500  file:outline-none file:hover:bg-[#36B535] transition-colors cursor-pointer file:text-white file:rounded-lg"
          />
          <div className="flex flex-col ">
            <div className="flex items-center space-x-2 md:space-x-2 ">
              <input
                type="text"
                onChange={(e) => setCat(e.target.value)}
                value={cat}
                className=" px-4 py-2 outline-none rounded-md bg-[#111111] "
                placeholder="Enter Post Category"
              />
              <div
                onClick={addCategory}
                className="bg-white text-[#111111] hover:bg-[#36B535] transition-colors hover:text-white px-4 py-2 rounded-md font-semibold cursor-pointer hover:font-extralight hover:tracking-wider"
              >
                Add
              </div>
            </div>
            <div className="flex items-center  px-0 mt-3 p-3 overflow-auto overflow-y-scroll no-scrollbar ">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4 bg-[#131313] px-2 py-1 rounded-md "
                >
                  <p className="text-xs md:text-base">{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-black bg-white rounded-full cursor-pointer p-1 text-sm hover:bg-[#36B535] transition-colors hover:tracking-wider hover:transition-all"
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            rows={15}
            cols={30}
            placeholder="Enter Post Description"
            className="px-4 py-2 outline-none w-full bg-[#111111] rounded-md"
          />
          <button
            onClick={handleUpdate}
            className=" w-full md:w-[20%] mx-auto text-[#111111] self-center font-semibold px-4 py-2 rounded-md bg-white text-lg md:text-xl hover:bg-[#36B535] transition-colors hover:text-white hover:tracking-wider hover:transition-all hover:font-extralight"
          >
            Update
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditPost;
