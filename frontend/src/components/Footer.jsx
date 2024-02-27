import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-10 w-full bg-black/80 px-8 md:px-[300px] selection:text-green-500 flex   md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-6 ">
        <div className="flex gap-1 flex-col cursor-pointer text-white">
          <p>
            <Link
              to={
                "https://www.instagram.com/_azam.shaikh_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
            >
              Instagram
            </Link>
          </p>
          <p>
            <Link
              to={
                "https://www.linkedin.com/in/azam-shaikh-51317b263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
            >
              LinkedIn
            </Link>
          </p>
          <p>
            <Link to={"https://x.com/AzamCodes?s=09"}>Twitter</Link>
          </p>
        </div>

        <div className="flex flex-col gap-1 text-white">
          <p>
            <Link to={"/privacy"}>Privacy Policy</Link>
          </p>
          <p>
            <Link to={"/about"}>About Us</Link>
          </p>
          <p>
            <Link to={"/terms"}>Terms & Conditions</Link>
          </p>
        </div>

        <div className="flex flex-col gap-1 text-white">
          <p>
            <Link to={"/"}>Recent Posts</Link>
          </p>
          <p>Let's Chat</p>
          <p>
            <span className="rounded-md text-xs selection:text-yellow-400  ring-1 ring-gray-400 px-1 mr-1">
              mail
            </span>
            azamcodes@gmail.com
          </p>
        </div>
      </div>
      <p className="py-[1.5rem] selection:stroke-lime-500 w-full text-center   bg-black/20 text-sm">
        All rights reserved{" "}
        <span className="text-[#36B535] font-extrabold">BLOG VERSE</span> @
        {new Date().getFullYear()}
      </p>
    </>
  );
};

export default Footer;
