import { motion } from 'framer-motion'
const FadeInPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInPage
