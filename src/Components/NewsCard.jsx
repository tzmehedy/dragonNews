import React from 'react';
import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { FaStar, FaEye } from "react-icons/fa";



const NewsCard = ({ singleNews }) => {

    const { author, title, image_url, details, rating, total_view } =
      singleNews;

  return (
    <div className="card bg-base-100 w-full shadow-xl p-2">
      <div className="bg-gray-200 p-2 flex justify-between items-center rounded-lg">
        <div className="flex space-x-3">
          <img src={author.img} className="h-10 w-10 rounded-full" alt="" />
          <div>
            <p className="font-bold">{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button>
            <FaRegBookmark></FaRegBookmark>
          </button>
          <button>
            <CiShare2></CiShare2>
          </button>
        </div>
      </div>
      <Link className="font-bold my-2">{title}</Link>
      <figure>
        <img src={image_url ? image_url : "Not Found"} />
      </figure>
      <div className="mt-5 p-2">
        <p className="text-justify truncate">{details}</p>
        <Link className="text-orange-500">Read More</Link>
      </div>
      <div className='flex justify-between'>
        <div className="text-orange-500 flex items-center gap-2 p-2">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <p className="font-bold text-gray-600">{rating.number}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <FaEye></FaEye>
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;