import { motion } from "framer-motion";
import { scrollUpEffect, scrollUpDelayEffect } from "../animations/effect";
export default function HeadComponents(props){
    return(
        <>
            <div className="flex flex-col items-center w-full mt-10 p-5 bg-[#F9FAFB] overflow-hidden">
                <motion.h3 {...scrollUpEffect} className="text-2xl md:text-3xl font-bold mt-5">
                    {props.title_1} <span className="text-blue-600">{props.title_2}</span>
                </motion.h3>
                <motion.p {...scrollUpDelayEffect} className="mt-2 md:w-130 text-[13px] text-center text-gray-600">
                {props.text}
                </motion.p>
            </div>
        </>
    );
}