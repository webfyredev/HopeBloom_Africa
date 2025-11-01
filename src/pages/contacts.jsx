import Footer from "../components/footer";
import HeadComponents from "../components/headComponents";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import contactsImg from '../images/ngo/bg (10).webp';
import { motion } from "framer-motion";
import { buttonHoverEffects } from "../animations/effect";
import { officeData } from "../data/projectData";
import { Link } from "react-router-dom";

export default function Contacts(){
    return(
        <>
            <NavBar />
            <Heading
            image = {contactsImg} 
            page = 'Contacts'/>
            <HeadComponents 
            title_1 = 'Get in'
            title_2 = 'Touch'
            text = 'Have questions about our programs? Want to get involved? We would love to hear from you.Reach out to our team and lets work together to  transform Africa communities.'/>
            <div className="w-full flex flex-col items-center mt-5 bg-white py-5">
                <h3 className="text-2xl font-bold mb-1">
                    Send Us a Message
                </h3>
                <p className="text-sm text-gray-500">
                    Fill out the form below and we'll get back to you within 24hrs
                </p>
                <form className="w-[65%] h-auto px-10 py-10 flex flex-col rounded-md bg-[#F9FAFAB] shadow-md">
                    <div className="w-full flex justify-between mb-2">
                        <div className="flex flex-col w-full md:w-[48%]">
                            <label className="text-gray-900 text-xs font-semibold my-1">Full Name *</label>
                            <input type="text" placeholder="Enter your name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                        </div>
                        <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                            <label className="text-gray-900 text-xs font-semibold my-1">Email Address *</label>
                            <input type="email" placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                        </div>
                    </div>
                    <div className="w-full flex justify-between mb-2">
                        <div className="flex flex-col w-full md:w-[48%]">
                            <label className="text-gray-900 text-xs font-semibold my-1">Phone Number</label>
                            <input type="text" placeholder="Enter your phone number"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                        </div>
                        <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                            <label className="text-gray-900 text-xs font-semibold my-1">Inquiry Type</label>
                                <select name="" id="" placeholder="Select a program" className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                                    <option value="" disabled>Select a  inquiry type</option>
                                    <option value="">Education</option>
                                    <option value="">Healthcare Outreach</option>
                                    <option value="">Women Empowerment</option>
                                    <option value="">Environmental Sustainability</option>

                                </select>
                        </div>
                    </div>
                    <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Subject *</label>
                                <input type="text" placeholder="Brief description of your inquiry"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                    </div>
                    <div className="w-full">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Message *</label>
                            <textarea name="" placeholder="Please provide details about your inquiry" className="outline-blue-100 mt-1 text-xs p-2 w-full h-25 bg-white border-1 border-gray-400 rounded-md"></textarea>
                    </div>
                    <motion.button {...buttonHoverEffects} className="mt-5 text-sm  cursor-pointer bg-blue-600 rounded-md font-semibold text-white px-7 py-2.5">
                            Send Message
                        </motion.button>
                </form>
            </div>
            <div className="flex flex-col w-full items-center mt-10">
                <h3 className="font-bold text-2xl ">
                    Regional Offices
                </h3>
                 <div className="w-[85%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white mt-3 gap-5 px-20 py-5">
                {officeData.map((office) =>(
                    <div className="w-full shadow-md px-5 py-10 flex flex-col items-center font-semibold text-sm">
                        <h3>
                            {office.name}
                        </h3>
                        <p className="text-[12px] my-1 text-gray-500">
                            {office.location}
                        </p>
                        <Link to={`phoneto:${office.phone}`} className="text-[10px] text-gray-500">
                            {office.phone}
                        </Link>
                        <Link to={`mailto:${office.email}`} className="text-[11px] text-gray-500 mt-2">
                            {office.email}
                        </Link>
                    </div>
                ))}
            </div>
            </div>
           
            <Footer />
        </>
    );
}