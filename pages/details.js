import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/details.module.css";
import { DetailsPage } from "../DetailsPage/DetailsPageIndex";

const details = () => {
  return (
    <div className={Style.details}>
      <div className={Style.details_box}>
        <div className={Style.details_box_heading}>
        </div>

        <div className={Style.details_box_form}>
          <DetailsPage />
        </div>
      </div>
    </div>
  );
};

export default details