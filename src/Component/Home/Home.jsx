// Task1/src/Component/Home/Home.jsx
import React from 'react';
import Fixedicon from '../Fixedicon/Fixedicon';
import Footer from '../Footer/Footer';
import FullRange from '../FullRange/FullRange';
import Header from '../Header/Header';
import NormalCards from '../NoramlCards/NormalCards';
import Professional from '../Professional/Professional';
import Prototype from '../Prototype/Prototype';
import RecentNews from '../RecentNews/RecentNews';
import UptoDate from '../UptoDate/UptoDate';
import WebDesingCompany from '../WebDesingCompany/WebDesingCompany';
import WebNavbar from '../WebNavbar/WebNavbar';
import WebPack from '../WebPack/WebPack';
import CounterUp from '../CounterUp/CounterUp';
import CreativeTeam from '../CreativeTeam/CreativeTeam';
import { useState,useEffect } from 'react';
import Spinner from '../Spinner/Spinner';

const Home = () => {
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },(1000))
  },[])
  return (
    <div>

{isLoading ? (
        <Spinner isLoading={isLoading}/> // Display spinner while loading
      ) : (
        <div>
         <Fixedicon />
      <WebNavbar />
      <Header />
      <WebDesingCompany />
      <CounterUp />
      <NormalCards />
      <FullRange />
      <Prototype />
      <Professional />
      <CreativeTeam />
      <WebPack />
      <UptoDate />
      <RecentNews />
      <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;