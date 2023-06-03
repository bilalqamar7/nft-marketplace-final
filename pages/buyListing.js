import React, { useState, useContext } from "react";
import { AppContext } from "@/States/states";
export default function BuyListing() {
    const [collectionAddress, setCollectionAddress] = useState("");
    const [tokenId, setTokenId] = useState("");
    const { marketplace } = useContext(AppContext);
    const handleBuyListing = async () => {
        try {
            await marketplace.buyListing(collectionAddress, tokenId);
            // Listing bought successfully, handle any UI updates or notifications
        } catch (error) {
            // Handle error, display error message or take appropriate action
        }
    };

    return (
        <div>
            <h1>Buy Listing</h1>
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
            <button onClick={handleBuyListing}>Buy Listing</button>
        </div>
    );
}
