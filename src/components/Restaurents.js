
import Categories from '../Mock/Restaurentsdata.json';
// import StarIcon from '@mui/icons-material/Star';

const Restaurent = () => {
//     const items = Categories.card.card.imageGridCards.info; 
//   return (
    // <>
    // <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[1170px] mx-auto p-4 '>
    //   <div className='flex text-[24px] font-bold text-[#18202C]'>
    //   Restaurants with online food delivery in Indore
    //   </div>
    //   <div className="category-list flex justify-between overflow-hidden">
    //     {items.map((category, index) => (
    //       <div key={index} className="category-item ">
    //         <div className='text-white font-bold ml-2 text-[22px] mb-4 bottom-0  absolute'>{category.offer}</div>
    //         <img className='h-[214px] w-[270px] py-3 rounded-[24px]' src={category.cloudinaryImageId} alt={category.name} />
    //         <div className='flex-col ml-3 '>
    //         <div className='font-bold text-[18px] '>{category.restaurant}</div>
    //         <div className='font-semibold'><StarIcon fontSize="small "/>{category.rating}<span className='ml-2 font-semibold'>•{category.delivery_time}</span></div>            
    //         <div>
    //                 {
    //                     category.imageGridCards.map((name) =>(name +" "))
    //                 }
    //             </div>
    //         <div>
    //             ,{category.location}</div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // </>
      const cards = Categories?.data?.cards || [];
    
      // Assuming you want to access the first card's imageGridCards.info
      const items = cards.length > 0 ? cards[0]?.card?.card?.imageGridCards?.info : [];
    console.log({items});
    return (
      <div className="grid-container">
        {items.map(item => (
          <div key={item.id} className="grid-item">
            <img 
              src={`https://cdn.example.com/${item.imageId}`} 
              alt={item.accessibility.altText} 
            />
            <a href={item.action.link} target="_blank" rel="noopener noreferrer">
              {item.action.text}
            </a>
          </div>
        ))}
      </div>
    );
}

export default Restaurent;