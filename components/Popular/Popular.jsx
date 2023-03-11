import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

//Internal import
import Style from "./Popular.module.css"
import images from "../../img";
import { Button } from "@/components/componentsindex";

const Popular = () => {
    return (
        <div>
            <div className={Style.h2}>
                <h2>Most popular NFTs</h2>
            </div>
            <div className={Style.carousel}>
                <div className={Style.carousel_card}>
                    <div className={Style.carousel_card1}>
                        <br></br>
                        <Link href='./details'>
                            <Image
                                src={images.image2}
                                width="145" />
                        </Link>
                        <p>Price: <b>0.50 ETH</b></p>
                        <Button btnName="Buy Now"/><br></br>
                    </div>
                    <div className={Style.carousel_card2}>
                        <br></br>
                        <Link href='./details'>
                            <Image
                                src={images.image3}
                                width="172" />
                        </Link>
                        <p>Price: <b>0.50 ETH</b></p>
                        <Button btnName="Buy Now" /><br></br>
                    </div>
                    <div className={Style.carousel_card3}>
                        <br></br>
                        <Image
                            src={images.image5}
                            width="123" />
                        <p>Price: <b>0.50 ETH</b></p>
                        <Button btnName="Buy Now" /><br></br>
                    </div>
                    <div className={Style.carousel_card4}>
                        <br></br>
                        <Image
                            src={images.image6}
                            width="149" />
                        <p>Price: <b>0.50 ETH</b></p>
                        <Button btnName="Buy Now" /><br></br>
                    </div>
                    <div className={Style.carousel_card5}>
                        <br></br>
                        <Image
                            src={images.image8}
                            width="152" />
                        <p>Price: <b>0.50 ETH</b></p>
                        <Button btnName="Buy Now" /><br></br>
                    </div>
                    <div className={Style.carousel_card6}>
                        <br></br>
                        <Image
                            src={images.image9}
                            width="150" />
                        <p>Price: <b>0.50 ETH</b></p>
                        <Button btnName="Buy Now" /><br></br>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Popular