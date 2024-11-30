import { motion } from 'motion/react'

export const GestureButton = () => {
  return (
    <div className="flex justify-center mt-10">
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: 'rgb(0,0,255)' }}
        whileTap={{ scale: 0.7 }}
        className="bg-white rounded-full w-44 text-gray-900 font-bold p-2"
      >
        Submit
      </motion.button>
    </div>
  )
}
