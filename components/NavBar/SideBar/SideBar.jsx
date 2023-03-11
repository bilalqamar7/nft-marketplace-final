import React, { useState } from "react";
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
import { BsMenuDown, BsSearch } from "react-icons/bs";

//INTERNAL IMPORT
import Button from "../../Button/Button";
import Style from "./SideBar.module.css";

const SideBar = ({ setOpenSideMenu }) => {
  //------USESTATE
  const [openCategories, setOpenCategories] = useState(false);


  //--------CATEGORIES NAVIGATION MENU
  const categories = [
    {
      name: "All Categories",
      link: "all categories"
    },
    {
      name: "Artworks",
      link: "artworks"
    },
    {
      name: "Collectibles",
      link: "collectibles"
    },
    {
      name: "Photography",
      link: "photography"
    },
  ];

  const openCategoriesMenu = () => {
    if (!openCategories) {
      setOpenCategories(true);
    } else {
      setOpenCategories(false);
    }
  };


  // const closeSideBar = () => {
  //   setOpenSideMenu(false);
  // };

  return (
    <div className={Style.sideBar}>
      <div className={Style.sideBar_box}>
        {/* <Image src={images.logo} alt="logo" width={150} height={150} /> */}
        <p>
          {/*<a href="/">
            <DiJqueryLogo className={Style.sideBar_box_logo} />
  </a>*/}
        </p>
        <p>
          Discover the most unique NFTs on our marketplace
        </p>
        <div className={Style.sideBar_social}>
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
      <div className={Style.sidebar_container_left_box_input}>
            <div className={Style.sidebar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFTs" />
              <Link href="./search"><BsSearch onClick={() => { }} className={Style.search_icon} /></Link>
            </div>
          </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openCategoriesMenu()}
          >
            <p>Categories</p>
            <TiArrowSortedDown />
          </div>

          {openCategories && (
            <div className={Style.sideBar_categories}>
              {categories.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sideBar_button}>
      <Link href="./uploadNFT" className={Style.navbar_container_right_button_create}>
            <button className={Style.createButton}>CREATE NFT</button>
          </Link>
        <Link href="./profile">
          <Button btnName="Profile" handleClick={() => { }} />
          </Link>
        <Button btnName="Connect Wallet" handleClick={() => { }} />
      </div>
    </div>
  );
};

export default SideBar;