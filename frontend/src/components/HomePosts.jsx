import React from "react";
import { IF } from "../../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex mt-6   space-x-2 md:space-x-4">
      {/* left */}
      <div
        iv
        className="w-[45%] h-[190px]  md:w-[40%] md:h-[300px]  flex justify-center items-center"
      >
        <img
          src={IF + post.photo}
          alt=""
          className="h-full w-full rounded-lg object-center object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[55%] md:w-[59%]">
        <h1 className=" text-base font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-xs md:text-sm font-semibold  items-center justify-between md:mb-4">
          <p className="text-gray-300 text-[0.65rem]">@{post.username}</p>
          <div className="flex space-x-2 text-[0.6rem] md:text-sm text-gray-500">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-xs md:text-lg text-white/90">
          {post.desc.slice(0, 125) + " ...Read More"}
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
