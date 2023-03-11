import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

//Import icons
import { BsMenuDown, BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//Internal Import
import Style from "./NavBar.module.css";
import { Categories, CreateNFT, Profile, ConnectWallet, SideBar } from "./index";
import { Button } from "../componentsindex";
import image from "../../img";


const NavBar = () => {
  //UseState Components
  const [categories, setCategories] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Categories") {
      setCategories(true);
    }
    else {
      setCategories(false);
    }
  };

  const openCategories = () => {
    if (!categories) {
      setCategories(true);
    }
    else {
      setCategories(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    }
    else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>

        {/*START OF LEFT SECTION*/}
        <div className={Style.navbar_container_left}>
          <Link className={Style.logo} href=".">
            <Image 
              src={image.logo}
              alt="NFT Marketplace logo"
              width={100}
              height={100}
            />
          </Link>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFTs" />
              <Link href="./search"><BsSearch onClick={() => { }} className={Style.search_icon} /></Link>
            </div>
          </div>
        </div>
        {/*END OF LEFT SECTION*/}

        {/*START OF RIGHT SECTION*/}
        <div className={Style.navbar_container_right}>

          {/*  CATEGORIES MENU*/}
          <div className={Style.navbar_container_right_categories}>
            <p onClick={(e) => openMenu(e)}>Categories</p>
            {categories && (
              <div className={Style.navbar_container_right_categories_dropdown}>
                <Categories />
              </div>
            )}
          </div>

          {/*  PROFILE Button*/}
          <Link href="/profile" className={Style.navbar_container_right_button_create}>
            PROFILE
          </Link>

          {/*  CREATE Button*/}
          <Link href="./uploadNFT" className={Style.navbar_container_right_button_create}>
            <button className={Style.createButton}>CREATE NFT</button>
          </Link>

          {/*  Connect Wallet Button*/}
          <div className={Style.navbar_container_right_button_connect}>
            <Button btnName="Connect Wallet" handleClick={() => {}} />
          </div>

          {/*  MENU Button*/}
          <div className={Style.navbar_container_right_menuButton}>
            <CgMenuRight className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
        {/*END OF RIGHT SECTION*/}
      </div>

      {/*  SIDEBAR COMPONENT*/}
      {
        openSideMenu && (
          <div className={Style.SideBar}>
            <SideBar setOpenSideMenu={setOpenSideMenu} />
          </div>
        )
      }
    </div>
  );
};

export default NavBar;