import Categories from '../Mock/Restaurentsdata.json';
import StarIcon from '@mui/icons-material/Star';

const Restaurent = () => {

    const cards = Categories?.data?.cards || [];

    const burger = cards.length > 0 
        ? cards.flatMap(card => card.card?.card?.try?.infoWithStyle?.restaurants || []) 
        : [];

    return (
        <>
            <div className='w-full sm:w-[540px] md:w-[720px] lg:w-[1170px] mx-auto p-4'>
                <div className='flex flex-wrap -m-2'>
                    {burger.map(item => (
                        <div key={item.info.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
                            <div className='bg-white rounded shadow-md h-full flex flex-col'>
                                <img 
                                    className='w-full h-[180px] object-cover rounded-t-xl'
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                                    alt={item.info.accessibility?.altText || 'Restaurant Image'}
                                />
                                <div className='p-2 flex flex-col flex-grow'>
                                    <div className='font-bold text-[18px]'>{item.info.name}</div>
                                    <div className='font-semibold flex items-center mt-1'>
                                        <StarIcon fontSize="small" />
                                        <span className='ml-1'>{item.info.avgRating}</span>
                                        <span className='ml-2 font-semibold'>•{item.info.sla.deliveryTime} min</span>
                                    </div>            
                                    <div className='mt-1'>
                                        {item.info.cuisines.join(', ')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Restaurent;
