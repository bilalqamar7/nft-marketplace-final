import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchPage.module.css";
const SearchPage = ({ onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  return (
    <div className={Style.SearchPage}>
      <div className={Style.SearchPage_box}>
        <BsSearch className={Style.SearchPage_box_icon} />
        <input
          type="text"
          placeholder="Type your keyword..."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
        <BsArrowRight className={Style.SearchPage_box_icon} />
      </div>
    </div>
  );
};

export default SearchPage;