import React from 'react'
import Link from 'next/link';

//Internal Import
import Style  from "./Profile.module.css";

const Profile = () => {

  const profile = [
    {
      name: "NFTs bought",
      link: "profile"
    },
    {
      name: "NFTs created",
      link: "profile"
    },
    {
      name: "On-sale",
      link: "profile"
    },
    {
      name: "Favourites",
      link: "profile"
    },
    {
      name: "Settings",
      link: "profile"
    },
  ];

  return (
    <div>
      {profile.map((el, i)=> (
        <div key={i + 1} className={Style.profile}>
          <Link href={{pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Profile;