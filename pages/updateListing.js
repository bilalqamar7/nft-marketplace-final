import React, { useState, useContext } from "react";
import { AppContext } from "@/States/states";

export default function UpdateListing() {
    const [collectionAddress, setCollectionAddress] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [listingPrice, setListingPrice] = useState("");
    const { marketplace } = useContext(AppContext);
    const handleUpdateListing = async () => {
        try {
            await marketplace.updateListing(
                collectionAddress,
                tokenId,
                listingPrice
            );
            // Listing updated successfully, handle any UI updates or notifications
        } catch (error) {
            // Handle error, display error message or take appropriate action
        }
    };

    return (
        <div>
            <h1>Update Listing</h1>
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
            <button onClick={handleUpdateListing}>Update Listing</button>
        </div>
    );
}
