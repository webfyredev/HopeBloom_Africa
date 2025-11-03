import NavBar from "../components/navbar";
import HeroSlider from "../components/heroSection";
import {FaHandsHelping, FaEye, FaBullseye, FaHeart, FaAward, FaHandshake, FaPeopleCarry, FaLightbulb, FaChartLine, FaArrowRight,FaQuoteRight, FaStar, FaMedal, FaMapMarkerAlt} from 'react-icons/fa'
import {GiPlantSeed, GiEarthAfricaEurope} from 'react-icons/gi'
import {IoEyeOutline} from 'react-icons/io5'
import Footer from "../components/footer";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer'
import { scrollUpEffect, scrollUpDelayEffect,scrollLeftEffect, cardHoverEffects, scrollRightEffect, buttonHoverEffects} from "../animations/effect";
import { motion } from "framer-motion";
import { choose, stats, testimonial, programs, process, approach, impacts1, principles, impact2, mission} from "../data/projectData";
import { useEffect } from "react";

export default function Home(){
    useEffect(() =>{
        document.title = 'HopeBloom_Africa'
    }, []);
    const {ref : sectionOneRef, inView:sectionOneInView} = useInView({
        triggerOnce : false,
        threshold : 0.4,
    });
    const {ref : sectionTwoRef, inView : sectionTwoInView} = useInView({
        triggerOnce : false,
        threshold : 0.4
    })
    return(
        <>
            <NavBar />
            <HeroSlider />
            <div className="w-full bg-white h-auto flex flex-col items-center py-10 mt-5 overflow-hidden">
                <motion.h2 {...scrollUpEffect} className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold">
                    Our <span className="text-blue-600">Mission </span> &amp; <span className="text-yellow-400">Vision</span>
                </motion.h2>
                <motion.p {...scrollUpDelayEffect} className="mt-3 lg:w-200 md:w-180 w-85 text-center text-xs md:text-sm text-gray-500">
                    Bloom_Africa is dedicated to creating sustainable change across African 
                    communities through comprehensive programs that address education, 
                    healthcare, women empowerment, and environmental sustainability. 
                    We belive in empowering communities to become self-sufficient and 
                    thrive independently.
                </motion.p>
                <motion.div {...scrollLeftEffect} className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
                    {mission.map((data) => (
                        <motion.div {...cardHoverEffects} key={data.id} className="flex flex-col items-center shadow-md rounded-sm py-5 px-10 md:px-5 mb-5">
                            <data.icon className={`w-15 h-15 p-3.5 rounded-full ${data.style}`} />
                            <h3 className="font-semibold mt-3 text-sm">
                                {data.title}
                            </h3>
                            <p className="text-[11px] text-center my-2">
                                {data.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.p {...scrollUpEffect} className="text-gray-900 font-bold mt-15 text-2xl">
                  Our <span className="text-blue-600">Core Principles</span>
                </motion.p>
                <motion.div {...scrollLeftEffect} className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 md:px-10 px-5 lg:px-20 gap-5 mt-3">
                    {principles.map((data) =>(
                        <motion.div {...cardHoverEffects} className="flex flex-col items-center p-5 bg-[#F9FAFB] rounded-md">
                            <data.icon className={`w-12 h-12 rounded-full p-3 ${data.color}`} />
                            <h3 className="text-sm font-semibold mt-2">
                                {data.title}
                            </h3>
                            <p className="text-center text-gray-500 text-xs my-1">
                                {data.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="w-full mt-15 flex flex-col items-center">
                    <div className="w-full md:w-[87%] lg:h-80 h-auto bg-[#F9FAFB] rounded-md flex flex-col items-center p-5">
                        <motion.h3 {...scrollUpEffect} className="text-gray-900 text-2xl font-bold">
                            Our <span className="text-blue-600">Impact</span> So Far
                        </motion.h3>
                        <div ref={sectionTwoRef} className="w-full md:w-[80%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mt-5">
                            {impacts1.map((impact) => (
                                <motion.div {...scrollUpEffect} className="flex flex-col items-center">
                                    <h2 className={`md:text-3xl lg:text-4xl font-bold text-${impact.color}`}>
                                        {sectionTwoInView ? <CountUp end={impact.value} duration={5}/> : 0}{impact.data}
                                        {/* {impact.value} */}
                                    </h2>
                                    <p className="text-gray-500 font-semibold text-[11px] my-1">
                                        {impact.title}
                                    </p>
                                    <p className="text-[12px] text-gray-500">
                                        {impact.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div {...scrollLeftEffect} className="w-full md:w-[90%] h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:p-5">
                            {impact2.map((impact) => (
                                <motion.div {...cardHoverEffects} className="h-auto bg-white rounded-md flex flex-col items-center p-5">
                                    <h3 className={`font-bold text-${impact.color}`}>
                                        {impact.value}
                                    </h3>
                                    <p className="text-[10px] md:text-[11px] text-gray-500 text-center">
                                        {impact.text}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div> 
            <div className="w-full flex flex-col items-center py-10 bg-white mt-5 overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold text-gray-900">
                    Our <span className="text-blue-600">Approach</span> to Change
                </motion.h3>
                <motion.p {...scrollUpDelayEffect} className="mt-3 w-90 md:w-150 text-xs md:text-sm text-center text-gray-500">
                    We belive sustainable development requires a holistic that combines community engagement, innovative solutions, and 
                    long-term thinking. Here's how we make lasting impact.
                </motion.p>
                <div className="lg:w-[80%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-5">
                {approach.map((data) =>(
                    <motion.div {...scrollLeftEffect} {...cardHoverEffects} className="lg:w-[90%] w-full p-5 flex flex-row bg-[#F9FAFB] rounded-md">
                        <data.icon className={`w-12 h-12 p-3 rounded-md ${data.color}`} />
                        <div className="w-full h-auto flex flex-col p-2">
                            <h3 className="text-gray-900 font-semibold text-[16px]">
                                {data.title}
                            </h3>
                            <p className="text-gray-400 text-[12px] mt-3">
                                {data.text}
                            </p>
                            <ul className="flex flex-col space-y-3 mt-3 py-3">
                                {data.values.map((data) => (
                                    <li className="text-[10px] text-gray-400 flex"><FaArrowRight className="w-2 h-2 mt-1 mr-1 text-blue-600"/>{data}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div> 
                ))}
                </div>
            </div>
            <div className="w-full flex flex-col items-center py-10 bg-[#F9FAFB] overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold text-gray-900">
                    Our <span className="text-blue-600">Implemenation</span> Process
                </motion.h3>
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mt-5">
                    {process.map((data) => (
                        <motion.div {...scrollLeftEffect} className={`p-5 md:p-3 flex flex-col bg-white rounded-md`}>
                            <p className="font-bold text-xs text-blue-600">
                                {data.step}
                            </p>
                            <h3 className="text-sm font-semibold text-gray-900 my-2">
                                {data.title}
                            </h3>
                            <p className="text-xs">
                                {data.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col items-center py-10 bg-white mt-5 overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold text-gray-900">
                    Our <span className="text-blue-600">Featured Programs</span>
                </motion.h3>  
                <motion.p {...scrollUpDelayEffect} className="mt-3 md:w-150 w-90 text-sm text-center text-gray-500">
                    Discover how we're making a difference across Africa through our comprehensive programs deisgned to create sustainable change in communities.
                </motion.p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 mt-5 mb-5 lg:mb-0">
                    {programs.map((program) => (
                        <motion.div {...scrollRightEffect} className="flex flex-col rounded-md shadow-sm mb-5 lg:mb-0 group">
                            <img src={program.image} className="w-full h-full object-cover rounded-t-md group-hover:scale-105 group-hover:rounded-md transition-all"/>
                            {/* {program.icon} */}
                            <div className="w-full h-full flex flex-col p-2 rounded-b-md">
                                <h3 className="my-2 text-gray-900 font-semibold text-sm">
                                    {program.title}
                                </h3>
                                <p className="text-gray-500 text-[12px]">
                                    {program.text}
                                </p>
                                <div className={`w-40 h-8 rounded-xl shadow-xs my-3 text-[10px] flex items-center justify-center font-bold text-${program.color} bg-${program.bg}`}>
                                    {program.cate}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
                <motion.button {...buttonHoverEffects} className="mt-5 px-8 py-2.5 text-sm rounded-md cursor-pointer bg-blue-600 text-white font-semibold">
                    Explore All Programs
                </motion.button>
            </div>
            <div className="flex flex-col items-center bg-[#F9FAFB] py-10 mt-10 overflow-hidden">  
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold text-gray-900">
                    Voices of <span className="text-blue-600">Impact</span>
                </motion.h3>  
                <motion.p {...scrollUpDelayEffect} className="mt-3 w-90 md:w-150 text-sm text-center text-gray-500">
                    Hear directly from the communities and individual whose lives have been transformed through our programs and initiatives.These are the real stories behind our mission.
                </motion.p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 px-5 md:px-10 mt-5">
                    {testimonial.map((data) =>(
                        <motion.div {...scrollLeftEffect} {...cardHoverEffects} className="flex flex-col py-5 px-10 shadow-sm bg-white">
                            <div className="flex items-center justify-between">
                                <FaQuoteRight  className="w-6 h-6 text-blue-500"/>
                                <div className="flex">
                                    {Array.from({length:5}).map((_, i) => (
                                    <FaStar key={i} size={15} className={i < data.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}/>
                                    ))}
                                </div>
                            </div>
                            <p className="text-[13px] text-gray-500 mt-3">
                                {data.text}
                            </p>
                            <div className="flex my-5">
                                <img src={data.image} className="w-12 h-12 rounded-full object-cover"/>
                                <div className="flex flex-col ml-2">
                                    <p className="text-[13px] font-semibold">
                                        {data.name}
                                    </p>
                                    <p className="text-[11px] text-gray-500">
                                        {data.role}
                                    </p>
                                    <p className="text-[9px] text-gray-500">
                                        {data.location}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-8 px-2 text-xs font-semibold rounded-md flex items-center bg-blue-50 text-blue-600">
                                    {data.category}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div ref={sectionOneRef} className="bg-white mt-15 w-[94%] h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 rounded-md">
                    {stats.map((stats) => (
                        <motion.div {...scrollUpEffect} className="flex flex-col items-center py-2">
                            <h3 className={`text-xl font-bold text-${stats.color}`}>
                                {sectionOneInView ? <CountUp end={stats.percent} duration={5} /> :0 }{stats.value}
                                {/* {stats.percent} */}
                            </h3>
                            <p className="text-[12px] font-semibold text-gray-600">
                                {stats.rate}
                            </p>
                            <p className="text-xs text-gray-500">
                                {stats.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="w-[94%] bg-white rounded-md flex flex-col items-center p-5 mt-10">
                    <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold text-gray-900">
                    Why <span className="text-blue-600">Partner</span> with Us
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {choose.map((data) => (
                        <motion.div {...scrollLeftEffect} className="p-5 flex flex-col items-center">
                            <data.icon className={`w-15 h-15 lg:p-3 p-4 rounded-full ${data.color}`}/>
                            <h3 className="my-3 text-sm font-semibold">
                                {data.title}
                            </h3>
                            <p className="text-[13px] text-center text-gray-500">
                                {data.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}