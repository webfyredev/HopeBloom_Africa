import logoImg from '../images/logo.webp'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { SiX } from "react-icons/si";

export default function Footer(){
    const dates = new Date().getFullYear();
    return(
        <>
            <footer className="flex flex-col bg-[#111827] py-10 px-5 md:px-10 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="flex flex-col py-5">
                        <div className='flex items-center cursor-pointer'>
                            
                            <img src={logoImg} className='w-12 h-12 mt-3 ml-[-4%]'/>
                            <Link to="/">
                                <h3 className='text-xl font-bold text-white ml-[-5%]'>
                                    HOPEBLOOM AFRICA
                                </h3>
                            </Link>
                        </div>
                        <p className='text-[13px] text-gray-300 text-justify mb-2'>
                            Empowering Africa communities through education, healthcare, women empowerment, 
                            and environmental sustainability.Together, we bloom for a brighter future.
                        </p>
                        <p className='text-[13px] text-gray-300 text-justify'>
                            We are committed to creating lasting change that uplifts lives 
                            and strengthens communities across the continent.
                        </p>
                        <div className='flex items-center space-x-3 mt-3'>
                            <Link to="">
                                <SiX  className='w-9 h-9 p-2.5 rounded-md text-gray-400 cursor-pointer bg-[#1F2937] hover:bg-transparent hover:text-white transition-all duration-300'/>
                            </Link>
                            <Link to="">
                                <FaInstagram  className='w-9 h-9 p-2.5 rounded-md text-gray-400 cursor-pointer bg-[#1F2937] hover:bg-transparent hover:text-white transition-all duration-300'/>
                            </Link>
                            <Link to="">
                                <FaLinkedinIn  className='w-9 h-9 p-2.5 rounded-md text-gray-400 cursor-pointer bg-[#1F2937] hover:bg-transparent hover:text-white transition-all duration-300'/>
                            </Link> 
                        </div>
                    <div>
                    </div>
                    </div>
                    <div className='flex flex-col w-[70%] md:ml-40'>
                        <h3 className='mt-5 font-semibold text-white mb-3 text-left'>
                            Quick Links
                        </h3>
                        <ul className='flex flex-col space-y-4'>
                            <li className='text-gray-300 text-[13px] hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <Link to="/about">
                                    About Us
                                </Link>
                                
                            </li>
                            <li className='text-gray-300 text-[13px] hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <Link to="/programs">
                                    Our Programs
                                </Link>
                            </li>
                            <li className='text-gray-300 text-[13px] hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <Link to="/getInvolved">
                                    Get Involved
                                </Link>
                            </li>
                            <li className='text-gray-300 text-[13px] hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <Link to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className='text-gray-300 text-[13px] hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <Link to="/contacts">
                                    Contacts
                                </Link>
                            </li>
                            <li className='text-gray-300 text-[13px] hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <Link to="/donate">
                                    Donate
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-left'>
                        <h3 className='mt-5 font-semibold text-white mb-3 text-left'>
                            Contacts
                        </h3>
                        <ul className='flex flex-col'>
                            <li className='text-gray-300 text-[13px] flex items-center py-2 hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <FaEnvelope  className='mr-2'/> 
                                <a href='mailto:hopebloomafrica@gmail.com'>
                                    hopebloomafrica@gmail.com
                                </a>
                            </li>
                            <li className='text-gray-300 text-[13px] flex items-center py-2 hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <FaPhoneAlt  className='mr-2'/> 
                                <a href="tel:+2349131580378">
                                    +234 913 1580 378
                                </a>
                            </li>
                            <li className='text-gray-300 text-[13px] flex items-center py-2 hover:text-gray-100 hover:font-semibold hover:transition-all duration-300'>
                                <FaMapMarkerAlt  className='mr-2'/> 
                                <Link to="#">
                                    No 30 Old Road Lagos, Nigeria
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr  className='mt-5 text-gray-800'/>
                <div className='flex justify-between text-[13px] mt-2 text-gray-500'>
                    <p className='text-[9px] md:text-sm'>&copy; {dates} <Link to="mailto:hopebloomafrica@gmail.com" className='hover:text-white transition-all'>HopeBloom_Africa</Link>. All rights reserved.</p>
                    <Link to="mailto:oyinwebworks@gmail.com" className='text-[9px] md:text-sm text-gray-600 hover:text-white transition-all'>
                        oyinwebworks@gmail.com
                    </Link>
                </div>
            </footer>
        </>
    );
}