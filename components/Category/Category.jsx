import React from 'react'
import Image from 'next/image'

//Internal import
import Style from "./Category.module.css"
import images from "../../img";

const Category = () => {
    return (
        <div className={Style.category}>
            <div className={Style.category_title}>
                <h2 style={{ "textAlign": "center", "color": "white", "margin-top": "120px", "margin-bottom": "15px", "fontSize": "30px" }}>Browse by Category</h2>
            </div>
            <div className={Style.category_box}>
                <div className={Style.category_box_left}>
                    <a href="./Artworks" className={Style.category_box_left_image}>
                        <Image
                            src={images.artworks}
                            width="250"
                        />
                    </a>
                    <h3>Artworks</h3>
                </div>
                <div className={Style.category_box_middle}>
                    <a href="./Collectibles" className={Style.category_box_middle_image}>
                        <Image
                            src={images.collectibles}
                            width="250"
                        />
                    </a>
                    <h3>Collectibles</h3>
                </div>
                <div className={Style.category_box_right}>
                    <a href="./Photography" className={Style.category_box_right_image}>
                        <Image
                            src={images.photography}
                            width="250"
                        />
                    </a>
                    <h3>Photography</h3>
                </div>
            </div>
        </div >
    )
}

export default Category