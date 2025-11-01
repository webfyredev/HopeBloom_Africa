import logoImg from '../images/logo.webp'
import { NavLink } from 'react-router-dom';
export default function NavBar(){
    return(
        <>
            <nav className="w-full h-auto flex justify-between md:px-10">
                <NavLink>
                    <div className="flex items-center text-blue-500 font-bold">
                        <img src={logoImg} className='w-12 h-12 mt-2'/>
                        <h3 className='ml-[-5%]'>
                        HOPEBLOOM AFRICA
                        </h3>
                    </div>
                </NavLink>
                <ul className='hidden lg:flex flex-row items-center space-x-2'>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all'>
                        <NavLink to="/">

                            Home
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all duration-500'>
                        <NavLink to="/about">
                            About Us
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all duration-500'>
                        <NavLink to="/programs">
                            Programs
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all'>
                        <NavLink to="/getInvolved">
                            Get Involved
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all'>
                        <NavLink to="/blog">
                            Blog
                        </NavLink>
                    </li>
                    <li className='px-5 py-2 text-[13px] hover:rounded-sm text-gray-600 hover:text-blue-500 hover:font-semibold transition-all'>
                        <NavLink to="/contacts">
                            Contact
                        </NavLink>
                    </li>
                    <button className='px-6 py-2 text-[13px] rounded-sm bg-blue-500 font-semibold text-white cursor-pointer hover:bg-blue-600 transition-all'>
                        <NavLink to="/donate">
                            Donate Now
                        </NavLink>
                    </button>
                </ul>
            </nav>
        </>
    );
}