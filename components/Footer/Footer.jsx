import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { Profile } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="footer logo" height={100} width={100} />
          <p>
            This marketplace is a joint effort of Bilal Qamar and Huzaifa bin Ahmed. Every NFT you find here will be one of its kind. Do check out our social handles on the links below.
          </p>

          <div className={Style.footer_social}>
            <Link href="#">
              <TiSocialFacebook />
            </Link>
            <Link href="#">
              <TiSocialLinkedin />
            </Link>
            <Link href="#">
              <TiSocialTwitter />
            </Link>
            <Link href="#">
              <TiSocialYoutube />
            </Link>
            <Link href="#">
              <TiSocialInstagram />
            </Link>
          </div>
        </div>

        <div className={Style.footer_box_profile}>
          <h3>
            Profile
          </h3>
          <Profile/>
        </div>

        <div className={Style.footer_box_quickref}>
        <h5><Link href=".">Homepage</Link></h5>
        <h5><Link href="./collections">Collections</Link></h5>
        <h5><Link href="./uploadNFT">Create NFT</Link></h5>
        <h5><Link href="./uploadCollection">Create Collection</Link></h5>
        <h5><Link href="./aboutus">About Us</Link></h5>

        </div>
      </div>
    </div>
  );
};

export default Footer;
