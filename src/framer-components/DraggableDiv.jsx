import { motion } from 'motion/react'

export const DraggableDiv = () => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2, backgroundColor: 'fuchsia' }}
      dragConstraints={{
        top: 0,
        left: 0,
        right: window.innerWidth,
        bottom: window.innerHeight,
      }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      className="w-44 h-44 rounded-full bg-white mt-20 mx-auto cursor-pointer"
    ></motion.div>
  )
}
