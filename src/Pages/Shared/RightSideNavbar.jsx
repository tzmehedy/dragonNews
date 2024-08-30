import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

import bg1 from '../../assets/bg.png'

const RightSideNavbar = () => {

    const bg = `bg-[url("${bg1}")]`;

    console.log(bg)
    return (
      <div>
        {/* Login with google and facebook */}
        <div>
          <h1 className="text-xl font-bold">Login With</h1>
          <div className="flex flex-col ">
            <button className="btn btn-outline mb-3 mt-2 ">
              {" "}
              <FaGoogle className="text-yellow-800"></FaGoogle> Login With
              Google
            </button>
            <button className="btn btn-outline">
              {" "}
              <FaGithub className="text-black"></FaGithub> Login With Github
            </button>
          </div>
        </div>

        {/* Find with us */}

        <div className="mt-10">
          <h1 className="text-xl font-bold">Find Us On</h1>
          <div className="mt-5">
            <a
              className="flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-t-lg"
              href=""
            >
              <FaFacebook className="text-blue-800"></FaFacebook> Facebook
            </a>
            <a
              className="flex items-center gap-2 border border-y-0 border-gray-600 px-3 py-2"
              href=""
            >
              <FaTwitter className="text-sky-800"></FaTwitter> Twitter
            </a>
            <a
              className="flex items-center gap-2 border border-gray-800 px-3 py-2 rounded-b-lg"
              href=""
            >
              <FaInstagram className="text-pink-800"></FaInstagram> Instagram
            </a>
          </div>
        </div>

        {/* Q-zone */}

        <div>
          <h1 className="text-xl font-bold mt-10">Q-Zone</h1>
          <div>
            <img src={qZone1} alt="" />
          </div>
          <div>
            <img src={qZone2} alt="" />
          </div>
          <div>
            <img src={qZone3} alt="" />
          </div>
        </div>

        {/* Ad */}

        <div className="bg-cover bg-no-repeat p-20 text-white space-y-5" style={{ backgroundImage: `url(${bg1})`}}>
          <h1 className='font-bold text-xl'>Create an Amazing Newspaper</h1>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className='btn btn-secondary'>Learn More</button>
        </div>
      </div>
    );
};

export default RightSideNavbar;