import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { account, AppContext } from "@/States/states";

//Internal import
import Styles from "./ProfilePage.module.css";
import { BsSearch } from "react-icons/bs";
import img from "@/img";

const ProfilePage = () => {
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

    return (
        <div className={Styles.container}>
            <div className={Styles.profileContainer}>
                <div className={Styles.leftContainer}>
                    <div className={Styles.profileImageContainer}>
                        <Image
                            src={img.user10}
                            width={120}
                            height={120}
                            alt="Profile Image"
                        />
                    </div>
                    <div className={Styles.usernameContainer}>
                        <span>{username}</span>
                        <button
                            className={Styles.editUsernameButton}
                            onClick={handleEditUsernameClick}>
                            Edit
                        </button>
                    </div>
                    <div className={Styles.walletAddressContainer}>
                        <span>{account}</span>
                    </div>
                </div>
                <div className={Styles.rightContainer}>
                    <Link href="./settings">
                        <button
                            className={Styles.settingsButton}
                            onClick={handleSettingsButtonClick}>
                            Settings
                        </button>
                    </Link>
                    {/*<a href='./uploadNFT'>
            <button className={Styles.createNFTButton}>Create NFT</button>
          </a>*/}
                    <Link href="./uploadCollection">
                        <button className={Styles.createCollectionButton}>
                            Create Collection
                        </button>
                    </Link>
                </div>
            </div>
            <div className={Styles.tabContainer}>
                <div className={Styles.tabHeader}>
                    <button
                        className={Styles.tabButton}
                        onClick={() => handleTabClick("nftsBought")}>
                        NFTs Bought
                    </button>
                    <button
                        className={Styles.tabButton}
                        onClick={() => handleTabClick("nftsCreated")}>
                        Created Collections
                    </button>
                    <button
                        className={Styles.tabButton}
                        onClick={() => handleTabClick("onSale")}>
                        On-Sale
                    </button>
                    <button
                        className={Styles.tabButton}
                        onClick={() => handleTabClick("favourites")}>
                        Favourites
                    </button>
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
                    {/* Display NFTs based on selected tab */}
                </div>
                <div className={Styles.tabFooter}>
                    <hr className={Styles.tabDivider} />
                    {/* Other footer content */}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
