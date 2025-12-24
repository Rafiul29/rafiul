'use client'
import { motion, AnimatePresence } from 'framer-motion';


const Loading = () => {
  return (
    <AnimatePresence >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-950"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loading

