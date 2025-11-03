import Footer from "../components/footer";
import HeadComponents from "../components/headComponents";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import blogImg from '../images/ngo/bg (2).webp'
import { featured_stories, blogLinks, blogData } from "../data/projectData";
import { FaUser, FaCalendar, FaClock } from "react-icons/fa";
import { buttonHoverEffects, cardHoverEffects, cardScrollEffects, scrollLeftEffect } from "../animations/effect";
import { motion } from "framer-motion";
import BottomCTA from "../components/bottomCta";
import { useEffect } from "react";

export default function Blog(){
    useEffect(()=>{
        document.title = 'Blogs | HopeBloom_Africa'
    }, []);
    return (
        <>
            <NavBar />
            <Heading 
            image = {blogImg}
            page = 'Blog'
            link = '/blog'/>
            <HeadComponents 
            title_1 = 'Stories &'
            title_2 = 'Updates'
            text  = 'Discover inspiring stories from the communities we serve, program updates, and insights into our mission to transform Africa communities'
            />
            <div className="w-full flex flex-col md:px-10 py-5">
            <h3 className="text-2xl font-bold ml-10">
                Featured Stories
            </h3>
            <motion.div {...scrollLeftEffect} className="w-full grid grid-cols-1 sm-grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5 overflow-hidden">
                {featured_stories.map((stories) =>(
                    <motion.div {...cardHoverEffects}  className="md:p-5 flex flex-col">
                        <img src={stories.image} className="w-full h-75 object-cover rounded-t-md shadow-md"/>
                        <div className="w-full p-3 shadow-md">
                            <div className="w-65 flex justify-between p-1">
                                <div className="flex items-center">
                                    <FaUser  className="w-2 h-2 text-gray-500"/>
                                    <p className="text-[10px] ml-1">
                                        {stories.author}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <FaCalendar  className="w-2 h-2 text-gray-500"/>
                                    <p className="text-[10px] ml-1">
                                        {stories.dates}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <FaClock  className="w-2 h-2 text-gray-500"/>
                                    <p className="text-[10px] ml-1">
                                        {stories.time} min read
                                    </p>
                                </div>
                            </div>
                            <h3 className="mt-1 text-sm font-semibold text-gray-900 mb-3">
                                {stories.title}
                            </h3>
                            <p className="text-[12px] mb-2">
                                {stories.text}
                            </p>
                            <motion.button {...buttonHoverEffects} className="border-1 border-blue-600 px-7 text-xs font-semibold py-2 text-blue-600 rounded-md cursor-pointer mb-3">
                                Read More 
                            </motion.button>
                        </div>
    
                    </motion.div>
                ))}
            </motion.div>
            </div>
            <div className="hidden lg:flex w-full py-3 px-15 my-3 bg-white overflow-hidden">
                {blogLinks.map((link) =>(
                    <div className="flex">
                        <button className="border-1 border-gray-300 px-4 py-1.5 text-xs rounded-md text-gray-500 mr-3 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-none transisition-all duration-300">
                            {link}
                        </button>
                    </div>
                ))}    
            </div>

            <div className="w-full flex flex-col md:px-10 lg:px-15 mt-5 py-5 overflow-hidden">
                <h3 className="font-bold text-2xl ml-5">
                    Latest Updates
                </h3>
                <div className="w-[95%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-5 overflow-hidden">
                    {blogData.map((blog) =>(
                        <motion.div {...cardScrollEffects} className="flex flex-col mb-5">
                            <img src={blog.image} className="object-cover rounded-t-md"/>
                            <div className="w-full flex flex-col p-3 bg-white shadow-md rounded-b-md">
                                <div className="w-53 flex justify-between p-1">
                                <div className="flex items-center">
                                    <FaUser  className="w-2 h-2 text-gray-500"/>
                                    <p className="text-[10px] ml-1">
                                        {blog.author}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <FaCalendar  className="w-2 h-2 text-gray-500"/>
                                    <p className="text-[10px] ml-1">
                                        {blog.date}
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-sm font-semibold mb-2">
                                {blog.title}
                            </h3>
                            <p className="text-[12px] mb-2">
                                {blog.text}
                            </p>
                            <div className="flex items-center w-full justify-between mt-2">
                            <p className="text-xs">
                                {blog.time} min read
                            </p>
                            <h3 className="text-xs font-semibold text-blue-600">
                                Read More
                            </h3>
                            </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <BottomCTA 
            title = 'Stay Updated'
            text  = 'Subscribe to our newsletter to recieve the latest stories, program updates, and ways to get involved.'
            btn_text = 'Subscribe to Newsletter'/>
            <Footer />
        </>
    );
}