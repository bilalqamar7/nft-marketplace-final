import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { BsImage } from "react-icons/bs";
//Internal Import
import Style from "./CreateNFTPage.module.css";

const apiUrl = process.env.REACT_APP_API_URL;

const Profile = () => {
    const [userName, setUserName] = useState("");
    const [about, setAbout] = useState("");
    const [userId, setuserId] = useState("");
    const [email, setEmail] = useState("");
    const [selectedImage, setSelectedImage] = useState();
    const [selectedCoverImage, setSelectedCoverImage] = useState();

    // console.log(Collectionwitaddress[0].name1);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };
    const handleAboutChange = (event) => {
        setAbout(event.target.value);
    };

    const handleuserIdChange = (event) => {
        console.log(event.target.value);
        setuserId(event.target.value);
    };

    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
        uploadImage(event, "profile");
    };
    const handleCoverImageChange = (event) => {
        setSelectedCoverImage(URL.createObjectURL(event.target.files[0]));
        uploadImage(event, "cover");
    };
    const validate = async () => {
        if (image || userId || Description || email || Name) return true;

        return false;
    };
    const uploadImage = async (event, field) => {
        event.preventDefault();
        const file = event.target.files[0];
        if (typeof file !== "undefined") {
            try {
                const formData = new FormData();
                formData.append("image", file);
                let url = "";
                if (field == "profile") {
                    url = apiUrl + "/upload";
                } else {
                    url = apiUrl + "/uploadCover";
                }
                fetch(url, {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Upload successful:", data);
                        // Handle the response from the server
                        //react toastify
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        // Handle error case
                    });
            } catch (error) {
                console.log("image upload error: ", error);
            }
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) {
            alert("fill atleast one field");
            return;
        }

        let data = {
            name: userName,
            userId: userId,
            email: email,
            about: about,
        };
        fetch(apiUrl + "/address", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // handle form submission
    };

    return (
        <div className={Style.container}>
            <form className={Style.form} onSubmit={handleSubmit}>
                <div className={Style.coverImage}>
                    <div>
                        <label className={Style.fileinput}>Profile Image</label>
                        <br />
                        {!selectedImage && (
                            <BsImage
                                htmlFor="coverImageUpload"
                                style={{
                                    width: "200px   ",
                                    height: "200px",
                                    border: "1px solid black",
                                    cursor: "pointer",
                                }}
                                onClick={() =>
                                    document
                                        .getElementById("imageInput")
                                        .click()
                                }></BsImage>
                        )}
                        <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            hidden
                            onChange={handleImageChange}
                        />
                        {selectedImage && (
                            <label>
                                <img
                                    src={selectedImage}
                                    alt="uploaded image"
                                    style={{
                                        width: "200px",
                                        height: "200px",
                                        border: "1px solid black",
                                    }}
                                />
                            </label>
                        )}
                    </div>
                </div>
                <label className={Style.label}>
                    <span className={Style.labelText}>Wallet:</span>
                    <input
                        className={Style.input}
                        type="text"
                        placeholder="Wallet"
                        value={userId}
                        onChange={handleNameChange}
                        disabled="true"
                    />
                </label>
                <br />

                <label className={Style.label}>
                    <span className={Style.labelText}>Name:</span>
                    <input
                        className={Style.input}
                        type="text"
                        placeholder="Set the name..."
                        value={userName}
                        onChange={handleNameChange}
                    />
                </label>
                <br />
                <label className={Style.label}>
                    <span className={Style.labelText}>About:</span>
                    <textarea
                        className={Style.textarea}
                        placeholder="Write About Yourself"
                        value={about}
                        onChange={handleAboutChange}
                    />
                </label>
                <br />

                <label className={Style.label}>
                    <span className={Style.labelText}>Email:</span>
                    <input
                        className={Style.input}
                        type="email"
                        placeholder="Set the email..."
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <br />
                <div className={Style.coverImage}>
                    <div>
                        <label className={Style.fileinput}>Cover Image</label>
                        <br />
                        {!selectedCoverImage && (
                            <BsImage
                                htmlFor="coverImageUpload"
                                style={{
                                    width: "200px   ",
                                    height: "200px",
                                    border: "1px solid black",
                                    cursor: "pointer",
                                }}
                                onClick={() =>
                                    document
                                        .getElementById("coverImageInput")
                                        .click()
                                }></BsImage>
                        )}
                        <input
                            type="file"
                            id="coverImageInput"
                            accept="image/*"
                            hidden
                            onChange={handleCoverImageChange}
                        />
                        {selectedCoverImage && (
                            <label>
                                <img
                                    src={selectedCoverImage}
                                    alt="uploaded cover image"
                                    style={{
                                        width: "200px",
                                        height: "200px",
                                        border: "1px solid black",
                                    }}
                                />
                            </label>
                        )}
                    </div>
                </div>
                <br />
                <button className={Style.submitButton} type="submit">
                    Update
                </button>
            </form>
        </div>
    );
};

export default Profile;
