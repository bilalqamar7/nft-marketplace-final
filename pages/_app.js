import "@/styles/globals.css";
import React, { useState, useEffect, createContext, useContext } from "react";
//Internal Import
import { NavBar, Footer } from "@/components/componentsindex";
import { ethers } from "ethers";
import { AppContext } from "@/States/states";
import ArtAlleyMarketplaceaddress from "../contractsData/ArtAlleyMarketplace-address.json";
import ArtAlleyMarketplaceabi from "../contractsData/ArtAlleyMarketplace.json";
import collectionfactoryaddress from "../contractsData/CollectionFactory-address.json";
import collectionfactoryabi from "../contractsData/CollectionFactory.json";
const MyApp = ({ Component, pageProps }) => {
    const [signer, setSigner] = useState();
    const [account, setAccount] = useState();
    const [marketplace, setMarketplace] = useState();
    const [collectionfactory, setCollectionFactory] = useState();
    const [provider, setProvider] = useState();
    const web3Handler = async (props) => {
        const account1 = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        setAccount(account1[0]);
        // Get provider from Metamask

        const provider = new ethers.BrowserProvider(window.ethereum);
        // Set signer
        const signer = await provider.getSigner();
        setProvider(provider);
        setSigner({ signer });
        window.ethereum.on("chainChanged", (chainId) => {
            window.location.reload();
        });

        window.ethereum.on("accountsChanged", async function (accounts) {
            setAccount(account1[0]);
            await web3Handler();
        });
        loadContracts(signer);
    };

    const loadContracts = async (signer) => {
        // Get deployed copies of contracts
        const marketplace = new ethers.Contract(
            ArtAlleyMarketplaceaddress.address,
            ArtAlleyMarketplaceabi.abi,
            signer
        );
        const collectionfactory = new ethers.Contract(
            collectionfactoryaddress.address,
            collectionfactoryabi.abi,
            signer
        );
        setMarketplace(marketplace);
        setCollectionFactory(collectionfactory);
    };
    return (
        <div>
            <AppContext.Provider
                value={{
                    account,
                    signer,
                    marketplace,
                    collectionfactory,
                    provider,
                    web3Handler,
                }}>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
            </AppContext.Provider>
        </div>
    );
};

export default MyApp;
