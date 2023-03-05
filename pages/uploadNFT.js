import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/uploadNFT.module.css";
import { CreateNFTPage } from "../CreateNFTPage/CreateNFTPageIndex";

const uploadNFT = () => {
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New Item</h1>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <CreateNFTPage />
        </div>
      </div>
    </div>
  );
};

export default uploadNFT