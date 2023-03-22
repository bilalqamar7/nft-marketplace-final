import { AppContext } from "@/States/states";
import { ethers } from "ethers";
import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { BsImage } from "react-icons/bs";
//Internal Import
import Style from "./CreateNFTPage.module.css";
import collectionabi from "../contractsData/MyNFT.json";
import { create as ipfsHttpClient } from "ipfs-http-client";

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
const CreateNFT = () => {
    const [itemName, setItemName] = useState("");
    const [Description, setDescription] = useState("");
    const [collectionName, setCollectionName] = useState("");
    const [price, setPrice] = useState("");
    const [selectedaddress, setaddress] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const [Collectionwitaddress, setCollectionwithaddress] = useState([]);
    const [options, setOptions] = useState([]);
    const [image, setImage] = useState();
    const { collectionfactory, provider, account, web3Handler,signer } =
        useContext(AppContext);
    useLayoutEffect(() => {
        const assignOptions = async () => {
            if (collectionfactory == undefined) {
                await web3Handler().then(console.log("ian"));
            }
            console.log(collectionfactory);
            let collectionaddresss=[];
            try{
                 collectionaddresss  =    await collectionfactory.getCollectionsByOwner(account);

            }catch(e){
                console.log(e)
            }

            const result = [];
            const options = [];
            for (let i = 0; i < collectionaddresss.length; i++) {
                const nftcontract = new ethers.Contract(
                    collectionaddresss[i],
                    collectionabi.abi,
                    provider
                );
                console.log("adf23");
                const name1 = await nftcontract.name();
                result.push({ address: collectionaddresss[i], name1 });
                options.push(name1);
                console.log("adf45");
            }
            setOptions(options);
            console.log(result);
            setCollectionwithaddress(result);
        };

        assignOptions();
    }, []);

    const assignOptions = async () => {
        if (collectionfactory == undefined) {
            await web3Handler();
        }
        console.log(collectionfactory);
        let collectionaddresss=[];
        try{
             collectionaddresss  =    await collectionfactory.getCollectionsByOwner(account);

        }catch(e){
            console.log(e)
        }

        const result = [];
        const options = [];
        for (let i = 0; i < collectionaddresss.length; i++) {
            const nftcontract = new ethers.Contract(
                collectionaddresss[i],
                collectionabi.abi,
                provider
            );
            console.log("adf23");
            const name1 = await nftcontract.name();
            result.push({ address: collectionaddresss[i], name1 });
            options.push(name1);
            console.log("adf45");
        }
        setOptions(options);
        setCollectionwithaddress(result);

    };
    // console.log(Collectionwitaddress[0].name1);
    const handleItemNameChange = (event) => {
        setItemName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleCollectionNameChange = (event) => {
        console.log(event.target.value);
        
        setCollectionName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
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


    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
        uploadToIPFS(event);
    };
    const assignaddress = () => {
        for (let i = 0; i < Collectionwitaddress.length; i++) {
            
            if (Collectionwitaddress[i].name1 == collectionName) {
               
                
              
                setaddress(Collectionwitaddress[i].address);
            }
        }
    };
    console.log(image,collectionName,Description,price,itemName);
    const createmetadata = async () => {
        if (!image || !collectionName || !Description || !price|| !itemName)
            return "Complete all Fields";
            let metadata; 
            try {
             metadata = await client.add(
                JSON.stringify({
                    image,
                    collectionName,
                    Description,
                  price,
                  itemName
                })
            );
           
        } catch (error) {
            console.error(error);
        }
        return `https://nfts-pieas.infura-ipfs.io/ipfs/${metadata.path}`;
        
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        assignaddress();
        console.log(collectionName);
        console.log(selectedaddress);
        const collectionContract = new ethers.Contract(
            selectedaddress,
            collectionabi.abi,
           signer
        );
        console.log(signer);
        const tokenuri= await createmetadata();
        console.log(tokenuri);
        try{
            await collectionContract.mint(account,tokenuri);
        }catch(e){
            console.log(e)
        }
         

        // handle form submission
    };

    return (
        <div className={Style.container}>
            <form className={Style.form} onSubmit={handleSubmit}>
                <div className={Style.coverImage}>
                    <div>
                        <label className={Style.fileinput}>
                            Upload NFT Image
                        </label>
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
                    <span className={Style.labelText}>Name:</span>
                    <input
                        className={Style.input}
                        type="text"
                        placeholder="Set the name of item..."
                        value={itemName}
                        onChange={handleItemNameChange}
                    />
                </label>
                <br />
                <label className={Style.label}>
                    <span className={Style.labelText}>Description:</span>
                    <textarea
                        className={Style.textarea}
                        placeholder="Provide a detailed Description of the item.."
                        value={Description}
                        onChange={handleDescriptionChange}
                    />
                </label>
                <br />
                        
                <label onLoad= {assignOptions} className={Style.label}>
                    <span className={Style.labelText}>Collection name:</span>

                    <select
                        className={Style.selectinput}
                        // onClick={handleCollectionNameChange}
                        onChange={handleCollectionNameChange}
                        onBeforeInput={handleCollectionNameChange}
                        onLoad={handleCollectionNameChange  }
                        onClick={handleCollectionNameChange}
                        > 
                        
                        {options.map((option) => (
                            <option 
                                key={option}
                                value={option.toLowerCase()}
                                className={Style.option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label className={Style.label}>
                    <span className={Style.labelText}>Price (ETH):</span>
                    <input
                        className={Style.input}
                        type="text"
                        placeholder="Set the price of item.."
                        value={price}
                        onChange={handlePriceChange}
                    />
                </label>
                <br />
                <button className={Style.submitButton} type="submit">
                    CREATE NFT
                </button>
            </form>
        </div>
    );
};

export default CreateNFT;
