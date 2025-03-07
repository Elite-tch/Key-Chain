import { NavLink } from 'react-router-dom';
import { MoveUpRight } from 'lucide-react';
export default function AboutHeroPage (){
    return(
        <div className="bg-nav pt-[40%] pb-[5%] overflow-hidden  md:pt-[12%]">
          <div className='w-[90%] mx-auto items-center flex md:flex-row flex-col justify-between md:gap-24 gap-12'>
           <div  data-aos="fade-right" className='flex flex-col  gap-4 md:w-[60%]'>
           <h1 className="text-white text-4xl  md:text-7xl font-bold md:leading-[82px]"> Simplifying Crypto Transactions.</h1>
    <p className='md:text-gray-300 text-gray-200'>Cryptocurrency adoption struggles with complexity, poor usability, and limited real-world use. Key-chain simplifies transactions, making them secure, fast, and seamless. We’re turning digital currencies into a practical tool for everyday commerce.</p>
    <NavLink
            to="/signup"
            className='  bg-[#FAD129] text-gray-700 mt-4 md:mt-4 px-6 py-4 rounded-lg hover:bg-yellow-500 flex items-center gap-2 w-fit'
          >
            Get started--it&apos;s free  <MoveUpRight className='size-4'/>
          </NavLink>            
            </div> 
            <div data-aos="fade-left" className='overflow-hidden'>
                <img src='/img/about.png' className='w-[100%] md:w-[400px] mx-auto' />
            </div>
            
            </div> 
            
               </div>
    )
}