import { motion, scale } from "framer-motion";

export const scrollUpEffect = {
    initial : {opacity : 0, y:30},
    whileInView : {opacity : 1, y :0},
    transition : {duration :1},
    exit : {opacity : 0, y :30},
}
export const scrollUpDelayEffect = {
    initial : {opacity : 0, y:30},
    whileInView : {opacity : 1, y :0},
    transition : {duration :1, delay :0.3},
    exit : {opacity : 0, y :30},
}
export const scrollLeftEffect = {
    initial : {opacity : 0, x:30},
    whileInView : {opacity :1, x:0},
    transition : {duration :2},
    exit : {opacity : 0, x :30},
}
export const cardHoverEffects = {
    whileHover : {scale : 1.05}
}
export const cardScrollEffects = {
    initial : {opacity : 0, x : 30},
    whileInView : {opacity : 1, x:0},
    transition : {duration : 1},
    exit : {opacity : 0, x:30},
    whileHover : {scale : 1.05},
}
export const scrollRightEffect = {
    initial : {opacity : 0, x:-30},
    whileInView : {opacity :1, x:0},
    transition : {duration :2},
    exit : {opacity : 0, x :-30},
}
export const buttonHoverEffects = {
    whileHover : {scale :1.05},
    whileTap : {scale : 0.95}
}