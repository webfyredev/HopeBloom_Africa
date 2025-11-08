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
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Donate(){
    const [formData, setFormData] = useState({amount : "", program : "", first_name : "", last_name:"", email : "", phone_number : "", 
        address : "", city : "", country : "", dedication : "", comments : ""
    });
    const [status, setStatus] = useState("");
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }
    const handlesubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://127.0.0.1:8000/donations/", formData);
            setStatus("Thanks! Your donation went through successfully");
            setFormData({amount : "", program : "", first_name : "", last_name:"", email : "", phone_number : "", 
                            address : "", city : "", country : "", dedication : "", comments : ""});
            setTimeout(() => setStatus(""), 5000);
        } catch(error) {
            setStatus("Failed to send donations. Try again")
            setTimeout(() => setStatus(""), 5000);

        }

    }
    useEffect(() =>{
        document.title = 'Donate | HopeBloom_Africa'
    }, []);
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
            {status && (
                <motion.div initial ={{opacity:0, y:-50}}
                animate = {{opacity: 1, y:0}}
                exit={{opacity : 0, y:-50}}
                transition={{duration:0.4}}
                className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-5 py-3 rounded-lg shadow-lg text-white font-semibold ${status.includes("success") ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    {status}
                </motion.div>
            )}
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
                <form onSubmit={handlesubmit} className="w-full lg:w-[65%] flex flex-col rounded-t-md bg-white shadow-md">
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
                                <input type="number" placeholder="$ Enter amount" name="amount" value={formData.amount} onChange={handleChange} required  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <label className="text-gray-900 text-xs font-semibold my-2">Choose Program *</label>
                        <select name="program" value={formData.program} onChange={handleChange} required className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                            <option value="" disabled>Select a Program</option>
                            <option value="Education">Education</option>
                            <option value="Healthcare Outreach">Healthcare Outreach</option>
                            <option value="Women Empowerment">Women Empowerment</option>
                            <option value="Environmental Sustainability">Environmental Sustainability</option>

                        </select>
                        <h3 className="text-[13px] font-semibold my-2">
                            Donor Information
                        </h3>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">First Name *</label>
                                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange}  required placeholder="Enter your first name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Last Name *</label>
                                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required placeholder="Enter your last name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Email Address *</label>
                                <input type="email" name="email" value={formData.email} required onChange={handleChange}  placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Phone Number *</label>
                                <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required  placeholder="Enter your phone number"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Address</label>
                                <input type="text" placeholder="Home Address" name="address" value={formData.address} onChange={handleChange} required  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">City </label>
                                <input type="text" placeholder="City/Province" name="city" value={formData.city} onChange={handleChange} required  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Country</label>
                                <input type="text" placeholder="Country" name="country" value={formData.country} onChange={handleChange} required  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Dedication (Optional)</label>
                                <input type="text" placeholder="In honour/memory of" name="dedication" value={formData.dedication} onChange={handleChange} required  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Comments (Optional)</label>
                            <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Any additional comments" required className="outline-blue-100 mt-1 text-xs p-2 w-full h-20 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        <motion.button {...buttonHoverEffects} type="submit" className="my-5 text-sm cursor-pointer bg-blue-600 rounded-md font-semibold text-white px-7 py-2.5">
                            Send Donation
                        </motion.button>
                    </div>
                </form>
            </div>
            <div className="w-full flex flex-col items-center py-10">
                    <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold text-gray-900 mt-5">
                        Your <span className="text-blue-600">Impact</span> in Action
                    </motion.h3>
                    <motion.p {...scrollUpDelayEffect } className="w-90 md:w-150 mt-2 text-center text-gray-500 text-sm">
                        See exactly how your donations creates real change in Africa communities. Every dollar is carefully allocated to maximize impact and transparency.
                    </motion.p>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 mt-5 overflow-hidden">
                    {DonateImpact.map((impact) =>(
                        <motion.div {...cardScrollEffects} className="flex flex-col px-5 py-10 shadow-md bg-[#F9FAFB]">
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
                        </motion.div>
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