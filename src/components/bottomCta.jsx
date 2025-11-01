import { FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"
import { buttonHoverEffects, scrollLeftEffect, scrollUpDelayEffect, scrollUpEffect } from "../animations/effect"
export default function BottomCTA(props){
    return(
        <>
            <motion.div {...scrollUpEffect} className="w-full h-65 md:h-70 lg:h-80 flex justify-center items-center py-5 overflow-hidden">
                <div className="w-[90%] h-full rounded-md bg-blue-600 py-5 flex flex-col items-center">
                    <motion.h3 {...scrollUpEffect} className="text-white font-bold text-2xl md:text-3xl mt-5 lg:mt-10">
                        {props.title}
                    </motion.h3>
                    <motion.p {...scrollUpDelayEffect} className="text-gray-100 md:w-120 w-70 text-xs md:text-[14px] text-center mt-3">
                        {props.text}
                    </motion.p>
                    <motion.button {...buttonHoverEffects} className="flex mt-5 px-8 py-2.5 items-center rounded-md text-xs md:text-sm cursor-pointer bg-white text-blue-600 font-semibold">
                        <FaEnvelope  className="md:mt-0.5 mr-1"/> {props.btn_text}
                    </motion.button>
                </div>

            </motion.div>
        </>
    )
}