// import App from './App'

import Header from './Component/Header/Header'
import WebNavbar from './Component/WebNavbar/WebNavbar'
import { Outlet } from 'react-router-dom'
import React, { useState, useEffect} from 'react';
import Spinner from './Component/Spinner/Spinner'
import Home from './Component/Home/Home'
import ReadMore from './Component/ReadMore/ReadMore';
import Footer from './Component/Footer/Footer';

const Route = () => {
  
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },(2000))
  },[])

  
  return (
    <>
    
      

     {isLoading ? (
        <Spinner isLoading={isLoading}/> // Display spinner while loading
      ) : (
        <div>
         <WebNavbar/>
         <Header/>
         <Outlet>
          <ReadMore></ReadMore>
         </Outlet>
         <Footer/>
        </div>
      )}
    </>
  )
}

export default Route
