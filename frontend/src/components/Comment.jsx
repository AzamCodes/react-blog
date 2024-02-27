// import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { URL } from "../../url";
import { useContext } from "react";
import { UserContext } from "../context/User";

const Comment = ({ c, post }) => {
  const { user } = useContext(UserContext);

  const deleteComment = async (id) => {
    try {
      await axios.delete(URL + "/api/comments/" + id, {
        withCredentials: true,
      });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-2 mb-2 py-2 bg-[#111111]  rounded-lg  ">
      <div className="flex items-center justify-between  ">
        <h3 className="font-bold text-gray-300">@{c.author}</h3>
        <div className="flex justify-center text-gray-400 text-xs items-center space-x-2">
          <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
          {user?._id === c?.userId ? (
            <div className="flex items-cente cursor-pointer justify-center space-x-1">
              <p
                className="cursor-pointer align-middle hover:text-red-500 transition-all"
                onClick={() => deleteComment(c._id)}
              >
                <MdDelete size={16} />
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <p className="px-2 mt-1 whitespace-normal">{c.comment}</p>
    </div>
  );
};

export default Comment;
