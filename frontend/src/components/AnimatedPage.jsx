import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const MotionDiv = motion.div;

const AnimatedPage = ({ children }) => {
  return (
    <MotionDiv
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </MotionDiv>
  );
};

export default AnimatedPage;
