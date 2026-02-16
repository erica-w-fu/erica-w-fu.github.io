import { motion } from "framer-motion";

const getVariants = (direction) => {
  switch (direction) {
    case "left":
      return {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "50%", opacity: 0 },
      };
    case "right":
      return {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-50%", opacity: 0 },
      };
    case "bottom":
      return {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-50%", opacity: 0 },
      };
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
  }
};

const transition = { duration: 0.4, ease: "easeInOut" };

export default function PageWrapper({ children, direction = "right" }) {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    >
      {children}
    </motion.div>
  );
}
