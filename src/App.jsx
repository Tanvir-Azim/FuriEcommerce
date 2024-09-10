
import React from "react"
import Home from "./Components/HomePages/Home"
//import Product from '../src/components/productPages/Product'
import About from "./About"
import Pages from "./Components/Pages/Pages"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import Cart from "./Components/Cart"
import Product from "./Components/ProductPages/Product"
import { BrowserRouter,Routes,Route, RouterProvider, NavLink } from "react-router-dom"
import Heart from "./Heart"
import Header from "./Components/Header"
import ProductPage1 from "./Components/ProductPages/ProductPage1"
import Search from "./Search"
import ProfilePage from "./Components/ProfilePage"
import Footer from "./Components/Footer"
import SingleProductPage from "./Components/SingleProductPage"
import DtailProduct from "./Components/DtailProduct"
import ErrorPage from "./Components/ErrorPage"
import GridView from "./Components/GridView"
import ListView from "./Components/ListView"
import LoginPage from "./Components/LoginPage"
import CheckOutPage from "./Components/CheckOutPage"
import CategoryData from "./Components/CategoryData"
import ProfilePageInformation from "./Components/ProfilePageInformation"
import ChangePassword from "./Components/Profile/ChangePassword"
import ManageAddress from "./Components/Profile/ManageAddress"
import ProfileInfo from "./Components/Profile/ProfileInfo"
import CompleteOder from "./Components/CompleteOder"


function App() {


  return (
    <>
       <BrowserRouter> 
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/productpage1" element={<ProductPage1/>}/>
        <Route path="/heart" element={<Heart/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<ProfilePage/>}/> 
        <Route path="/singleproductpage/:id" element={<SingleProductPage/>}/>
        <Route path="/dtailproduct" element={<DtailProduct/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/gridview" element={<GridView/>}/>
        <Route path="/listview" element={<ListView/>}/>
        <Route path="/loginpage" element={<LoginPage/>}/>
        <Route path="/checkoutpage" element={<CheckOutPage/>}/>
        <Route path="/categorydata" element={<CategoryData/>}/>
        <Route path="/profilepageinformation" element={<ProfilePageInformation/>}/>
        <Route path="/profileinfo" element={<ProfileInfo/>}/>
        <Route path="/manageaddress" element={<ManageAddress/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/completeoder" element={<CompleteOder/>}/>
  


            
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
