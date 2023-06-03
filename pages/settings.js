import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/uploadNFT.module.css";
import { Profile } from "../Profilesettings/ProfileSettingsIndex";
import { AppContext } from "@/States/states";
const uploadNFT = () => {
    return (
        <div className={Style.uploadNFT}>
            <div className={Style.uploadNFT_box}>
                <div className={Style.uploadNFT_box_heading}>
                    <h1>Create New Item</h1>
                </div>

                <div className={Style.uploadNFT_box_form}>
                    <Profile />
                </div>
            </div>
        </div>
    );
};

export default uploadNFT;
