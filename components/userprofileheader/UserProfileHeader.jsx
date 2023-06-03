import { useState, useEffect } from "react";
import Style from "./userprofileheader.module.css";
import axios from "axios";
import { get } from "mongoose";
import Link from "next/link";

const fetchData = async (userId) => {
    try {
        const uri = `http://localhost:3000/users/${userId}`;
        console.log(uri);
        const response = await fetch(uri, { mode: "cors" }); // Replace with your API endpoint
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("User data not found");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};

const createDummyData = (userId) => {
    return {
        name: "User",
        userId,
        email: "dummy@example.com",
        about: "This is a dummy user.",

        profileImage:
            "1685288762724_1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6",
        coverImage:
            "1685288762724_1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6",
    };
};
const handleSettingsButtonClick = () => {
    // handle settings button click action
};
const User = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    const uploadpath = "http://localhost:3000/image/";

    useEffect(() => {
        const fetchDataAndStore = async () => {
            const data = await fetchData(userId);
            if (data) {
                setUserData(data);
            } else {
                const dummyData = createDummyData(userId);
                setUserData(dummyData);
            }
        };

        fetchDataAndStore();
    }, [userId]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    // Render the user details
    return (
        <div className={Style.profile_banner}>
            <div
                className={Style.cover_image}
                style={{
                    backgroundImage: `url(${uploadpath}${userData.coverImage})`,
                }}>
                <div className={Style.leftContainer}>
                    <div className={Style.profile_info}>
                        <div className={Style.profile_image}>
                            <img
                                src={`${uploadpath}${userData.profileImage}`}
                                alt="Profile"
                            />
                        </div>
                        <div className={Style.profile_details}>
                            <h2>{userData.name}</h2>
                            <p className={Style.wallet_address}>{userId}</p>
                            <p>{userData.email}</p>
                        </div>
                    </div>
                </div>
                <div className={Style.rightContainer}>
                    <div>
                        <Link href="./settings">
                            <button
                                className={Style.settingsButton}
                                onClick={handleSettingsButtonClick}>
                                Settings
                            </button>
                        </Link>
                        {/* <a href="./uploadNFT">
                                <button className={Styles.createNFTButton}>
                                    Create NFT
                                </button>
                            </a> */}
                        <Link href="./uploadCollection">
                            <button className={Style.createCollectionButton}>
                                Create Collection
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={Style.about_section}>
                <h3>About</h3>
                <p>{userData.about}</p>
            </div>
        </div>
    );
};

export default User;
