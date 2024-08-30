import React from 'react'
import Header from './Shared/Header'
import Navbar from './Shared/Navbar'
import LeftSideNavbar from './Shared/LeftSideNavbar'
import RightSideNavbar from './Shared/RightSideNavbar'
import Marquee from "react-fast-marquee";
import News from '../Components/News'

const Home = () => {
    return (
      <div>
        <Header></Header>
        <div className="bg-gray-200 px-3 py-2 rounded-lg flex mt-5">
          <button className="btn btn-secondary px-8">Latest</button>
          <Marquee className="font-bold text-gray-800" pauseOnHover={true}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
        <Navbar></Navbar>

        <div className="grid md:grid-cols-4 mt-20">
          <div>
            <LeftSideNavbar></LeftSideNavbar>
          </div>
          <div className="md:col-span-2">
            <h1 className='text-xl font-bold'>Dragon News Home</h1>
            <News></News>
          </div>
          <div>
            <RightSideNavbar></RightSideNavbar>
          </div>
        </div>
      </div>
    );
};

export default Home;