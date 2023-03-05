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
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.mainhero}
            alt="Hero Section image"
            width={520}
            height={330} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection