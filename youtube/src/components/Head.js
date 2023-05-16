import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-6 my-0.5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKi1yF1PLdUkait_4ixaBVkz3jeyfD_-yb-g&usqp=CAU"
          alt="hamburger-img"
        />
        <img
          className="h-7 mx-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20220605194644"
          alt="YouTube_logo"
        />
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
