import React from 'react';
import Image from 'next/image';

//Internal import
import Style from "./CreateCollectionPage.module.css";
import images from "../img";

const CreateCollectionPage = () => {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.leftContainer}>
                    <div className={Style.coverImage}>
                        <label htmlFor="coverImageUpload" className={Style.coverImageLabel}>
                            Upload Cover Image
                        </label>
                        <input type="file" id="coverImageUpload" className={Style.coverImageInput} accept="image/*" />
                    </div>
                    <div className={Style.collectionName}>
                        <label htmlFor="collectionNameInput">Collection Name</label>
                        <input type="text" id="collectionNameInput" className={Style.collectionNameInput} />
                    </div>
                    <div className={Style.collectionDescription}>
                        <label htmlFor="collectionDescriptionInput">Description</label>
                        <textarea id="collectionDescriptionInput" className={Style.collectionDescriptionInput} />
                    </div>
                    <div className={Style.category}>
                        <h3>Select Category:</h3>
                        <div className={Style.categoryButtons}>
                            <label htmlFor="artworks" className={Style.categoryButton}>
                                <input type="radio" id="artworks" name="category" value="artworks" />
                                <Image
                                    src={images.artworks}
                                    alt="Artworks"
                                    width={100}
                                />
                            </label>
                            <label htmlFor="collectibles" className={Style.categoryButton}>
                                <input type="radio" id="collectibles" name="category" value="collectibles" />
                                <Image
                                    src={images.collectibles}
                                    alt="Collectibles"
                                    width={100}
                                />
                            </label>
                            <label htmlFor="photography" className={Style.categoryButton}>
                                <input type="radio" id="photography" name="category" value="photography" />
                                <Image
                                    src={images.photography}
                                    alt="Photography"
                                    width={100}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className={Style.rightContainer}>
                    <div className={Style.relatedLinks}>
                        <label htmlFor="relatedLinksInput">Related Links</label>
                        <input type="text" id="relatedLinksInput" className={Style.relatedLinksInput} />
                    </div>
                    <div className={Style.blockchain}>
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
                        <select id="tokenStandardSelect" className={Style.tokenStandardSelect}>
                            <option value="erc721">Select..</option>
                            <option value="erc721">ERC-20</option>
                            <option value="erc721">ERC-721</option>
                            <option value="erc1155">ERC-1155</option>
                        </select>
                    </div>
                    <div className={Style.ageRating}>
                        <h3>Age Rating:</h3>
                        <label htmlFor="below13" className={Style.ageRatingLabel}>
                            <input type="radio" id="below13" name="ageRating" value="below13" />
                            Below 13
                        </label>
                        <label htmlFor="13to18" className={Style.ageRatingLabel}>
                            <input type="radio" id="13to18" name="ageRating" value="13to18" />
                            13-18
                        </label>
                        <label htmlFor="18+" className={Style.ageRatingLabel}>
                            <input type="radio" id="18+" name="ageRating" value="18+" />
                            18+
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <button className={Style.submitButton} type="submit">CREATE COLLECTION</button>
            </div>
        </>
    )
}

export default CreateCollectionPage;