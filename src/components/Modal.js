import React from 'react';
import { Link } from 'react-router-dom';
import {motion ,AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const modal = {
    hiiden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y:"200px",
        opacity: 1,
        transition: {delay: 0.5}
    }
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode='wait'>
        { showModal && (
            <motion.div className='backdrop'
            variants={backdrop}
            animate="visible"
            initial="hidden">
                <motion.div className='modal'
                variants={backdrop}>
            <p>Want to make another pizza?</p>
            <Link to="/">
            <button>Start Again</button>

            </Link>
                </motion.div>

            </motion.div>
        ) }
    </AnimatePresence>
  )
}

export default Modal;