import React from 'react'
import Link from 'next/link'

//Internal Import
import Style  from "./Categories.module.css"

const Categories = () => {

  //--CATEGORIES NAVIGATION MENU
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

  return (
    <div>
      {categories.map((el, i)=> (
        <div key={i + 1} className={Style.categories}>
          <Link href={{pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;