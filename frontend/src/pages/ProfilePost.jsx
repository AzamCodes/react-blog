import React from "react";
import { IF } from "../../url";

const ProfilePost = ({ p }) => {
  return (
    <div className="w-full flex mt-8 space-x-2 ">
      {/* left */}
      <div
        iv
        className="w-[45%] selection:text-blue-600 md:w-[40%] h-[200px] flex justify-center items-center"
      >
        <img
          src={IF + p.photo}
          alt=""
          className="h-full w-full object-center rounded-xl object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[55%] md:w-[60%]">
        <h1 className="text-base font-bold md:mb-2 mb-1 md:text-2xl">
          {p.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p className="text-gray-400 text-xs md:text-sm">@{p.username}</p>
          <div className="text-gray-500 flex space-x-2 text-xs md:text-sm">
            {/* <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p> */}
            <p>{new Date(p.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(p.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {p.desc.slice(0, 145) + " ...Read More"}
        </p>
      </div>
    </div>
  );
};

export default ProfilePost;
