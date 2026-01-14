"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Animate = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {}, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        // transition={{duration: 0.5, delay: 0.25}}
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animate;
