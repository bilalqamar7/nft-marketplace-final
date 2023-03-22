import React, { useContext, useState } from "react";
import Image from "next/image";
import { create as ipfsHttpClient } from "ipfs-http-client";
//Internal import
import Style from "./CreateCollectionPage.module.css";
import images from "../img";
import { AppContext } from "@/States/states";
import { Bs0Square, BsBox, BsImage } from "react-icons/bs";

const INFURA_ID = "2JjJPXIyYtPJHn2KgiidjStbaCV";
const INFURA_KEY = "ecbb48f5db648dcbb1930377909ed321";

const auth =
    "Basic " + Buffer.from(INFURA_ID + ":" + INFURA_KEY).toString("base64");
const client = ipfsHttpClient({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
});
const CreateCollectionPage = () => {
    const { account, collectionfactory } = useContext(AppContext);
    const [collectionName, setCollectionName] = useState();
    const [Description, setDescription] = useState();
    const [Category, setcatagory] = useState();
    const [relatedLinks, setRelatedlink] = useState();
    const [ageRating, setAgerating] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const [image, setImage] = useState();
    const [catagoryImage, setCatogaryImage] = useState();

    console.log(collectionName, Description, Category, image);

    const uploadToIPFS = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        if (typeof file !== "undefined") {
            try {
                const result = await client.add(file);
                setImage(
                    `https://nfts-pieas.infura-ipfs.io/ipfs/${result.path}`
                );
            } catch (error) {
                console.log("ipfs image upload error: ", error);
            }
        }
    };

    const createmetadata = async () => {
        if (!image || !collectionName || !Description || !Category)
            return "Complete all Fields";
        try {
            const metadatauri = await client.add(
                JSON.stringify({
                    image,
                    collectionName,
                    Description,
                    Category,
                })
            );
            CreateCollection(metadatauri);
        } catch (error) {
            console.error(error);
        }
    };
    const CreateCollection = async (metadatauri) => {
        try {
            await collectionfactory.createCollection(
                collectionName,
                "ETH",
                metadatauri
            );
        } catch (e) {
            console.error(e);
        }
    };
    const catagoryClick = (value) => {
        setcatagory(value);
    };
    const getstyleforcatagory = (value) => {
        if (Category != undefined) {
            if (Category != value) {
                return { filter: "brightness(60%)" };
            }
            else {return {transform: "scale(1.2)"}}
        }
    };

    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
        uploadToIPFS(event);
    };
    return (
        <>
            <div className={Style.container}>
                <div className={Style.leftContainer}>
                    <div className={Style.coverImage}>
                        <div>
                            <label className={Style.coverImageLabel}>
                                Upload Cover Image
                            </label>
                            {!selectedImage && (
                                <BsImage
                                    htmlFor="coverImageUpload"
                                    style={{
                                        width: "200px   ",
                                        height: "200px",
                                        border: "1px solid black",
                                        cursor: "pointer",
                                    }}
                                    className={Style.collectionNameInput}
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

                        {/* <label htmlFor="coverImageUpload" className={Style.coverImageLabel}>
              Upload Cover Image
            </label>
            <input
              type="file"
              id="coverImageUpload"
              className={Style.coverImageInput}
              accept="image/*"
              onChange={uploadToIPFS}
            /> */}
                    </div>
                    <div className={Style.collectionName}>
                        <label htmlFor="collectionNameInput">
                            Collection Name
                        </label>
                        <input
                            type="text"
                            id="  collectionNameInput"
                            className={Style.collectionNameInput}
                            placeholder="Name"
                            onChange={(e) => setCollectionName(e.target.value)}
                        />
                    </div>
                    <div className={Style.collectionDescription}>
                        <label htmlFor="collectionDescriptionInput">
                            Description
                        </label>
                        <textarea
                            id="collectionDescriptionInput"
                            className={Style.collectionDescriptionInput}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    
                </div>
                <div className={Style.rightContainer}>
                    <div className={Style.relatedLinks}>
                        <label htmlFor="relatedLinksInput">Related Links</label>
                        <input
                            type="text"
                            id="relatedLinksInput"
                            className={Style.relatedLinksInput}
                            onChange={(e) => setRelatedlink(e.target.value)}
                        />
                    </div>
                    {/* <div className={Style.blockchain}>
            <label htmlFor="blockchainSelect">Select Blockchain:</label>
            <select id="blockchainSelect" className={Style.blockchainSelect}>
              <option value="select">Select..</option>
              <option value="ethereum">Ethereum</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="solana">Solana</option>
              <option value="binance-smart-chain">Binance Smart Chain</option>
            </select>
          </div>
          <div className={Style.tokenStandard}>
            <label htmlFor="tokenStandardSelect">Select Token Standard:</label>
            <select
              id="tokenStandardSelect"
              className={Style.tokenStandardSelect}
            >
              <option value="erc721">Select..</option>
              <option value="erc721">ERC-20</option>
              <option value="erc721">ERC-721</option>
              <option value="erc1155">ERC-1155</option>
            </select>
          </div> */}
                    <div className={Style.ageRating}>
                        <h3>Age Rating:</h3>
                        <label
                            htmlFor="below13"
                            className={Style.ageRatingLabel}>
                            <input
                                type="radio"
                                id="below13"
                                name="ageRating"
                                value="below13"
                                onSelect={(e) => setAgerating(e.target.value)}
                            />
                            Below 13
                        </label>
                        <label
                            htmlFor="13to18"
                            className={Style.ageRatingLabel}>
                            <input
                                type="radio"
                                id="13to18"
                                name="ageRating"
                                value="13to18"
                                onSelect={(e) => setAgerating(e.target.value)}
                            />
                            13-18
                        </label>
                        <label htmlFor="18+" className={Style.ageRatingLabel}>
                            <input
                                type="radio"
                                id="18+"
                                name="ageRating"
                                value="18+"
                                onSelect={(e) => setAgerating(e.target.value)}
                            />
                            18+
                        </label>
                    </div>
                    <div className={Style.category}>
                        <h3>Select Category:</h3>
                        <div className={Style.categoryButtons}>
                            <label
                                htmlFor="artworks"
                                className={Style.categoryButton}>
                                <input
                                    type="radio"
                                    id="artworks"
                                    name="category"
                                    value="artworks"
                                    src={images.artworks}
                                    hidden
                                    onClick={(e) =>
                                        catagoryClick(e.target.value)
                                    }
                                />
                                <Image
                                    src={images.artworks}
                                    value="artworks"
                                    alt="Artworks"
                                    style={getstyleforcatagory("artworks")}
                                    width={150}
                                />
                            </label>
                            <label
                                htmlFor="collectibles"
                                className={Style.categoryButton}>
                                <input
                                    type="radio"
                                    id="collectibles"
                                    name="category"
                                    value="collectibles"
                                    hidden
                                    onClick={(e) =>
                                        catagoryClick(e.target.value)
                                    }
                                />
                                <Image
                                    src={images.collectibles}
                                    alt="Collectibles"
                                    value="collectibles"
                                    width={150}
                                    style={getstyleforcatagory("collectibles")}
                                />
                            </label>
                            <label
                                htmlFor="photography"
                                className={Style.categoryButton}>
                                <input
                                    type="radio"
                                    id="photography"
                                    name="category"
                                    value="photography"
                                    hidden
                                    onClick={(e) =>
                                        catagoryClick(e.target.value)
                                    }
                                />
                                <Image
                                    src={images.photography}
                                    alt="Photography"
                                    value="photography"
                                    width={150}
                                    style={getstyleforcatagory("photography")}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button
                    className={Style.submitButton}
                    type="submit"
                    onClick={createmetadata}>
                    CREATE COLLECTION
                </button>
            </div>
        </>
    );
};

export default CreateCollectionPage;
