import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import editorsInsight1 from "../../assets/editorsInsight1.png";
import editorsInsight2 from "../../assets/editorsInsight2.png";
import editorsInsight3 from "../../assets/editorsInsight3.png";

import { SlCalender } from "react-icons/sl";

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    
    return (
      <div>
        <h1 className="text-xl font-bold">All Category</h1>
        <div className="p-3">
          {categories.map((category) => (
            <NavLink
              to={`/categories/${category.id}`}
              key={category.id}
              className={`block mb-5 mt-5 hover:bg-gray-200 p-2 ${(isActive) =>
                isActive ? "bg-pink-500" : "bg-gray-200"}`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>

        <div className='space-y-10'>
          <div className="card bg-base-100 w-64 shadow-xl">
            <figure>
              <img src={editorsInsight1} />
            </figure>
            <div className="p-4 space-y-4">
              <Link className="text-justify">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Link>
              <div className="flex items-center justify-between">
                <p className='font-bold'>Sports</p>
                <div className='flex items-center'>
                    <SlCalender></SlCalender>
                    <p>Jan 4, 2023</p>
                </div>               
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-64 shadow-xl">
            <figure>
              <img src={editorsInsight2} />
            </figure>
            <div className="p-4 space-y-4">
              <Link className="text-justify">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Link>
              <div className="flex items-center justify-between">
                <p className='font-bold'>Sports</p>
                <div className='flex items-center'>
                    <SlCalender></SlCalender>
                    <p>Jan 4, 2023</p>
                </div>               
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-64 shadow-xl">
            <figure>
              <img src={editorsInsight3} />
            </figure>
            <div className="p-4 space-y-4">
              <Link className="text-justify">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Link>
              <div className="flex items-center justify-between">
                <p className='font-bold'>Sports</p>
                <div className='flex items-center'>
                    <SlCalender></SlCalender>
                    <p>Jan 4, 2023</p>
                </div>               
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
};

export default LeftSideNavbar;