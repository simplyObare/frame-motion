import { motion } from 'motion/react'

export const ProgressiveBar = () => {
  return (
    <div className="mt-6">
      <div className="w-full h-2 rounded bg-white">
        <motion.div
          animate={{ width: '100%' }}
          transition={{ duration: 15 }}
          className="w-1/12 h-full bg-cyan-300 rounded"
        ></motion.div>
      </div>
    </div>
  )
}
