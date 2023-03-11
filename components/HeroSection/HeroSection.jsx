import React from 'react'
import Image from 'next/image'

//Internal Import
import Style from "./HeroSection.module.css"
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, create and sell<br></br> unique NFTs</h1>
        </div>
          
        <Image
        className={Style.heroSection_img}
            src={images.mainhero}
            alt="Hero Section image"
            />
      </div>
    </div>
  )
}

export default HeroSection