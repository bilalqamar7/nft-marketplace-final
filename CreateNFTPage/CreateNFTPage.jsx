import React, { useState } from 'react';

//Internal Import
import Style from './CreateNFTPage.module.css';

const CreateNFT = ()=> {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCollectionNameChange = (event) => {
    setCollectionName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={handleSubmit}>
        <label className={Style.label}>
          <span className={Style.labelText}>Select file to upload: <br></br>
            File types supported: JPG, PNG, GIF, SVG (Max size: 100 MB)
          </span>
          <input className={Style.fileInput} type="file" onChange={handleFileSelect} />
        </label>
        <br />
        <label className={Style.label}>
          <span className={Style.labelText}>Name:</span>
          <input className={Style.input}
            type="text"
            placeholder='Set the name of item...'
            value={itemName}
            onChange={handleItemNameChange} />
        </label>
        <br />
        <label className={Style.label}>
          <span className={Style.labelText}>Description:</span>
          <textarea className={Style.textarea}
            placeholder="Provide a detailed description of the item.."
            value={description}
            onChange={handleDescriptionChange} />
        </label>
        <br />
        <label className={Style.label}>
          <span className={Style.labelText}>Collection name:</span>
          <input className={Style.input}
            type="text"
            placeholder='Enter the name of collection..'
            value={collectionName}
            onChange={handleCollectionNameChange} />
        </label>
        <br />
        <label className={Style.label}>
          <span className={Style.labelText}>Price (ETH):</span>
          <input className={Style.input} 
          type="text" 
          placeholder='Set the price of item..'
          value={price} 
          onChange={handlePriceChange} />
        </label>
        <br />
        <button className={Style.submitButton} type="submit">CREATE NFT</button>
      </form>
    </div>
  );
}

export default CreateNFT;