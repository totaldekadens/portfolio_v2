import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

// Fades in children
const FadeIn = ({ children }: Props) => {
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

export default FadeIn
