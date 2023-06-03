import { useState, useEffect } from "react";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaStar } from "react-icons/fa";

import Style from "./tabs.module.css";

function ProductCard({ product }) {
    return (
        <div className={Style.product_Card}>
            <div className={Style.product_Image}>
                <img src={product.images[0]} alt={product.name} />
            </div>
            <div className={Style.product_info}>
                <div className={Style.product_name}>{product.title}</div>
                <div className={Style.product_price}>${product.price}</div>
                <div className={Style.product_collection}>{product.title}</div>
                <div className={Style.product_rating}></div>
            </div>
        </div>
    );
}

function TabGrid() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products", {}).then(
            async (resp) => {
                // console.log("rasp", resp.json());
                const data = await resp.json();
                console.log("data", data);
                setProducts(data);
            }
        );
    }, []);

    return (
        <div className={Style.product_grid}>
            <Tabs>
                <TabList>
                    <Tab>Collection A</Tab>
                    <Tab>Collection B</Tab>
                </TabList>

                <TabPanel>
                    <div className={Style.product_card_grid}>
                        {products
                            // .filter(
                            //     (product) =>
                            //         product.collection === "Collection A"
                            // )
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className={Style.product_card_grid}>
                        {products
                            // .filter(
                            //     (product) =>
                            //         product.collection === "Collection B"
                            // )
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default TabGrid;
