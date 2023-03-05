import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/uploadCollection.module.css";
import { CreateCollectionPage } from "../CreateCollectionPage/CreateCollectionPageIndex";

const uploadCollection = () => {
  return (
    <div className={Style.uploadCollection}>
      <div className={Style.uploadCollection_box}>
        <div className={Style.uploadCollection_box_heading}>
          <h1>Create New Collection</h1>
        </div>

        <div className={Style.uploadCollection_box_form}>
          <CreateCollectionPage />
        </div>
      </div>
    </div>
  );
};

export default uploadCollection