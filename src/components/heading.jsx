import { Link } from 'react-router-dom';
export default function Heading(props){
    return(
        <>
            <div className="w-full h-60 md:h-80 relative mb-5 overflow-hidden">
                <img src={props.image} className='w-full h-full object-cover'/>
                <div className='absolute w-full h-full top-0 inset-0 bg-blue-800/60'>
                    <div className='px-15 h-auto py-5 absolute top-17 left-[20%] md:top-30 md:left-[35%] lg:left-[40%] flex flex-col items-center justify-center'>
                        <h3 className='text-white font-semibold text-xl md:text-2xl'>
                            {props.page} Page
                        </h3>
                        <p className='text-blue-200'>
                            <Link to="/" className='font-semibold text-blue-100'>Home</Link> / <Link to={props.link}>{props.page}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}