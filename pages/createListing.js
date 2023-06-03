import React, { useState, useContext } from "react";
import { AppContext } from "@/States/states";
import collectionabi from "../contractsData/NFTABI";
import ethers from "ethers";
export default function CreateListing() {
    const [collectionAddress, setCollectionAddress] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [listingPrice, setListingPrice] = useState("");
    const { marketplace, signer } = useContext(AppContext);

    const handleCreateListing = async () => {
        let return2;

        try {
            const collectionContract = new ethers.Contract(
                collectionAddress,
                collectionabi,
                signer
            );
            return2 = await collectionContract.setApprovalForAll(
                marketplace.address,
                tokenId
            );
        } catch (err) {
            console.log(err);
        }
        let return1;
        try {
            return1 = await marketplace.createListing(
                collectionAddress,
                tokenId,
                ethers.parseEther(listingPrice)
            );
            // Listing created successfully, handle any UI updates or notifications
        } catch (error) {
            // Handle error, display error message or take appropriate action
            console.log(error);
        }
        console.log(return2, return1, collectionAddress, tokenId, listingPrice);
    };

    return (
        <div>
            <h1>Create Listing</h1>
            <input
                type="text"
                value={collectionAddress}
                onChange={(e) => setCollectionAddress(e.target.value)}
                placeholder="Collection Address"
            />
            <input
                type="text"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                placeholder="Token ID"
            />
            <input
                type="text"
                value={listingPrice}
                onChange={(e) => setListingPrice(e.target.value)}
                placeholder="Listing Price"
            />
            <button onClick={handleCreateListing}>Create Listing</button>
        </div>
    );
}
