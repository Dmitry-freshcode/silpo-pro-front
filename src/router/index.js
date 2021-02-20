import React from 'react'
import ProductsList from '../pages/productsList';
import Header from '../components/header/index'

export default function MainRouter() {
  return (
    <div className="mainContainer">
    <Header />
    <ProductsList />
    </div>
  )
}
