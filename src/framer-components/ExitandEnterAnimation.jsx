import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const ExitandEnterAnimation = () => {
  const [removeInnerCircle, setRemoveInnerCircle] = useState(false)

  useEffect(() => {
    setTimeout(() => setRemoveInnerCircle(true), 10000)
  }, [])

  return (
    <div>
      <div className="bg-white w-32 h-32 rounded-full mx-auto mt-10">
        <AnimatePresence>
          {removeInnerCircle === false && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 40 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, y: 100 }}
              className="bg-red w-24 h-24 rounded-full"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
export default ExitandEnterAnimation
