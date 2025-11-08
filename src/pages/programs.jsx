import Footer from "../components/footer";
import HeadComponents from "../components/headComponents";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import programImgHeading from '../images/ngo/bg (17).webp'
import { FaBullseye, FaMapMarkerAlt, FaFootballBall} from "react-icons/fa";
import { programsData } from "../data/projectData";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cardHoverEffects, scrollLeftEffect, scrollRightEffect, scrollUpDelayEffect, scrollUpEffect } from "../animations/effect";
import { useEffect } from "react";

export default function Programs(){
    useEffect(() =>{
        document.title = 'Programs | HopeBloom_Africa'
    }, []);
    
    // const locations = ['Kenya', 'Ghana', 'Rwanda','Senegal', 'Zambia'];
    // const healthlist = ['Mobile Medical Clinics', 'Vaccination Campaigns', 'Maternal Health Programs']
    return(
        <>
            <NavBar />
            <Heading 
            image = {programImgHeading}
            page = 'Programs'
            link = "/programs"/>
            <HeadComponents 
            title_1 = 'Our'
            title_2 = 'Programs'
            text = 'Comprehensive inititatives designed to create sustainable change accross African communities through education, healthcare,empowerment, and environmentail sustainability'/>
            {programsData.map((program) =>{
                const {ref, inView} = useInView({
                    triggerOnce : false,
                    threshold : 0.4
                });
                return(
                    <div key={program.id} className="w-full flex flex-col lg:items-center md:p-10 p-5 bg-[#F9FAFB] mb-10 overflow-hidden">
                    <motion.div {...scrollLeftEffect} className={`text-[10px] px-8 py-2.5 lg:py-1.5 font-semibold rounded-md ${program.style} mb-2`}>
                        {program.program} Program
                    </motion.div>
                    <motion.h2 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold mt-2">
                        {program.title}
                    </motion.h2>
                    <motion.h3 {...scrollUpDelayEffect} className={`mt-3 text-sm ${program.color} font-semibold`}>
                        {program.text}
                    </motion.h3>
                    <div className="lg:flex lg:flex-row flex flex-col w-full h-auto lg:h-100 shadow-sm rounded-md mt-5 p-5 items-center justify-evenly bg-white">
                        <motion.img {...scrollRightEffect} src={program.image} className="w-full lg:w-[45%] h-50 md:h-80 object-cover rounded-md hover:scale-102 transition-all"/>
                        <motion.div {...scrollUpEffect} className="w-full lg:w-[50%] h-full lg:p-5 rounded-md">
                            <p className="text-xs md:text-sm mt-3 lg:mt-0">
                                {program.sub_text}
                            </p>
                            <div ref={ref} className="flex flex-row w-full md:w-[80%] mt-5 justify-between">
                                {program.rating.map((rating, index) =>(
                                    <div key={index} className="w-full">
                                        <h3 className={`text-lg md:text-2xl font-bold ${program.color}`}>
                                            {inView ? <CountUp end={rating.value} duration={5} /> :0}+
                                        </h3>
                                        <p className="text-[9px] md:text-xs my-1">
                                            {rating.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <h3 className="font-semibold mt-3 text-sm">
                                Active Locations:
                            </h3>
                            <div className="flex w-full md:w-[75%] mt-5 justify-between">
                                {program.location.map((location, index)=>(
                                    <motion.div {...cardHoverEffects} key={index} className={`px-4 h-6 flex items-center text-[8px] md:text-[12px] bg-[#F9FAFB] rounded-md font-semibold shadow-xs ${program.color} ${program.hover_bg} transition-all duration-300 cursor-pointer`}>{location}</motion.div>
                                ))}
                            </div>
                            <h3 className="font-semibold mt-3 text-sm">
                                Key Initiatives:
                            </h3>
                            {program.skills.map((skills, index) =>(
                                <li key={index} className="text-[13px] ml-4 mb-1 mt-1">{skills}</li>
                            ))}
                        </motion.div>
                    </div>
                </div>
                )
            })}
            
            <Footer />
        </>
    );
}