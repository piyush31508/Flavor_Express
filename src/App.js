import './App.css';
import Navbar from './components/Navbar';
import Head from './components/Head';
import Toprestaraunt from './components/toprestaraunt';
import Restaurent from './components/Restaurents';
function App() {
  return (
    <>
    <div className=''>
    <Navbar />
    <Head />
    <div className=' sm:w-[540px] md:w-[720px] lg:w-[1170px] mx-auto border-[1px] my-8'/>
    <Toprestaraunt />
    <div className=' sm:w-[540px] md:w-[720px] lg:w-[1170px] mx-auto border-[1px] my-8'/>
    <Restaurent />
    </div>
    </>
  );
}

export default App;
