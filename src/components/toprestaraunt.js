import React, { useState } from 'react';
import Categories from '../Mock/toprestaraunt.json';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

const Toprestaraunt = () => {

  const [startIndex, setStartIndex] = useState(0);
  const visibleImagesCount = 4;
  const step = 2;

  const handlePrevClick = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - step, 0));
  };

  const handleNextClick = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + step, Categories.length - visibleImagesCount));
  };
  return (
    <>
    <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[1170px] mx-auto p-4 '>
      <div className='float-right flex'>
        <div className='rounded-full bg-gray-400 items-center justify-center p-1'><button onClick={handlePrevClick}><ArrowBackIcon /></button></div>
        &nbsp;        &nbsp;
        <div  className='rounded-full bg-gray-400 items-center justify-center p-1'><button onClick={handleNextClick}><ArrowForwardIcon /></button></div>
      </div>
      <div className='flex text-[24px] font-bold text-[#18202C]'>
      Top restaurant chains in Indore
      </div>
      <div className="category-list flex justify-between overflow-hidden">
        {Categories.slice(startIndex, startIndex + visibleImagesCount).map((category, index) => (
          <div key={index} className="category-item ">
            <div className='text-white font-bold ml-2 text-[22px] mb-4 bottom-0  absolute'>{category.offer}</div>
            <img className='h-[214px] w-[270px] py-3 rounded-[24px]' src={category.image} alt={category.name} />
            
            <div className='flex-col ml-3 '>
            <div className='font-bold text-[18px] '>{category.restaurant}</div>
            <div className='font-semibold'><StarIcon fontSize="small "/>{category.rating}<span className='ml-2 font-semibold'>•{category.delivery_time}</span></div>            
            <div>
                    {
                        category.cuisine.map((name) =>(name +" "))
                    }
                </div>
            <div>
                ,{category.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Toprestaraunt;