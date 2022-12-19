import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom';

const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.8
};

export const MotionTag = ({ children }) => {

    const { pathname } = useLocation()

    return (
        <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    )
}
