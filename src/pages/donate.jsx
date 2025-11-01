import Footer from "../components/footer";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import donateImg from '../images/ngo/about.webp'
import { motion } from "framer-motion";
import { scrollUpEffect, scrollUpDelayEffect, cardScrollEffects, buttonHoverEffects } from "../animations/effect";
import { DonateData, DonateImpact, commitment } from "../data/projectData";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaHeart } from "react-icons/fa";

export default function Donate(){
    const {ref : sectionOneRef, inView:sectionOneInView} = useInView({
        triggerOnce : false,
        threshold : 0.4,
    });
    const {ref : sectionTwoRef, inView:sectionTwoInView} = useInView({
        triggerOnce : false,
        threshold : 0.4
    })
    return(
        <>
            <NavBar />
            <Heading 
            image = {donateImg}
            page = 'Donate'/>
            <div className="w-full flex flex-col items-center py-5 mt-5">
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold mt-5">
                    Make a <span className="text-blue-600">Difference</span>
                </motion.h3>
                <motion.p {...scrollUpDelayEffect} className="mt-2 md:w-130 text-[13px] text-center text-gray-600">
                    Your donation directly transforms live across Africa. Every contribution, no matter the size, create lasting impact in communities that needs it most
                </motion.p>
                <div className="w-[65%] py-5 my-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {DonateData.map((donate) =>(
                        <motion.div {...cardScrollEffects} ref={sectionOneRef} className="shadow-md p-5 bg-[#F9FAFAB] rounded-md flex flex-col items-center">
                            <h2 className="text-blue-600 font-bold text-xl">
                                ${sectionOneInView ? <CountUp end={donate.rate} duration={5}/> : 0}
                            </h2>
                            <p className="text-[13px] text-center mt-2 text-gray-500">
                                {donate.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-[#F9FAFAB] p-5">
                <form className="w-full lg:w-[65%] flex flex-col rounded-t-md bg-white shadow-md">
                    <div className="w-full h-40 flex flex-col items-center bg-blue-600 rounded-t-md">
                        <FaHeart  className=" mt-10 w-8 h-8 text-white bg-transparent"/>
                        <h3 className="mt-2 font-bold text-xl text-white">
                            Make Your Donation
                        </h3>
                        <p className="text-gray-200 text-[13px]">
                            Every contribution creates lasting change
                        </p>
                        
                    </div>
                    <div className="w-full h-full flex flex-col px-5">
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Donation Amount</label>
                                <input type="number" placeholder="$ Enter amount"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <label className="text-gray-900 text-xs font-semibold my-2">Choose Program </label>
                        <select name="" id="" placeholder="Select a program" className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                            <option value="" disabled>Select a  Program</option>
                            <option value="">Education</option>
                            <option value="">Healthcare Outreach</option>
                            <option value="">Women Empowerment</option>
                            <option value="">Environmental Sustainability</option>

                        </select>
                        <h3 className="text-[13px] font-semibold my-2">
                            Donor Information
                        </h3>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Full Name *</label>
                                <input type="text" placeholder="Enter your name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Last Name *</label>
                                <input type="email" placeholder="Enter your last name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Email Address *</label>
                                <input type="text" placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Phone Number</label>
                                <input type="email" placeholder="Enter your phone number"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Address</label>
                                <input type="text" placeholder="Home Address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">City </label>
                                <input type="text" placeholder="City/Province"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Country</label>
                                <input type="text" placeholder="Country"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Dedication (Optional)</label>
                                <input type="text" placeholder="In honour/memory of"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Comments (Optional)</label>
                            <textarea name="" placeholder="Any additional comments" className="outline-blue-100 mt-1 text-xs p-2 w-full h-20 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        <motion.button {...buttonHoverEffects} className="my-5 text-sm cursor-pointer bg-blue-600 rounded-md font-semibold text-white px-7 py-2.5">
                            Send Donation
                        </motion.button>
                    </div>
                </form>
            </div>
            <div className="w-full flex flex-col items-center py-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-5">
                        Your <span className="text-blue-600">Impact</span> in Action
                    </h3>
                    <p className="w-90 md:w-150 mt-2 text-center text-gray-500 text-sm">
                        See exactly how your donations creates real change in Africa communities. Every dollar is carefully allocated to maximize impact and transparency.
                    </p>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 mt-5">
                    {DonateImpact.map((impact) =>(
                        <div className="flex flex-col px-5 py-10 shadow-md bg-[#F9FAFB]">
                            <impact.icon  className={`w-11 h-11 p-2 rounded-md ${impact.style}`}/>
                            <h3 className="text-sm font-semibold my-3">
                                {impact.title}
                            </h3>
                            <p className="text-[12px]">
                                {impact.text}
                            </p>
                            <ul className="mb-5">
                                {impact.data.map((data, index) =>(
                                <li key={index} className="text-[12px] mt-2">{data}</li>
                            ))}
                            </ul>
                        </div>
                    ))}
                    </div>
            </div>
            <div className="w-full h-auto lg:h-80  flex items-center justify-center my-5">
                <div className="w-[95%] lg:w-[85%] h-full rounded-md bg-blue-600 flex flex-col items-center py-5">
                    <h3 className="mt-5 text-xl md:text-2xl font-bold text-white">
                        Our Commitment to Transparency
                    </h3>
                    <div ref={sectionTwoRef} className="w-[95%] md:w-[85%] mt-5 p-5 grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {commitment.map((data) =>(
                            <div className="flex flex-col items-center p-5 bg-blue-700 rounded-md">
                                <h3 className="text-xl font-bold text-white">
                                    {/* ${data.rate} */}
                                    ${sectionTwoInView ? <CountUp end={data.rate} duration={5}/> : 0}
                                </h3>
                                <p className="text-sm text-gray-200 mt-1">
                                    {data.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="md:w-150 w-90 text-xs md:text-sm text-center mt-2 text-gray-100">
                        We are committed to using your donations efficiently and effectively. All donors recieved detailedimpact reports showing exactly how their contributions are used.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}