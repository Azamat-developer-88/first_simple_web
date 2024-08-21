import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderNav from './components/HeaderNav'
import HeaderBox from './components/HeaderBox'
import ExampleBox from './components/ExampleBox'
import Products from './components/Products'
import QualityBox from './components/QualityBox'
import AboutUs from './components/AboutUs'
import SpecialOffer from './components/SpecialOffer'
import CustomerSay from './components/CustomerSay'
import SingUp from './components/SingUp'
import Footer from './components/Footer'

function App() {
 return(
  <div className="App">
  <HeaderNav />
  <HeaderBox />
  <Products />
  <QualityBox />
  <AboutUs />
  <SpecialOffer />
  <CustomerSay />
  <SingUp />
  <Footer />
 </div>
 )
}

export default App
