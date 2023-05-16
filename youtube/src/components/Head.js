import React from "react";
import { useDispatch } from "react-redux"; // react-redux is a library
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  // dispatch will come from our useDispatch() hook, useDispatch() hook comes from our react-redux library
  const dispatch = useDispatch(); //

  // This a function which is being called in onClick and this will dispatch an action
  const toggleMenuHandler = () => {
  // Now we will dispatch an action by calling the const dispatch function by passing toggle menu inside it
    dispatch(toggleMenu())
  }; 



  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-6 my-0.5 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKi1yF1PLdUkait_4ixaBVkz3jeyfD_-yb-g&usqp=CAU"
          alt="hamburger-img"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
        <img
          className="h-7 mx-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20220605194644"
          alt="YouTube_logo"
        />
        </a>
      </div>
      <div className="col-span-10">
        <input className = "w-1/2 p-1 border border-gray-400 rounded-l-full" type="text" />
        <button className="p-1 bg-gray-100 border border-gray-400 rounded-r-full">Search</button>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          src="https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
