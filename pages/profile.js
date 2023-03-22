import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/profile.module.css";
import { ProfilePage } from "../ProfilePage/ProfilePageIndex";

const profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_box}>
        <div className={Style.profile_box_heading}></div>

        <div className={Style.profile_box_form}>
          <ProfilePage />
        </div>
      </div>
    </div>
  );
};

export default profile;
