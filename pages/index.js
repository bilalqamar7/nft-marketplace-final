import React, { useEffect, useState } from "react";

//Internal Import
import Style from "@/styles/index.module.css";
import {
    HeroSection,
    Popular,
    Category,
    CollectionGroup,
} from "@/components/componentsindex";

const Home = () => {
    const [collections, setCollections] = useState([]);
    const handleClick = () => {
        console.log("clicked");
    };
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products", {}).then(
            async (resp) => {
                // console.log("rasp", resp.json());
                const data = await resp.json();
                console.log("data", data);
                setCollections(data);
            }
        );
    }, []);

    return (
        <div className={Style.homePage}>
            <HeroSection />
            <CollectionGroup
                onCollectionCardLargeClick={handleClick}
                collections={collections}
            />
            <Popular />
            {/* <Category /> */}
        </div>
    );
};

export default Home;
