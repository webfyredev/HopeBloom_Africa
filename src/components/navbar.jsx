import { useState } from 'react';
import logoImg from '../images/logo.webp'
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NavscrollLeftEffect, scrollLeftEffect } from '../animations/effect';
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <nav className="w-full h-auto flex justify-between md:px-10 relative items-center">
                <NavLink to="/">
                    <div className="flex items-center text-blue-500 font-bold">
                        <img src={logoImg} className='w-12 h-12 mt-2'/>
                        <h3 className='ml-[-5%]'>
                        HOPEBLOOM AFRICA
                        </h3>
                    </div>
                </NavLink>
                <ul className='hidden lg:flex flex-row items-center space-x-2'>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all'>
                        <NavLink to="/" className={({isActive}) => `${isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all duration-500'>
                        <NavLink to="/about" className={({isActive}) => `${isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
                            About Us
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all duration-500'>
                        <NavLink to="/programs" className={({isActive}) => `${isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
                            Programs
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all'>
                        <NavLink to="/getInvolved" className={({isActive}) => `${isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
                            Get Involved
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all'>
                        <NavLink to="/blog" className={({isActive}) => `${isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
                            Blog
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all'>
                        <NavLink to="/contacts" className={({isActive}) => `${isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}`}>
                            Contact
                        </NavLink>
                    </li>
                    <button className='px-6 py-2 text-[13px] rounded-sm bg-blue-500 font-semibold text-white cursor-pointer hover:bg-blue-600 transition-all'>
                        <NavLink to="/donate">
                            Donate Now
                        </NavLink>
                    </button>
                </ul>
                <button onClick={()=> setIsOpen(!isOpen)} className='lg:hidden flex w-11 rounded-sm h-10 mr-5 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-100 transition-all'>
                    {isOpen ? <FaTimes size={20} /> : <FaBars  size={20}/>}
                </button>
                {isOpen && (
                    <motion.div {...NavscrollLeftEffect} className='lg:hidden flex flex-col absolute w-full h-auto z-50 bg-white left-0 top-14.5 shadow-lg'>
                        <ul className='flex flex-col space-y-3 p-5'>
                            <li className='w-full py-2 px-3 text-[13px] hover:rounded-sm flex hover:bg-blue-100 text-gray-600 hover:text-blue-500 hover:font-semibold transition-all bg-[#F9FAFB] cursor-pointer'>
                                <NavLink to="/" className="w-full h-full cursor-pointer">
                                    Home
                                </NavLink>
                            </li>
                            <li className='w-full py-2.5 px-3 text-[13px] hover:rounded-sm flex hover:bg-blue-100 text-gray-600 hover:text-blue-500 hover:font-semibold transition-all bg-[#F9FAFB] cursor-pointer'>
                                <NavLink to="/about" className="w-full h-full cursor-pointer">
                                    About Us
                                </NavLink>
                            </li>
                            <li className='w-full py-2.5 px-3 text-[13px] hover:rounded-sm flex hover:bg-blue-100 text-gray-600 hover:text-blue-500 hover:font-semibold transition-all bg-[#F9FAFB] cursor-pointer'>
                                <NavLink to="/programs" className="w-full h-full cursor-pointer">
                                    Programs
                                </NavLink>
                            </li>
                            <li className='w-full py-2.5 px-3 text-[13px] hover:rounded-sm flex hover:bg-blue-100 text-gray-600 hover:text-blue-500 hover:font-semibold transition-all bg-[#F9FAFB] cursor-pointer'>
                                <NavLink to="/getInvolved" className="w-full h-full cursor-pointer">
                                    Get Involved
                                </NavLink>
                            </li>
                            <li className='w-full py-2.5 px-3 text-[13px] hover:rounded-sm flex hover:bg-blue-100 text-gray-600 hover:text-blue-500 hover:font-semibold transition-all bg-[#F9FAFB] cursor-pointer'>
                                <NavLink to="/blog" className="w-full h-full cursor-pointer">
                                    Blogs
                                </NavLink>
                            </li>
                            <li className='w-full py-2.5 px-3 text-[13px] hover:rounded-sm flex hover:bg-blue-100 text-gray-600 hover:text-blue-500 hover:font-semibold transition-all bg-[#F9FAFB] cursor-pointer'>
                                <NavLink to="/contacts" className="w-full h-full cursor-pointer">
                                    Contacts
                                </NavLink>
                            </li>
                            <button className='h-10 rounded-md cursor-pointer text-sm font-semibold bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all'>
                                <NavLink to="/donate">
                                    Donate Now
                                </NavLink>
                            </button>
                        </ul>
                    </motion.div>
                )}
            </nav>
        </>
    );
}