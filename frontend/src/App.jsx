import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import { UserContextProvider } from "./context/User";
import MyBlogs from "./pages/MyBlogs";
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <UserContextProvider>
      <div className="bg-[#060606] text-[#fff] ">
        <Routes>
          <Route exact path={"/"} element={<Home />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/create"} element={<CreatePost />}></Route>
          <Route path={"/posts/post/:id"} element={<PostDetails />}></Route>
          <Route path={"/edit/:id"} element={<EditPost />}></Route>
          <Route path={"/myblogs/:id"} element={<MyBlogs />}></Route>
          <Route path={"/profile/:id"} element={<Profile />}></Route>
          <Route path={"/about"} element={<AboutUs />}></Route>
          <Route path={"/privacy"} element={<Privacy />}></Route>
          <Route path={"/terms"} element={<Terms />}></Route>
        </Routes>
      </div>
    </UserContextProvider>
  );
};

export default App;
