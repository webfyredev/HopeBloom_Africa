import aboutImg from '../images/ngo/bg (1).webp'
import { Link } from 'react-router-dom';
export default function Heading(){
    return(
        <>
            <div className="w-full h-60 md:h-80 relative mb-5">
                <img src={aboutImg} className='w-full h-full object-cover'/>
                <div className='absolute w-full h-full top-0 inset-0 bg-blue-800/60'>
                    <div className='px-15 h-auto py-5 absolute top-30 left-[40%] flex flex-col items-center justify-center'>
                        <h3 className='text-white font-semibold text-2xl '>
                            About Page
                        </h3>
                        <p className='text-blue-200'>
                            <Link className='font-semibold text-blue-100'>Home</Link> / About
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}