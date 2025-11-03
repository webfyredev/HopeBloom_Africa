import Footer from "../components/footer";
import HeadComponents from "../components/headComponents";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import involvedBg from '../images/ngo/programs.webp'
import { involvedData, partnerships } from "../data/projectData";
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { motion } from "framer-motion";
import { scrollUpEffect, scrollUpDelayEffect, cardScrollEffects, buttonHoverEffects } from "../animations/effect";
import { useEffect } from "react";

export default function GetInvolved(){
    useEffect(() =>{
        document.title = 'Get-Involved | HopeBloom_Africa'
    }, []);
    return(
        <>
            <NavBar />
            <Heading 
            image = {involvedBg}
            page = 'Get Involved'
            link = '/getInvolved' />
            <HeadComponents 
            title_1 = 'Get'
            title_2 = 'Involved'
            text = 'Join our mission to transform African communities. Whether through volunteering, donating, or partnering with us, your contribution creates lasting impacts'/>
            <div className="w-full flex flex-col items-center bg-white mt-15 px-5 py-10 overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold">
                    Volunteer <span className="text-blue-600">Opportunities</span>
                </motion.h3>
                <motion.p {...scrollUpDelayEffect} className="mt-2 md:w-130 text-[13px] text-center text-gray-600">
                    Make a direct impact by volunteering with our programs.Join our team of dedicated volunteers working to transform Afrca communities

                </motion.p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 overflow-hidden">
                {involvedData.map((data) =>(
                    <motion.div {...cardScrollEffects} className="flex flex-col px-4 py-10 bg-[#F9FAFB] rounded-md">
                        <data.icon  className="w-11 h-11 p-2 rounded-md bg-blue-600 text-white"/>
                        <h3 className="mt-2 text-sm font-semibold">
                            {data.title}
                        </h3>
                        <div className="flex items-center mt-2 text-gray-500">
                            <FaMapMarkerAlt  className="w-3 h-3 mr-1"/>
                            <p className="text-[10px]">
                            {data.location}
                            </p>
                        </div>
                        <div className="flex items-center mt-2 text-gray-500">
                            <FaClock  className="w-3 h-3 mr-1"/>
                            <p className="text-[10px]">
                            {data.period}
                            </p>
                        </div>
                        <p className="text-xs mt-3">
                            {data.text}
                        </p>
                        <p className="text-gray-600 font-semibold text-xs mt-3">
                            Requirements:
                        </p>
                        <ul className="space-y-1.5 mt-1">
                            {data.requirements.map((data) =>(
                                <li className="text-xs">{data}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
                </div>
            </div>
            <div className="w-full flex items-center justify-center bg-white p-5 overflow-hidden">
                <div className="md:w-[95%] lg:w-[75%] rounded-md bg-[#F9FAFB] py-10 flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-3">
                        Apply to Volunteer
                    </h3>
                    <form className="md:w-[95%] lg:w-[70%] h-auto mt-3 flex items-center flex-col">
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Full Name *</label>
                                <input type="text" placeholder="Enter your name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Email Address *</label>
                                <input type="email" placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col md:w-[48%] w-full">
                                <label className="text-gray-900 text-xs font-semibold my-1">Phone Number</label>
                                <input type="text" placeholder="Enter your phone number"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col md:w-[48%] w-full mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Preferred Program *</label>
                                <select name="" id="" placeholder="Select a program" className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                                    <option value="" disabled>Select a  Program</option>
                                    <option value="">Education</option>
                                    <option value="">Healthcare Outreach</option>
                                    <option value="">Women Empowerment</option>
                                    <option value="">Environmental Sustainability</option>

                                </select>
                                {/* <input type="email" placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/> */}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Relevant Experience</label>
                            <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-25 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Availability</label>
                                <input type="text" placeholder="e.g, 3 months starting January 2025"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Why do you want to volunteer with HopeBloom_Africa</label>
                            <textarea name="" placeholder="Share your motivation and what you hope to achieve" className="outline-blue-100 mt-1 text-xs p-2 w-full h-25 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        <motion.button {...buttonHoverEffects} className="mt-5 text-sm  cursor-pointer bg-blue-600 rounded-md font-semibold text-white px-7 py-2.5">
                            Submit Application
                        </motion.button>
                    </form>
                </div>
            </div>
            <div className="w-full flex flex-col items-center py-10 bg-[#F9FAFB] overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="text-3xl  font-bold">
                    Partnership <span className="text-blue-600">Opportunities</span>
                </motion.h3>
                <motion.p {...scrollUpDelayEffect} className="mt-2 md:w-130 text-[13px] text-center text-gray-600">
                    Join a strategic partner to amplify our impact across Africa.Together, we can create sustainable change that transforms entire communities.
                </motion.p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 mt-5">
                    {partnerships.map((partner) => (
                        <motion.div {...cardScrollEffects} className="bg-white p-5 rounded-md shadow-md flex flex-col ">
                            <partner.icon  className="w-10 h-10 p-2.5 bg-blue-100 text-blue-600 rounded-md mb-3"/>
                            <h3 className="text-sm mt-2 font-semibold text-gray-900">
                                {partner.title}
                            </h3>
                            <p className="mt-3 text-[13px]">
                                {partner.text}
                            </p>
                            <h3 className="text-gray-900 text-sm mt-2 font-semibold">
                                Benefits:
                            </h3>
                            <ul className="flex flex-col mt-2 space-y-1">
                                {partner.values.map((partner, index) =>(
                                <li key={index} className="text-[12px]">{partner}</li>
                            ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full flex items-center justify-center p-5 mt-10 bg-[#F9FAFB]">
                <div className="md:w-[95%] lg:w-[75%] w-full rounded-md  bg-white shadow-sm py-10 flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-3">
                        Partnership Inquiry
                    </h3>
                    <form className="w-full md:w-[95%] lg:w-[70%] h-auto mt-3 flex items-center flex-col p-2">
                        <div className="w-full flex flex-col md:flex md:flex-row  md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Organization Name *</label>
                                <input type="text" placeholder="Enter your organization name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Contacts Name *</label>
                                <input type="name" placeholder="Enter your name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Email Address *</label>
                                <input type="email" placeholder="Ente your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Phone Number </label>
                                <input type="text" placeholder="Enter your phone number"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Partnership Type *</label>
                                <select name="" id="" placeholder="Select a program" className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                                    <option value="" disabled>Select a Partners</option>
                                    <option value="">Corporate Partnerships</option>
                                    <option value="">NGO Collaborations</option>
                                    <option value="">Government Partnerships</option>
                                    <option value="">Academic Institutions</option>

                                </select>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Organization Type *</label>
                                <select name="" id="" placeholder="Select a program" className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                                    <option value="" disabled>Select a organization type</option>
                                    <option value="">Education</option>
                                    <option value="">Healthcare Outreach</option>
                                    <option value="">Women Empowerment</option>
                                    <option value="">Environmental Sustainability</option>

                                </select>
                                {/* <input type="email" placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/> */}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Partnership Goals *</label>
                            <textarea name="" placeholder="Describe what you hope to achieve through this partnership" className="outline-blue-100 mt-1 text-xs p-2 w-full h-25 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Resources You Can Offer</label>
                            <textarea name="" placeholder="e.g, funding, expertise, volunteers, equipment..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-20 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Preferred Timeline</label>
                                <input type="text" placeholder="e.g, Start in Q2 2025, 2-year partnership"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <motion.button {...buttonHoverEffects} className="mt-5 text-sm  cursor-pointer bg-blue-600 rounded-md font-semibold text-white px-7 py-2.5">
                            Submit Inquiry
                        </motion.button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );  
}