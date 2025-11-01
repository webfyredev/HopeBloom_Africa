import Footer from "../components/footer";
import HeadComponents from "../components/headComponents";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import programImgHeading from '../images/ngo/about.webp'
import { FaBullseye, FaMapMarkerAlt, FaFootballBall} from "react-icons/fa";

export default function Programs(){
    const locations = ['Kenya', 'Ghana', 'Rwanda','Senegal', 'Zambia'];
    const healthlist = ['Mobile Medical Clinics', 'Vaccination Campaigns', 'Maternal Health Programs']
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
            <div className="flex flex-row w-full border-1 border-red-500 mt-5 items-center">
                <div className="w-1/2 border-1 border-red-500 h-110 flex flex-col p-5">
                    <div className="flex w-30 items-center p-1 rounded-md bg-red-100 text-red-600">
                        <FaBullseye  className="w-3 h-3 mr-1"/>
                        <p className="text-xs font-semibold">Program Focus</p>
                    </div>
                    <h3 className="text-3xl font-bold mt-3">
                        Healthcare Outreach
                    </h3>
                    <p className="text-sm font-semibold text-red-600 mt-2">
                        Bringing Medical Care to Every Community
                    </p>
                    <p className="text-[13px] text-gray-500 mt-3">
                        Mobile clinics, vaccination programs, health education, and medica infrastructure development to ensure healthcare access in the most remote and undeserved communities accross africa
                    </p>
                    <div className="w-[80%] mt-2 flex flex-row justify-between px-5">
                        <div className="w-1/3 flex flex-col items-center">
                            <h3 className="text-lg font-bold text-red-600 mt-1">
                                100,000+
                            </h3>
                            <p className="text-xs text-gray-500">
                                Patients Treated
                            </p>
                        </div>
                        <div className="w-1/3 flex flex-col items-center">
                            <h3 className="text-lg font-bold text-red-600 mt-1">
                                45
                            </h3>
                            <p className="text-xs text-gray-500">
                                Mobile Clinics
                            </p>
                        </div>
                        <div className="w-1/3 flex flex-col items-center">
                            <h3 className="text-lg font-bold text-red-600 mt-1">
                                1,200
                            </h3>
                            <p className="text-xs text-gray-500">
                                Health Workers Trained
                            </p>
                        </div>
                    </div>
                    <div className="flex w-30 items-center p-1 rounded-md text-gray-500 mt-5">
                        <FaMapMarkerAlt  className="w-3 h-3 mr-1"/>
                        <p className="text-xs font-semibold">Active Locations:</p>
                    </div>
                    <div className="w-[65%] mt-2 flex justify-between">
                    {locations.map((map, index) => (
                        <div key={index} className="px-5 py-1 bg-red-100 text-red-600 rounded-sm">
                            <h3 className="text-[9px] ">
                                {map}
                            </h3>
                        </div>
                    ))}

                    
                    </div>
                        <p className="text-xs font-semibold mt-2 text-gray-600">Key Initiatives:</p>
                        <div className="flex flex-col ">
                            {healthlist.map((health) =>(
                                <div className="mt-1">
                                    <p className="text-xs">* {health}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-40 h-10 p-2 text-xs mt-3 rounded-sm bg-red-600 text-white font-semibold">
                            Support This Program
                        </button>

                </div>
                <img src="" className="w-1/2 h-110 border-1 border-blue-500"/>
            </div> 
            <Footer />
        </>
    );
}