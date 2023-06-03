import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { account, AppContext } from "@/States/states";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { User } from "@/components/userprofileheader/UserProfileHeaderIndex";
//Internal import
import Styles from "./Collection_page.module.css";
import { BsSearch } from "react-icons/bs";
import img from "@/img";
import { TabGrid } from "@/components/Tabs/tabsindex";
const CollectionPage = () => {
    const [username, setUsername] = useState("Bilal Qamar");

    const { account } = useContext(AppContext);
    // console.log(account1);
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEditUsernameClick = () => {
        // handle edit username action
    };

    const handleSettingsButtonClick = () => {
        // handle settings button click action
    };

    const handleCreateNFTButtonClick = () => {
        // handle create NFT button click action>
    };

    const handleTabClick = (tabName) => {
        // handle tab click action
    };

    const handleSearch = (searchTerm) => {
        s;
        // handle search action
    };

    let localAccount = "0xe3712b61905B45fA357876309C14a028a5f1C56E";

    useEffect(() => {
        if (typeof window.localStorage !== "undefined") {
            localAccount = localStorage.getItem("localAccount");
        }
        console.log(localAccount);
    });

    return (
        <div className={Styles.container}>
            <div className={Styles.profileContainer}>
                <User userId={localAccount} />
            </div>
            <TabGrid />
            {/* <div className={Styles.tabContainer}>
                <div className={Styles.tabHeader}>
                    <Tabs>
                        <TabList>
                            <Tab>Your Collections</Tab>
                            <Tab>On Sale</Tab>
                            <Tab>Collected</Tab>
                            <Tab>Offers Made</Tab>
                            <Tab>Offers Recived</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>

                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 4</h2>
                        </TabPanel>

                        <TabPanel>
                            <h2>Any content 5</h2>
                        </TabPanel>
                    </Tabs>
                    <div className={Styles.searchBoxContainer}>
                        <input
                            type="text"
                            className={Styles.searchBox}
                            placeholder="Search by Name.."
                            onChange={(event) =>
                                handleSearch(event.target.value)
                            }
                        />
                        <BsSearch />
                    </div>
                </div>
                <div className={Styles.tabContent}>
                    
                </div>
                <div className={Styles.tabFooter}>
                    <hr className={Styles.tabDivider} />
              
                </div>
            </div> */}
        </div>
    );
};

export default CollectionPage;
