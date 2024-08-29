import React from 'react'
import Header from './Shared/Header'
import Navbar from './Shared/Navbar'
import LeftSideNavbar from './Shared/LeftSideNavbar'
import RightSideNavbar from './Shared/RightSideNavbar'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div>
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className='md:col-span-2'>
                    <h1>This is the news component</h1>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;