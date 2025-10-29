import logoImg from '../images/logo.webp'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
export default function Footer(){
    const dates = new Date().getFullYear();
    return(
        <>
            <nav className="flex flex-col bg-[#111827] py-10 px-10 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="flex flex-col py-5">
                        <div className='flex items-center cursor-pointer'>
                            
                            <img src={logoImg} className='w-12 h-12 mt-3'/>
                            <Link to="/">
                                <h3 className='text-xl font-bold text-white ml-[-3%]'>
                                    HOPEBLOOM AFRICA
                                </h3>
                            </Link>
                        </div>
                        <p className='text-[13px] text-gray-300 text-justify mb-2'>
                            Empowering Africa communities through education, healthcare, women empowerment, 
                            and environmental sustainability.Together, we bloom for a brighter future.
                        </p>
                        <p className='text-[13px] text-gray-300 text-justify'>
                            Empowering Africa communities through education, healthcare, women empowerment, 
                            and environmental sustainability.Together, we bloom for a brighter future.
                        </p>
                        <div>

                        </div>
                    </div>
                    <div className='flex flex-col w-[70%] md:ml-40'>
                        <h3 className='mt-5 font-semibold text-white mb-3 text-left'>
                            Quick Links
                        </h3>
                        <ul className='flex flex-col space-y-4'>
                            <li className='text-gray-300 text-[13px] hover:text-gray-100 hover:font-semibold hover:transition-all'>
                                <Link to="/about">
                                    About Us
                                </Link>
                                
                            </li>
                            <li className='text-gray-300 text-[13px]'>
                                Our Programs
                            </li>
                            <li className='text-gray-300 text-[13px]'>
                                Get Involved
                            </li>
                            <li className='text-gray-300 text-[13px]'>
                                Blog
                            </li>
                            <li className='text-gray-300 text-[13px]'>
                                Donate
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-left'>
                        <h3 className='mt-5 font-semibold text-white mb-3 text-left'>
                            Contacts
                        </h3>
                        <ul className='flex flex-col'>
                            <li className='text-gray-300 text-[13px] flex items-center py-2'>
                                <FaEnvelope  className='mr-2'/> 
                                <Link to="mailto:hopebloomafrica@gmail.com">
                                    hopebloomafrica@gmail.com
                                </Link>
                            </li>
                            <li className='text-gray-300 text-[13px] flex items-center py-2'>
                                <FaPhoneAlt  className='mr-2'/> 
                                <Link to="phoneto:+2349131580378">
                                    +234 913 1580 378
                                </Link>
                            </li>
                            <li className='text-gray-300 text-[13px] flex items-center py-2'>
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
                    <p>&copy; HopeBloom_Africa.All rights reserved.</p>
                    <Link className='text-gray-600'>
                        webfyre@gmail.com
                    </Link>
                </div>
            </nav>
        </>
    );
}