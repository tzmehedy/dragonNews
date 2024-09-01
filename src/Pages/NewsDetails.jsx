import React from 'react';
import Header from './Shared/Header';
import Navbar from './Shared/Navbar';
import RightSideNavbar from './Shared/RightSideNavbar';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleNewsCard from '../Components/SingleNewsCard';

const NewsDetails = () => {
    const {id} = useParams()
    const news = useLoaderData()
    const singleNews = news.find(singleNews => singleNews._id === id)

    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <h1 className="text-xl font-bold">Dragon News</h1>
            <div className='m-5'>
              {
                <SingleNewsCard
                  key={singleNews._id}
                  singleNews={singleNews}
                ></SingleNewsCard>
              }
            </div>
          </div>
          <div>
            <RightSideNavbar></RightSideNavbar>
          </div>
        </div>
      </div>
    );
};

export default NewsDetails;
