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


  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

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
        <a href="./uploadNFT"><Button btnName="Create" handleClick={() => { }} /></a>
        <a href="./profile"><Button btnName="Profile" handleClick={() => { }} /></a>
        <Button btnName="Connect" handleClick={() => { }} />
      </div>
    </div>
  );
};

export default SideBar;