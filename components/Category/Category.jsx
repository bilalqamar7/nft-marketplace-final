import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

//Internal import
import Style from "./Category.module.css"
import images from "../../img";

const Category = () => {
    return (
        <div className={Style.category}>
            <div className={Style.category_title}>
                <h2 style={{ "textAlign": "center", "color": "white", "margin-top": "120px", "margin-bottom": "5px", "margin-left": "9px", "fontSize": "28px" }}>Browse by Category</h2>
            </div>
            <div className={Style.category_box}>
                <div className={Style.category_box_left}>
                    <Link href="./Artworks" className={Style.category_box_left_image}>
                        <Image
                            src={images.artworks}
                            width="250"
                        />
                    </Link>
                    <h3>Artworks</h3>
                </div>
                <div className={Style.category_box_middle}>
                    <Link href="./Collectibles" className={Style.category_box_middle_image}>
                        <Image
                            src={images.collectibles}
                            width="250"
                        />
                    </Link>
                    <h3>Collectibles</h3>
                </div>
                <div className={Style.category_box_right}>
                    <Link href="./Photography" className={Style.category_box_right_image}>
                        <Image
                            src={images.photography}
                            width="250"
                        />
                    </Link>
                    <h3>Photography</h3>
                </div>
            </div>
        </div >
    )
}

export default Category