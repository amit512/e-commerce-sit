import React from 'react'
import BannerSlider from '../components/pages/landing/BannerSlider'
import FlashSales from '../components/pages/landing/FlashSalesSection'
import CategoriesSection from './CategoriesPage'
import TrendingSection from '../components/pages/landing/TrendingSection'
import Footer from '../components/common/Footer'

const home = () => {
  return (
    <div>
      <div className='headder'>
        <BannerSlider/>
        <FlashSales/>
        <CategoriesSection/>
        <TrendingSection/>
        <Footer/>
    
        
      </div>
   
    </div>
  )
}

export default home
