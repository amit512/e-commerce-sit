import React from 'react'
import BannerSlider from '../components/pages/landing/BannerSlider'
import FlashSales from '../components/pages/landing/FlashSalesSection'
import CategoriesSection from './CategoriesPage'

const home = () => {
  return (
    <div>
      <div className='headder'>
        <BannerSlider/>
        <FlashSales/>
        <CategoriesSection/>
    
        
      </div>
   
    </div>
  )
}

export default home
