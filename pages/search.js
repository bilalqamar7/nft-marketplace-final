import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/search.module.css";
import { SearchPage } from "@/SearchPage/SearchPageIndex";

const search = () => {
  return (
    <div className={Style.search}>
      <div className={Style.search_box}>
        <div className={Style.search_box_heading}>
        </div>
        
        <div className={Style.search_box_form}>
          <SearchPage />
        </div>
      </div>
    </div>
  );
};

export default search