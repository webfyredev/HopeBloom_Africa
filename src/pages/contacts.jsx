import Footer from "../components/footer";
import HeadComponents from "../components/headComponents";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import contactsImg from '../images/ngo/bg (14).webp';
import { motion } from "framer-motion";
import { buttonHoverEffects, cardScrollEffects, scrollLeftEffect, scrollRightEffect, scrollUpEffect } from "../animations/effect";
import { officeData, contacts } from "../data/projectData";
import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function Contacts(){
    useEffect(() =>{
        document.title = 'Contacts | HopeBloom_Africa'
    }, []);
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
            <div className="w-full flex flex-col items-center mt-15 bg-white py-5 overflow-hidden">
                <h3 className="text-2xl font-bold mb-1">
                    Send Us a Message
                </h3>
                <p className="text-xs md:text-sm text-gray-500">
                    Fill out the form below and we'll get back to you within 24hrs
                </p>
                <form className="w-full lg:w-[65%] h-auto px-10 py-10 flex flex-col rounded-md bg-[#F9FAFAB] shadow-md">
                    <div className="w-full md:flex md:flex-row flex flex-col justify-between mb-2">
                        <div className="flex flex-col w-full md:w-[48%]">
                            <label className="text-gray-900 text-xs font-semibold my-1">Full Name *</label>
                            <input type="text" placeholder="Enter your name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                        </div>
                        <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                            <label className="text-gray-900 text-xs font-semibold my-1">Email Address *</label>
                            <input type="email" placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                        </div>
                    </div>
                    <div className="w-full md:flex md:flex-row flex flex-col justify-between mb-2">
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
            <div className="w-full lg:flex lg:flex-row flex flex-col py-10 lg:px-15 md:px-10 px-5 bg-[F9FAFAB] overflow-hidden">
                <motion.div {...scrollRightEffect} className="w-full lg:w-[45%] h-full flex flex-col p-5">
                    <h3 className="text-2xl font-bold">
                        Contact Information
                    </h3>
                    {contacts.map((contact) =>(
                        <div key={contact.id} className="flex flex-row  py-3">
                            <contact.icon  className="w-10 h-10 p-3 bg-blue-100 text-blue-600 rounded-md"/>
                            <div className="flex flex-col">
                                <h3 className="text-[13px] font-semibold px-2 py-1">
                                    {contact.title}
                                </h3>
                                <ul className="flex flex-col px-2 space-y-1">
                                    {contact.links.map((link, index) =>{
                                        if(contact.type === "email"){
                                            return(
                                                <li key={index} className="text-xs text-gray-500">
                                                    <Link to={`mailto:${link}`} className="hover:text-blue-600 cursor-pointer hover:font-semibold transition-all duration-300">
                                                        {link}
                                                    </Link>
                                                </li>
                                            )
                                        }else if(contact.type === "phone"){
                                            return(
                                                <li key={index} className="text-xs text-gray-500 font-semibold">
                                                    <Link to={`phoneto:${link}`} className="hover:text-blue-600 cursor-pointer">
                                                        {link}
                                                    </Link>
                                                </li>
                                            )
                                        }
                                        else{
                                            return(
                                                <li key={index} className="text-xs">
                                                    {link}
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}

                </motion.div>
                <motion.div {...scrollLeftEffect} className="w-full lg:w-[45%] h-full p-5 lg:ml-20 flex flex-col">
                    <h3 className="text-2xl font-bold">
                        Find Us
                    </h3>
                    <div className="w-full h-85 rounded-md overflow-hidden mt-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31564.814101404543!2d4.524056790551782!3d8.53798594675902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036528d9c605049%3A0xf59fa28215d71df1!2sIlorin%2C%20Kwara!5e0!3m2!1sen!2sng!4v1762042015918!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="p-2 bg-gray-100 rounded-md mt-3">
                        <p className="text-[10px]">
                            Getting Here: Our office is located in the Westlands Business center, easily accessible by public transport and private vehicles.
                            Parking is available on-site
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col w-full items-center mt-10 overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="font-bold text-2xl ">
                    Regional Offices
                </motion.h3>
                 <div className="w-[90%] lg:w-[85%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white mt-3 gap-5 lg:px-20 py-5">
                {officeData.map((office) =>(
                    <motion.div {...cardScrollEffects} key={office.id} className="w-full shadow-md px-5 py-10 flex flex-col items-center font-semibold text-sm">
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
                    </motion.div>
                ))}
            </div>
            </div>
           
            <Footer />
        </>
    );
}