import React from 'react'

//Internal Import
import Style from "@/styles/index.module.css"
import {
  HeroSection,
  Popular,
  Category,
} from '@/components/componentsindex'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Popular />
      <Category />
    </div>
  )
}

export default Home