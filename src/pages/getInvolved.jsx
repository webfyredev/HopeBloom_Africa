import Footer from "../components/footer";
import HeadComponents from "../components/headComponents";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import involvedBg from '../images/ngo/programs.webp'
import { involvedData, partnerships } from "../data/projectData";
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { motion } from "framer-motion";
import { scrollUpEffect, scrollUpDelayEffect, cardScrollEffects, buttonHoverEffects } from "../animations/effect";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GetInvolved(){
    const [volunteerData, setVolunteerData] = useState({
        full_name : "", email : "", phone_number : "",
        program : "", relevant_experience : "", availability : "",
        reasons : "",
    });
    const [partnershipData, setPartnershipData] = useState({
        organization_name : "", contacts_name : "", email_address : "", phone_number : "", partnership_type : "",
        program_type : "", partnership_goals : "", values : "", preffered_timeline : "",
    })
    const [status, setStatus] = useState({message : "", type : ""});

    const handlePartnershipChange = (e) => {
        setPartnershipData({...partnershipData, [e.target.name] : e.target.value});
    }
    
    const handleVolunteerChange = (e) =>{
        setVolunteerData({...volunteerData, [e.target.name] : e.target.value})
    };

    const partnershipSubmission = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://127.0.0.1:8000/partnerships/", partnershipData)
            setStatus({message : "Inquiry submitted successfully. We will respond promptly", type:"success"} );
            setPartnershipData({
                organization_name : "", contacts_name : "", email_address : "", phone_number : "", partnership_type : "",
                program_type : "", partnership_goals : "", values : "", preffered_timeline : "",
            });
            setTimeout(() => setStatus(""), 5000);

        } catch(error){
            setStatus({message : "Failed to register partnership organization. Try again later", type:"error"});
            setTimeout(() => setStatus(""), 5000);
        }
    }

    const volunteerSubmission = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://127.0.0.1:8000/volunteers/", volunteerData)
            setStatus({message : "Thank you for signing to volunteer We'll reach out to you soon", type:"success"});
            setVolunteerData({
                full_name : "", email : "", phone_number : "",
                program : "", relevant_experience : "", availability : "",
                reasons : "",
            });
            setTimeout(() => setStatus(""), 5000);
        } catch(error) {
            setStatus({message : "Failed to register volunteer. Try again later", type:"error"});
            setTimeout(() => setStatus(""), 5000);
        };
    };
    useEffect(() =>{
        document.title = 'Get-Involved | HopeBloom_Africa'
    }, []);
    return(
        <>
            {status.message && (
                <motion.div initial ={{opacity:0, y:-50}}
                animate = {{opacity: 1, y:0}}
                exit={{opacity : 0, y:-50}}
                transition={{duration:0.4}}
                className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-3 md:px-5 py-3 rounded-lg shadow-lg text-white text-xs text-center w-[90%] h-11 md:h-auto md:w-auto md:text-sm font-semibold ${status.type === "success" ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    {status.message}
                </motion.div>
            )}
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
                    <form onSubmit={volunteerSubmission} className="md:w-[95%] lg:w-[70%] h-auto mt-3 flex items-center flex-col">
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Full Name *</label>
                                <input type="text" name="full_name" value={volunteerData.full_name} onChange={handleVolunteerChange} required placeholder="Enter your full_name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Email Address *</label>
                                <input type="email" name="email" value={volunteerData.email} required onChange={handleVolunteerChange} placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col md:w-[48%] w-full">
                                <label className="text-gray-900 text-xs font-semibold my-1">Phone Number</label>
                                <input type="text" name="phone_number" value={volunteerData.phone_number} onChange={handleVolunteerChange} required placeholder="Enter your phone number"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col md:w-[48%] w-full mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Preferred Program *</label>
                                <select name="program" value={volunteerData.program} onChange={handleVolunteerChange} required className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                                    <option value="" disabled>Select a  Program</option>
                                    <option value="Education">Education</option>
                                    <option value="Healthcare Outreach">Healthcare Outreach</option>
                                    <option value="Women Empowerment">Women Empowerment</option>
                                    <option value="Environmental Sustainability">Environmental Sustainability</option>

                                </select>
                                {/* <input type="email" placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/> */}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Relevant Experience</label>
                            <textarea name="relevant_experience" value={volunteerData.relevant_experience} onChange={handleVolunteerChange} required placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-25 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Availability</label>
                                <input type="text" name="availability" value={volunteerData.availability} onChange={handleVolunteerChange} required placeholder="e.g, 3 months starting January 2025"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Why do you want to volunteer with HopeBloom_Africa</label>
                            <textarea name="reasons" value={volunteerData.reasons} onChange={handleVolunteerChange} required  placeholder="Share your motivation and what you hope to achieve" className="outline-blue-100 mt-1 text-xs p-2 w-full h-25 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        <motion.button {...buttonHoverEffects} type="submit" className="mt-5 text-sm  cursor-pointer bg-blue-600 rounded-md font-semibold text-white px-7 py-2.5">
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
                    <form onSubmit={partnershipSubmission} className="w-full md:w-[95%] lg:w-[70%] h-auto mt-3 flex items-center flex-col p-2">
                        <div className="w-full flex flex-col md:flex md:flex-row  md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Organization Name *</label>
                                <input type="text" name="organization_name" value={partnershipData.organization_name} onChange={handlePartnershipChange} required placeholder="Enter your organization name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Contacts Name *</label>
                                <input type="name" name="contacts_name" value={partnershipData.contacts_name} onChange={handlePartnershipChange} required placeholder="Enter your name"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Email Address *</label>
                                <input type="email" name="email_address" value={partnershipData.email_address} onChange={handlePartnershipChange} required  placeholder="Ente your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Phone Number </label>
                                <input type="text" name="phone_number" value={partnershipData.phone_number} onChange={handlePartnershipChange} required placeholder="Enter your phone number"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex md:flex-row md:justify-between mb-3">
                            <div className="flex flex-col w-full md:w-[48%]">
                                <label className="text-gray-900 text-xs font-semibold my-1">Partnership Type *</label>
                                <select name="partnership_type" value={partnershipData.partnership_type} onChange={handlePartnershipChange} required className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                                    <option value="" disabled>Select a Partners</option>
                                    <option value="Corporate Partnerships">Corporate Partnerships</option>
                                    <option value="NGO Collaborations">NGO Collaborations</option>
                                    <option value="Government Partnerships">Government Partnerships</option>
                                    <option value="Academic Institutions">Academic Institutions</option>

                                </select>
                            </div>
                            <div className="flex flex-col w-full md:w-[48%] mt-3 md:mt-0">
                                <label className="text-gray-900 text-xs font-semibold my-1">Organization Type *</label>
                                <select name="program_type" value={partnershipData.program_type} onChange={handlePartnershipChange} required className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md">
                                    <option value="" disabled>Select a organization type</option>
                                    <option value="Education">Education</option>
                                    <option value="Healthcare Outreach">Healthcare Outreach</option>
                                    <option value="Women Empowerment">Women Empowerment</option>
                                    <option value="Environmental Sustainability">Environmental Sustainability</option>

                                </select>
                                {/* <input type="email" placeholder="Enter your email address"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/> */}
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Partnership Goals *</label>
                            <textarea name="partnership_goals" value={partnershipData.partnership_goals} onChange={handlePartnershipChange} required placeholder="Describe what you hope to achieve through this partnership" className="outline-blue-100 mt-1 text-xs p-2 w-full h-25 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Resources You Can Offer</label>
                            <textarea name="values" value={partnershipData.values} onChange={handlePartnershipChange} required placeholder="e.g, funding, expertise, volunteers, equipment..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-20 bg-white border-1 border-gray-400 rounded-md"></textarea>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="" className="text-gray-900 text-xs font-semibold my-1">Preferred Timeline</label>
                                <input type="text" name="preffered_timeline" value={partnershipData.preffered_timeline} onChange={handlePartnershipChange} required placeholder="e.g, Start in Q2 2025, 2-year partnership"  className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"/>
                            {/* <textarea name="" placeholder="Tell us about your relevant experience and skills..." className="outline-blue-100 mt-1 text-xs p-2 w-full h-10 bg-white border-1 border-gray-400 rounded-md"></textarea> */}
                        </div>
                        <motion.button {...buttonHoverEffects} type="submit" className="mt-5 text-sm  cursor-pointer bg-blue-600 rounded-md font-semibold text-white px-7 py-2.5">
                            Submit Inquiry
                        </motion.button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );  
}