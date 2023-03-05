import React from "react";
import Image from "next/image";
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
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_profile}>
          <h3>
            Profile
          </h3>
          <Profile/>
        </div>

        <div className={Style.footer_box_quickref}>
        <h5><a href=".">Homepage</a></h5>
        <h5><a href="./collections">Collections</a></h5>
        <h5><a href="./uploadNFT">Create NFT</a></h5>
        <h5><a href="./uploadCollection">Create Collection</a></h5>
        <h5><a href="./aboutus">About Us</a></h5>

        </div>
      </div>
    </div>
  );
};

export default Footer;
