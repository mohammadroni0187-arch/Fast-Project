import  { useState } from 'react';
import Logo from '../assets/logo-text.png'
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = () => {
  const [isMeno, setIsMeno] =useState(false);
  return (
   <nav className='fixed top-0 left-0 w-full h-16 z-50 bg-white pt-2'>
   <div className='container mx-auto flex justify-between'>
        <button
  onClick={() => setIsMeno(!isMeno)}
  className="md:hidden text-3xl"
>
  <CiMenuBurger />
</button>
     <a href=""> <img src={Logo} alt="" className='flex md:flex items-center p-5'/></a>
      
        <ul className='hidden md:flex gap-6 items-center font-bold'>
          <li className='text-red-400'>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='gap-9'>

          <button className="btn text-black border-none m-5">Sign In</button>
          <button className="btn bg-pink-600 text-white rounded-4xl ">Sign Up</button>
        </div>


{isMeno && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t shadow-md">
    <div className="flex flex-col gap-4 p-6">
      <a href="">Home</a>
      <a href="">Technologies</a>
      <a href="">Projects</a>
      <a href="">About</a>
      <a href="">Contact</a>
    </div>
  </div>
)}
        </div>
      </nav>
  );
};

export default Navbar;