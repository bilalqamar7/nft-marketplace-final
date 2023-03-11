import React from 'react';
import Image from 'next/image';

//Internal import
import Style from "./DetailsPage.module.css";
import images from "../img";

const DetailsPage = () => {
  return (
    <div className={Style.container}>
      <div className={Style.leftContainer}>
        <div className={Style.collectionName}>
          <h2>My NFT Collection</h2>
        </div>
        <div className={Style.NFTName}>
          <h3>NFT Name</h3>
        </div>
        <div className={Style.creatorName}>
          <p>by Creator Name</p>
        </div>
        <div className={Style.NFTImage}>
          <Image
            src={images.image2}
            width="200"
            height="200"
          />
        </div>
        <div className={Style.NFTDescription}>
          <p>Description of NFT goes here. This can be as long as the user wants and should contain the details about the NFT.</p>
        </div>
        <div className={Style.collectionDescription}>
          <p>Description of collection goes here. This section describes what the collection is about and what kind of NFTs will be uploaded here.</p>
        </div>
      </div>

      <div className={Style.rightContainer}>
        <div className={Style.rightContainerInner}>
          <div className={Style.tokenDetails}>
            <div className={Style.tokenDetail}>
              <p>Token ID:</p>
              <p>12345</p>
            </div>
            <div className={Style.tokenDetail}>
              <p>Contract Address:</p>
              <p>0x0212345...</p>
            </div>
            <div className={Style.tokenDetail}>
              <p>Token Standard:</p>
              <p>ERC-721</p>
            </div>
            <div className={Style.tokenDetail}>
              <p>Blockchain:</p>
              <p>Ethereum</p>
            </div>
            <div className={Style.tokenDetail}>
              <p>Creator's Share:</p>
              <p>10%</p>
            </div>
          </div>

          <div className={Style.priceDetails}>
            <div className={Style.priceDetail}>
              <p>Views: </p>
              <p>62,341</p>
            </div>
            <div className={Style.priceDetail}>
              <p>Category:</p>
              <p>Artworks</p>
            </div>
            <div className={Style.priceDetail}>
              <p>Current Price:</p>
              <p>1.62 ETH</p>
            </div>
          </div>
          <button className={Style.offerButton} type="submit">Make Offer</button>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage;
