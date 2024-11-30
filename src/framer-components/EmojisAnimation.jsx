import { useState } from 'react'
import { motion } from 'motion/react'

export const EmojisAnimation = () => {
  const [showEmojis, setShowEmojis] = useState(false)

  const variants1 = {
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.3 },
    },
    hidden: {
      opacity: 0,
      transition: { when: 'afterChildren' },
    },
  }

  const variant2 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  }
  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center space-y-6">
        <motion.div
          className="flex justify-evenly w-72 h-14 p-4 items-center rounded-full bg-white text-3xl"
          animate={showEmojis ? 'visible' : 'hidden'}
          variants={variants1}
        >
          <motion.span variants={variant2} className="bg-transparent">
            😂
          </motion.span>
          <motion.span variants={variant2} className="bg-transparent">
            💖
          </motion.span>
          <motion.span variants={variant2} className="bg-transparent">
            💯
          </motion.span>
          <motion.span variants={variant2} className="bg-transparent">
            👍🏾
          </motion.span>
          <motion.span variants={variant2} className="bg-transparent">
            😇
          </motion.span>
        </motion.div>
        <motion.button
          className="bg-sky-500 py-2 px-4 rounded-lg text-white font-bold cursor-pointer"
          onClick={() => setShowEmojis(!showEmojis)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
        >
          {!showEmojis ? 'Show Emojis' : 'Hide Emojis'}
        </motion.button>
      </div>
    </div>
  )
}
