import React, { useEffect, useState } from 'react';
import { motion, stagger, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  }, 
  visible: {
    opacity: 1,
    x: 0, 
    transition:{ 
      type:'spring', 
      mass: 0.4,
      damping: 8,
    when: "beforeChildren",
    staggerChildren: 2
   }
  },
  exit:{
    x: '-100vw',
    transition:{
      ease: 'easeInOut'
    }
  }
}
const childVariant = {
  hidden: {
    opacity: 0
  }, 
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000);
  }, [setShowModal])

  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">

        <h2>Thank you for your order :)</h2>      
      <motion.p variants={childVariant}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariant}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;