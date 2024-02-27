import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-5 md:px-12 mt-4 md:mt-8 selection:text-blue-500 mb-6  min-h-[70vh]">
        <h1 className="text-2xl selection:text-yellow-300 md:text-3xl font-bold tracking-wide mb-4 md:mb-5 text-[#36B535]">
          About Us
        </h1>
        <p className="text-gray-400 mb-4">
          Welcome to{" "}
          <span className="font-semibold text-white selection:text-green-500">
            BLOG VERSE
          </span>
          , where creativity finds its digital home.
        </p>
        <p className="text-gray-400 mb-4">
          {" "}
          At{" "}
          <span className="font-semibold text-white selection:text-green-500">
            BLOG VERSE
          </span>
          , we're more than just a platform – we're a community of passionate
          writers, thinkers, and enthusiasts who come together to share ideas,
          stories, and experiences. Whether you're a seasoned wordsmith or a
          budding blogger, our platform provides the perfect space for you to
          unleash your creativity and connect with like-minded individuals from
          around the globe.
        </p>
        <p className="text-gray-400 mb-4">
          {" "}
          Our user-friendly interface allows you to easily create and publish
          your own blogs, sharing your unique perspective with the world. But
          we're not just about publishing – we're about engaging. With our
          intuitive commenting system, you can join the conversation, share your
          thoughts, and connect with fellow bloggers on topics that matter to
          you.
        </p>
        <p className="text-gray-400 mb-4">
          {" "}
          Signing up with us is a breeze. Simply register for an account, and
          you'll unlock a world of possibilities. Once logged in, you have full
          control over your profile. Update your information, change your
          username or email, and manage your preferences with just a few clicks.
          Your profile is your digital identity, and we want to ensure you have
          the freedom to make it truly yours.
        </p>
        <p className="text-gray-400 mb-4">
          But we don't stop there. We understand that creativity is an evolving
          process, which is why we empower you to edit and update your blogs
          even after you've hit that publish button. Your voice matters, and we
          want to give you the tools to refine and improve your work as you see
          fit.
        </p>
        <p className="text-gray-400 mb-2">
          {" "}
          At{" "}
          <span className="font-semibold text-white selection:text-green-500">
            BLOG VERSE
          </span>
          , we're not just a platform – we're a community. Join us today and be
          a part of something truly special. Let your voice be heard, your ideas
          shared, and your creativity thrive. Welcome to the{" "}
          <span className="font-semibold text-white selection:text-green-500">
            BLOG VERSE
          </span>{" "}
          family.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
