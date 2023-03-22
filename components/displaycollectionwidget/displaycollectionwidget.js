import React from "react";
import { useHistory } from "react-router-dom";

function Widget({ name, imageUrl, collectionUrl }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(collectionUrl);
  };

  return (
    <div onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Widget;
