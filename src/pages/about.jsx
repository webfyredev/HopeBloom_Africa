import Footer from "../components/footer";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import aboutImg from '../images/ngo/bg (8).webp';
import { aboutValue, Teams, aboutImpact } from "../data/projectData";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cardHoverEffects, cardScrollEffects, scrollLeftEffect, scrollUpDelayEffect, scrollUpEffect } from "../animations/effect";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import BottomCTA from "../components/bottomCta";
import aboutImgHeading from '../images/ngo/bg (1).webp'
import HeadComponents from "../components/headComponents";
import { useEffect } from "react";


export default function About(){
    useEffect(() =>{
        document.title = "About | HopeBloom_Africa"
    }, []);
    const {ref : sectionOneRef, inView:sectionOneInView} = useInView({
        triggerOnce : false,
        threshold : 0.4,
    });
    return(
        <>
            <NavBar />
            <Heading 
            image = {aboutImgHeading}
            page = 'About'
            link = '/about'/>
            <HeadComponents 
            title_1 = 'About'
            title_2 = 'HopeBloom Africa'
            text = 'Founded in 2020, HopeBloom Africa emerged from  a simple belief; every African community deserves the opportunity fo flourish and reach its full potential'/>
            <div className="lg:flex lg:flex-row flex flex-col items-center justify-around w-full lg:h-100 mt-10 rounded-md bg-white md:p-5 overflow-hidden">
                <motion.div {...scrollUpEffect} className="lg:w-[45%] w-full h-full flex flex-col p-5">
                    <h3 className="font-semibold text-2xl mb-3">
                        Our Story
                    </h3>
                    <p className="text-gray-500 text-[10px] md:text-[12px] mb-3">
                        HopeBloom_Africa was born from vision of Dr. Sam Kole, a Nigerian educator who witnessed first and the challenges facing rural communities across Africa. After years of working
                        in international development, he realized that sustainable change required a holistic approach that addressed
                        eduction, healthcare, economic empowerment, and environmental sustainability.
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-[12px] mb-3">
                        What started as a small education initiative in rural Nigeriahas grown into a comprehensive
                        organizationoperating across of 15 African countries. We've learned that true development happens when communities are empowered to lead their own transformation
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-[12px]">
                        Today, HopeBloom Africa works hand-in-hand with local leaders governments, and international partners to create lasting change that blooms from within communities themselves
                    </p>
                </motion.div>
                <motion.img {...scrollLeftEffect} src={aboutImg} className="lg:w-[45%] lg:h-full w-[95%] md:h-90 h-75 rounded-md mt-5 lg:mt-0 object-cover"/>
            </div>
            <div className="w-full lg:h-100 h-auto   flex items-center justify-center py-5 overflow-hidden">
                <div className="w-[85%] h-full flex flex-col items-center py-5 bg-[#F9FAFB] rounded-md">
                    <motion.h3 {...scrollUpEffect} className="text-2xl font-bold mt-5">
                        Our Core Values
                    </motion.h3>
                    <motion.div {...scrollLeftEffect} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 mt-5">
                        {aboutValue.map((data) =>(
                            <motion.div  {...cardHoverEffects} className="flex flex-col p-5 items-center rounded-md bg-white">
                                <data.icon className={`w-13 h-13 p-4 rounded-full ${data.style}`}/>
                                <h3 className="text-sm font-semibold my-2">
                                    {data.title}
                                </h3>
                                <p className="text-[12px] text-center">
                                    {data.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center py-10 mt-5 bg-blue-600 overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold text-white">
                    Our Impact by Numbers
                </motion.h3>
                <motion.p {...scrollUpDelayEffect} className="mt-3 md:w-150 text-sm text-center text-gray-100">
                    Since our founding in 2020, we've achieved remarkable milestones in transforming African communities through our comprehensive development programs.
                </motion.p>
                <div ref={sectionOneRef} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 md:px-20 px-5 mt-5">
                    {aboutImpact.map((impact) => (
                        <motion.div {...cardScrollEffects} className="flex flex-col items-center px-10 py-5 bg-blue-700 rounded-md">
                            <impact.icon  className="w-13 h-13 p-3 bg-blue-400 text-white rounded-full"/>
                            <h3 className="mt-2 text-3xl font-bold text-white">
                                {sectionOneInView ? <CountUp end={impact.value} duration={5} /> : 0}{impact.sym}
                            </h3>
                            <p className="text-sm text-gray-200 font-semibold mt-2">
                                {impact.title}
                            </p>
                            <p className="text-xs mt-2 text-gray-300">
                                {impact.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full h-auto flex flex-col items-center p-5 mt-10 bg-[#F9FAFB] overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold">
                    Meet Our <span className="text-blue-600">Leadership Team</span>
                </motion.h3>
                <motion.p {...scrollUpDelayEffect} className="mt-3 md:w-150 text-sm text-center text-gray-500">
                    Our divserse team of experts brings together decade of experience in development, healthcare, education, and community empowerment across Africa.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 py-5 md:px-10 gap-5 overflow-hidden">
                {Teams.map((team) =>(
                    <motion.div {...cardScrollEffects}  className="flex flex-col shadow-md mb-5">
                        <img src={team.image} className="w-full h-full object-cover rounded-t-md" />
                        <div className="flex flex-col items-left p-4 rounded-b-md">
                            <h3 className="text-md font-semibold">
                                {team.name}
                            </h3>
                            <p className="text-xs font-semibold text-blue-600">
                                {team.role}
                            </p>
                            <p className="text-xs my-2 text-gray-500">
                                {team.text}
                            </p>
                            <div className="flex items-center">
                                <Link to={`mailto:${team.linkedin_url}`}>
                                    <FaLinkedinIn  className="text-gray-500 mr-3 h-5"/>
                                </Link>
                                <Link to={`mailto:${team.mail_url}`}>
                                    <FaEnvelope className="text-gray-500  h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
                </div>

            </div>
            <BottomCTA 
            title = 'Join Our Mission'
            text = "We're always looking for passionate individuals who want to make a  difference in African communities"
            btn_text = 'View Open Positions'/>
            <Footer />
        </>
    );
}