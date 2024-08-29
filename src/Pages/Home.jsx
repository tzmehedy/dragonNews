import React from 'react';
import Header from './Shared/Header';
import Navbar from './Shared/Navbar'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className='font-poppins'>This is Home page</h1>
        </div>
    );
};

export default Home;