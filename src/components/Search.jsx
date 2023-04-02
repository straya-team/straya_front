import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (

        <div className="search-box">
          <FaSearch style={{ color: 'white',fontSize:'22px' }} />
          <input type="search" placeholder="Search and hit enter..." />
        </div>
  );
};

export default Search;
