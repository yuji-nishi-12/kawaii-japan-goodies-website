import React from 'react'
import StoreHero from '../components/StoreHero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <StoreHero />
      <LatestCollection />
      <BestSeller />
    </div>
  )
}

export default Home
