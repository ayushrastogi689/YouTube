import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux"; // react-redux is a library
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  // dispatch will come from our useDispatch() hook, useDispatch() hook comes from our react-redux library
  const dispatch = useDispatch(); //

  // This a function which is being called in onClick and this will dispatch an action
  const toggleMenuHandler = () => {
  // Now we will dispatch an action by calling the const dispatch function by passing toggle menu inside it
    dispatch(toggleMenu())
  }; 

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  // Scbscribing to our store using useSelector() hook.
  const searchCache = useSelector((store) => store.search);

  // Adding a Debounce in our Search bar within the useEffect's API call
  useEffect(() => {
    // Make an API call after every key press if the difference between two keyPress is > 400ms
    const timer = setTimeout(()=> {
      // Here we will try to get the cache and check if the searchQueryText is already present in cache or not
      // If it is present then return the searchCache of searchQueryText
        if(searchCache[searchQuery]) {
         setSuggestion(searchCache[searchQuery]); 
        }
        // else we should make an API call
        else {
          getSearchSuggestion();
        }
    }, 400)

    return () => {
      clearTimeout(timer);
    };
    // Otherwise reject the api call 
  },[searchQuery]) // We have to make the API call every time our search query changes.

  const getSearchSuggestion = async () =>{
    // For checking
    // console.log("API Call - " +searchQueryText);
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await response.json();
    // console.log(jsonData[1]);
    setSuggestion(jsonData[1]);

    // After making the API call we should dispatch an action to update the cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
    })
  }

  return (
    <div className="grid grid-flow-col p-4 m-1.5 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-6 my-0.5 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKi1yF1PLdUkait_4ixaBVkz3jeyfD_-yb-g&usqp=CAU"
          alt="hamburger-img"
          onClick={() => toggleMenuHandler()} // Dispatch and action
        />
        <a href="/">
        <img
          className="h-7 mx-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20220605194644"
          alt="YouTube_logo"
        />
        </a>
      </div>
      <div className="col-span-10 mb-1 px-10">
        <div>
          <input className = "px-5 w-1/2 py-1.5 border border-gray-400 rounded-l-full" 
            type="text" placeholder="Search" value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="px-5 py-1.5 bg-gray-100 border border-gray-400 rounded-r-full"> 🔍 
          </button>
        </div>
        { showSuggestion && (
          <div className="fixed bg-white px-2 py-2 w-[35rem] shadow-lg rounded-lg border border-gray-100">
        <ul>
        {
          suggestion.map((suggest, index) => (
          <li key={suggest + index} className ="px-3 py-2 shadow-sm hover:bg-gray-100"> 
          🔍 {suggest} 
          </li>
        ))}
        </ul>
        </div>)
        }
      </div>
      <div className="col-span-1">
        <img
        className="h-7 cursor-pointer"
          src="https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
