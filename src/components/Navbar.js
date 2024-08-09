import Tooltip from '@mui/material/Tooltip';

function Navbar() {
    return (
        <>
            <div className="h-[80px] top-0 left-0 right-0 flex justify-evenly  fixed shadow-xl w-full z-50 bg-white">
                <div className='flex sm:w-[540px] md:w-[720px] lg:w-[1170px] mx-auto items-center justify-center'>
                <img
                    className="h-[49px] w-[34px] mr-9"
                    alt="Header-Logo"
                    src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
                />

                <div className="hover:text-orange-600 text-[#3d4152] font-bold text-[14px]">
                    Others
                </div>
                <ul className="flex justify-evenly w-full">
                    <li>Swiggy Corporate</li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign-in</li>
                    <li> <Tooltip   title ="Trial">Cart </Tooltip></li>
                </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
