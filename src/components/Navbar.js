import CustomWidthTooltip from './Common/CustomWidthTooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import HelpIcon from '@mui/icons-material/CatchingPokemon';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import OfferIcon from '@mui/icons-material/LocalOfferOutlined';
function Navbar() {
    const ltext=`Good food is always cooking! 
    Go ahead, order some yummy items from the menu`;
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
                    <li><WorkIcon style={{marginRight:'5px'}}/>Swiggy Corporate</li>
                    <li><SearchIcon style={{marginRight:'5px'}}/>Search</li>
                    <li><OfferIcon style={{marginRight:'5px'}} />Offers</li>
                    <li><HelpIcon style={{marginRight:'5px'}}/>Help</li>
                    <li><PersonIcon  style={{marginRight:'5px'}}/>Sign-in</li>
                    <li><ShoppingCartIcon  sx={{ color: '#3d4152' }} /> <CustomWidthTooltip  title ={<div className='p-5 border-t-5  border-red-600'><div className='text-xl text-[#3d4152]'>Card Empty</div><p className='text-gray-400'>{ltext}</p></div>} arrow >Cart </CustomWidthTooltip></li>
                </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
