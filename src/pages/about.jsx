import Footer from "../components/footer";
import Heading from "../components/heading";
import NavBar from "../components/navbar";

export default function About(){
    return(
        <>
            <NavBar />
            <Heading />
            <div className="flex flex-col items-center w-full border-2 border-red-500 mt-10 p-5">
                <h3 className="text-3xl font-bold">
                    About <span className="text-blue-600">HopeBloom_Africa</span>
                </h3>
                <p className="mt-2 w-130 text-[13px] text-center text-gray-600">
                    Founded in 2020, HopeBloom_Afrca emerged from a simple belief; every African community deserves the opportunity
                    to flourish and reach its full potential
                </p>
            </div>
            <Footer />
        </>
    );
}