import Categories from '../Mock/Restaurentsdata.json';
// import StarIcon from '@mui/icons-material/Star';

const Restaurent = () => {
    // Access cards array safely
    const cards = Categories?.data?.cards || [];

    // Extract burger data with guards
    const burger = cards.length > 0 
        ? cards.flatMap(card => card.card?.card?.try?.infoWithStyle?.restaurants || []) 
        : [];

    // Extract items data with guards
    const items = cards.length > 0 
        ? cards.flatMap(card => card.card?.card?.try?.infoWithStyle?.restaurants || []) 
        : [];

    console.log(cards, "Data");
    console.log(burger, "BurgerData");

    return (
        <>
            <div className="grid-container">
                {burger.map(item => (
                    <div key={item.info.id} className="grid-item">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                            alt={item.info.accessibility?.altText || 'Restaurant Image'}
                        />
                        <a href={item.info.action?.link || '#'} target="_blank" rel="noopener noreferrer">
                            {item.info.action?.text || 'View More'}
                        </a>
                    </div>
                ))}
            </div>
            <div className="grid-container">
                {items.map(item => (
                    <div key={item.id} className="grid-item">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.cloudinaryImageId}`}
                            alt={item.accessibility?.altText || 'Restaurant Image'}
                        />
                        {/* <a href={item.action?.link || '#'} target="_blank" rel="noopener noreferrer">
                            {item.action?.text || 'View More'}
                        </a> */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Restaurent;
