import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/profile.module.css";
import { CollectionPage } from "../Collection_page/Collection_pageIndex";

const collections = () => {
    return (
        <div className={Style.profile}>
            <div className={Style.profile_box}>
                <div className={Style.profile_box_heading}></div>

                <div className={Style.profile_box_form}>
                    <CollectionPage />
                </div>
            </div>
        </div>
    );
};

export default collections;
