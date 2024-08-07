import React, { useState } from 'react';
import Categories from '../Mock/HeadMenu.json';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Head = () => {
  const categoryList = Categories.categories;
  const [startIndex, setStartIndex] = useState(0);
  const visibleImagesCount = 7;
  const step = 3;

  const handlePrevClick = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - step, 0));
  };

  const handleNextClick = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + step, categoryList.length - visibleImagesCount));
  };

  return (
    <>
    <div className='pt-[90px] w-full sm:w-[540px] md:w-[720px] lg:w-[1170px] mx-auto p-4 relative'>
      <div className='float-right flex'>
        <div className='rounded-full bg-gray-400 items-center justify-center p-1'><button onClick={handlePrevClick}><ArrowBackIcon /></button></div>
        &nbsp;        &nbsp;
        <div  className='rounded-full bg-gray-400 items-center justify-center p-1'><button onClick={handleNextClick}><ArrowForwardIcon /></button></div>
      </div>
      <div className='flex text-[24px] font-bold text-[#18202C]'>
        What's on your mind?
      </div>
      <div className="category-list flex  overflow-hidden">
        {categoryList.slice(startIndex, startIndex + visibleImagesCount).map((category, index) => (
          <div key={index} className="category-item">
            <img className='h-[214px] w-[230px]' src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
   
    </>
  );
}

export default Head;
